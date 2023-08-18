import Header from "./components/Header";
import RestaurantCard from "./components/RestaurantCard";
import {
  PrismaClient,
  Cuisine,
  Location,
  PRICE,
  Review,
  Booking,
} from "@prisma/client";
import "./globals.css";
import LargeCard from "./components/LargeCard";
import SmallCard from "./components/smallCard";
import exploreData from "../pages/api/home";

export interface RestaurantCardType {
  id: number;
  name: string;
  main_Image: string;
  cuisine: Cuisine;
  location: Location;
  price: PRICE;
  slug: string;
  reviews: Review[];
  Bookings: Booking[];
}

export interface SmallCardType {
  img: string;
  location: string;
  distance: string;
}

const prisma = new PrismaClient();

const fetchRestaurants = async (): Promise<RestaurantCardType[]> => {
  const restaurants = await prisma.restaurant.findMany({
    select: {
      id: true,
      name: true,
      main_Image: true,
      cuisine: true,
      location: true,
      price: true,
      slug: true,
      reviews: true,
      Bookings: true,
    },
  });

  return restaurants;
};

export default async function Home() {
  const restaurants = await fetchRestaurants();

  return (
    <main>
      <Header />
      <div className="lg:max-w-[1700px] ml-4 lg:m-auto lg:px-40 lg:mt-10">
        <h2 className="sm:ml-14 lg:ml-0 mt-10 mb-3 lg:mb-0 lg:mt-0 text-[30px] sm:text-[36px] lg:text-[40px] text-gray-700 font-semibold lg:py-8">
          Explore Restaurants
        </h2>
      </div>
      <div className="ml-1  max-w-[1500px] sm:m-auto flex flex-wrap sm:justify-center">
        {restaurants.map((restaurant) => (
          <RestaurantCard restaurant={restaurant} />
        ))}
      </div>
      <div className="m-auto sm:max-w-[1500px] lg:max-w-[1700px] lg:px-36 mt-20 ">
        <hr className="h-2 hidden lg:w-[58vw] mb-8" />
        <div className="sm:px-16 lg:px-0">
          <h2 className="ml-4 lg:ml-0 text-[30px] sm:text-[36px] lg:text-[40px] font-semibold lg:py-8 pt-8 pb-3">
            Explore BookBistro
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ml-[9px] lg:ml-0 ">
            {exploreData.map((item) => (
              <SmallCard
                key={item.location}
                img={item.img}
                distance={item.distance}
                location={item.location}
              />
            ))}
          </div>
        </div>

        <LargeCard
          img={
            "https://i.ibb.co/jTJ5hVN/two-pieces-medium-cooked-steak-served-with-tomato-mushroom-zucchini.jpg"
          }
          title="The Pinnacle of Reservation"
          description="Elevate Your Culinary Journey with Grace and Grandeur!"
          buttonText="Discover Delights"
        />
        <p className="text-center text-[20px] font-semibold w-full">
          Favorite restaurant not yet on BookBistro?{" "}
          <span className="text-red-600 cursor-pointer">
            Suggest a restaurant.
          </span>
        </p>
      </div>
    </main>
  );
}

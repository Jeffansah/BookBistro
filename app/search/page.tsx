import { Cuisine, Location, PRICE, PrismaClient } from "@prisma/client";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Header from "./components/Header";
import SearchRestaurantCard from "./components/SearchRestaurantCard";
import Sidebar from "./components/Sidebar";

const prisma = new PrismaClient();

interface SearchParams {
  location?: string;
  cuisine?: string;
  price?: PRICE;
}

const fetchSearchedRestaurant = async (searchParams: SearchParams) => {
  const where: any = {};
  if (searchParams.location) {
    const location = {
      name: {
        equals: searchParams.location.toLowerCase(),
      },
    };
    where.location = location;
  }
  if (searchParams.cuisine) {
    const cuisine = {
      name: {
        equals: searchParams.cuisine.toLowerCase(),
      },
    };
    where.cuisine = cuisine;
  }
  if (searchParams.price) {
    const price = {
      equals: searchParams.price,
    };
    where.price = price;
  }

  const select = {
    id: true,
    name: true,
    price: true,
    cuisine: true,
    location: true,
    main_Image: true,
    slug: true,
    reviews: true,
  };

  return prisma.restaurant.findMany({
    where,
    select,
  });
};

const fetchLocations = async () => {
  return prisma.location.findMany();
};

const fetchCuisines = async () => {
  return prisma.cuisine.findMany();
};

const Search = async ({ searchParams }: { searchParams: SearchParams }) => {
  const restaurants = await fetchSearchedRestaurant(searchParams);
  const locations = await fetchLocations();
  const cuisines = await fetchCuisines();

  return (
    <>
      <Header />

      <div className="flex py-4 lg:m-auto w-2/3 justify-between items-start">
        <Sidebar
          locations={locations}
          cuisines={cuisines}
          searchParams={searchParams}
        />
        <div className="lg:w-5/6 pr-4 lg:pr-0">
          {restaurants.length ? (
            restaurants.map((restaurant) => (
              <SearchRestaurantCard
                key={restaurant.id}
                restaurant={restaurant}
              />
            ))
          ) : (
            <p className="mt-2 text-2xl font-semibold">
              Sorry, we found no restaurants in this area.
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default Search;

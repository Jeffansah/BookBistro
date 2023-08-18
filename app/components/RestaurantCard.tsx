import Link from "next/link";
import { RestaurantCardType } from "../page";
import Price from "./Price";
import Stars from "./Stars";

interface Props {
  restaurant: RestaurantCardType;
}

const RestaurantCard = ({ restaurant }: Props) => {
  return (
    <div className="w-[11rem] h-64 lg:w-64 lg:h-72 m-3 rounded overflow-hidden border cursor-pointer hover:shadow-lg group">
      <Link href={`/restaurant/${restaurant.slug}`}>
        <div className="relative">
          <img
            src={restaurant.main_Image}
            alt=""
            className="w-full h-36 transition-transform transform-gpu group-hover:scale-105 ease-in-out duration-200"
          />
          <div className="p-2">
            <h3 className="font-bold text-lg lg:text-2xl lg:mb-2">
              {restaurant.name}
            </h3>
            <div className="flex items-center">
              <Stars reviews={restaurant.reviews} />
              <p className="ml-2 ">
                {restaurant.reviews.length} review
                {restaurant.reviews.length !== 1 && "s"}
              </p>
            </div>
            <div className="flex text-reg font-light capitalize">
              <p className="mr-3">{restaurant.cuisine.name}</p>
              <Price price={restaurant.price} />
              <p>{restaurant.location.name}</p>
            </div>
            <p className="text-sm mt-1 font-bold">
              {`${restaurant.Bookings.length} bookings so far`}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default RestaurantCard;

import { Cuisine, PRICE, Location, Review } from "@prisma/client";
import Link from "next/link";
import React from "react";
import { calculateReview } from "../../../utils/calculateReview";
import Price from "../../components/Price";
import Stars from "../../components/Stars";

interface Restaurant {
  cuisine: Cuisine;
  id: number;
  name: string;
  price: PRICE;
  location: Location;
  main_Image: string;
  slug: string;
  reviews: Review[];
}
const SearchRestaurantCard = ({ restaurant }: { restaurant: Restaurant }) => {
  const renderRatingText = () => {
    const rating = calculateReview(restaurant.reviews);

    if (rating > 4) return "Excellent";
    else if (rating <= 4 && rating > 3) return "Good";
    else if (rating <= 3 && rating > 0) return "Average";
    else return "No ratings yet";
  };

  return (
    <div className="border-b flex pb-5 ml-4 mb-5">
      <img
        src={restaurant.main_Image}
        alt=""
        className="lg:w-44 rounded lg:h-36 h-24 w-24 sm:h-32 sm:w-32"
      />
      <div className="lg:pl-5 pl-3">
        <h2 className="text-lg sm:text-2xl lg:text-3xl font-semibold">
          {restaurant.name}
        </h2>
        <div className="flex items-start">
          <div className="flex mb-2">
            <Stars reviews={restaurant.reviews} />
          </div>
          <p className="ml-2 text-sm">{renderRatingText()}</p>
        </div>
        <div className="lg:mb-9 mb-1">
          <div className="font-light flex text-reg">
            <p className="mr-4">
              <Price price={restaurant.price} />
            </p>
            <p className="mr-4 capitalize">{restaurant.cuisine.name}</p>
            <p className="mr-4 capitalize">{restaurant.location.name}</p>
          </div>
        </div>
        <div className="text-red-600">
          <Link href={`/restaurant/${restaurant.slug}`}>
            View more information
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchRestaurantCard;

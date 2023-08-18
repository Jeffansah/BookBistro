import { Review } from "@prisma/client";
import React from "react";
import Stars from "../../../components/Stars";

const ReviewCard = ({ review }: { review: Review }) => {
  return (
    <div className=" border-b pb-7 mb-7">
      <div className="flex">
        <div className="w-1/6 flex flex-col items-center">
          <div className="rounded-full bg-blue-400 lg:w-16 lg:h-16 w-10 h-10 flex items-center justify-center">
            <h2 className="text-white text-md lg:text-2xl capitalize">
              {review.first_name[0]}
              {review.last_name[0]}
            </h2>
          </div>
          <p className="text-center text-reg">{`${review.first_name} ${review.last_name}`}</p>
        </div>
        <div className="ml-10 w-5/6">
          <div className="flex items-center">
            <div className="flex mr-5">
              <Stars rating={review.rating} reviews={[]} />
            </div>
          </div>
          <div className="mt-5">
            <p className="lg:text-lg text-reg font-light">{review.text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;

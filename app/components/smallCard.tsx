"use client";

import Image from "next/image";
import Link from "next/link";

const SmallCard = ({
  img,
  location,
  distance,
}: {
  img: string;
  location: string;
  distance: string;
}) => {
  return (
    <Link href={`/search/?location=${location}`}>
      <div className="flex items-center m-2 mt-5 space-x-4 rounded-xl hover:bg-gray-100  cursor-pointer hover:scale-105 transition transform duration-200 ease-out">
        <div className="relative h-20 w-20">
          <Image
            src={img}
            layout="fill"
            className="rounded-lg"
            alt="locations"
          />
        </div>
        <div>
          <h2>{location}</h2>
          <h3 className="text-gray-500">{distance}</h3>
        </div>
      </div>
    </Link>
  );
};

export default SmallCard;

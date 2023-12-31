import Link from "next/link";
import React from "react";
import ReserveModal from "./ReserveModal";

const RestaurantNavbar = ({
  slug,
  openTime,
  closeTime,
}: {
  slug: string;
  openTime: string;
  closeTime: string;
}) => {
  return (
    <nav className="flex text-reg border-b pb-2">
      <Link href={`/restaurant/${slug}`} className="mr-7">
        Overview
      </Link>
      {/* <Link href={`/restaurant/${slug}/menu`} className="mr-7">
        Menu
      </Link> */}
      <ReserveModal openTime={openTime} closeTime={closeTime} slug={slug} />
    </nav>
  );
};

export default RestaurantNavbar;

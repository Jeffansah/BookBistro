import React from "react";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Header from "./components/Header";
import ReservationForm from "./components/ReservationForm";
import { PrismaClient } from "@prisma/client";
import { notFound } from "next/navigation";

const prisma = new PrismaClient();

const fetchRestaurantBySlug = async (slug: string) => {
  const restaurant = await prisma.restaurant.findUnique({
    where: {
      slug,
    },
  });

  if (!restaurant) {
    notFound();
  }

  return restaurant;
};

const ReservationPage = async ({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { date: string; partySize: string };
}) => {
  const restaurant = await fetchRestaurantBySlug(params.slug);

  return (
    <>
      <div className="border-t h-screen flex justify-center items-center pb-[200px] sm:pb-[300px] lg:pb-0 ">
        <div className="flex flex-col justify-center items-center py-9 w-3/5 sm:m-auto ml-[300px]">
          <div>
            <Header
              image={restaurant.main_Image}
              name={restaurant.name}
              date={searchParams.date}
              partySize={searchParams.partySize}
            />
            <ReservationForm
              slug={params.slug}
              date={searchParams.date}
              partySize={searchParams.partySize}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ReservationPage;

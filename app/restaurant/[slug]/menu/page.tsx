import React from "react";
import Link from "next/link";
import Navbar from "../../../components/Navbar";
import Header from "../components/Header";
import RestaurantNavbar from "../components/RestaurantNavbar";
import RestaurantMenu from "./components/RestaurantMenu";
import RestaurantLayout from "../RestaurantLayout";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const fetchItems = async (slug: string) => {
  const restaurant = await prisma.restaurant.findUnique({
    where: {
      slug,
    },
    select: {
      items: true,
    },
  });

  if (!restaurant) {
    throw new Error();
  }

  return restaurant.items;
};

const MenuPage = async ({ params }: { params: { slug: string } }) => {
  const menu = await fetchItems(params.slug);

  return (
    <RestaurantLayout name={params.slug}>
      <div className="bg-white w-[100%] rounded p-3 shadow">
        <RestaurantNavbar slug={params.slug} />
        <RestaurantMenu menu={menu} />
      </div>
    </RestaurantLayout>
  );
};

export default MenuPage;

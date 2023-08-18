import React from "react";
import Header from "./components/Header";

const RestaurantLayout = ({
  children,
  name,
}: {
  children: React.ReactNode;
  name: string;
}) => {
  return (
    <main>
      <Header name={name} />
      <div className="flex lg:m-auto lg:w-2/3 lg:justify-between justify-center  lg:items-start 0 -mt-11">
        {children}
      </div>
    </main>
  );
};

export default RestaurantLayout;

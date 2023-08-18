import { Cuisine, Location, PRICE } from "@prisma/client";
import Link from "next/link";

const Sidebar = ({
  locations,
  cuisines,
  searchParams,
}: {
  locations: Location[];
  cuisines: Cuisine[];
  searchParams: { location?: string; cuisine?: string; price?: PRICE };
}) => {
  return (
    <div className="w-1/5 mx-2">
      <div className="border-b pb-4">
        <h1 className="mb-2 font-semibold">Region</h1>
        {locations.map((location) => (
          <Link
            href={{
              pathname: "/search",
              query: {
                ...searchParams,
                location: location.name,
              },
            }}
          >
            <p key={location.id} className="capitalize font-light text-reg">
              {location.name}
            </p>
          </Link>
        ))}
      </div>
      <div className="border-b pb-4 mt-3">
        <h1 className="mb-2 font-semibold">Cuisine</h1>
        {cuisines.map((cuisine) => (
          <Link
            href={{
              pathname: "/search",
              query: {
                ...searchParams,
                cuisine: cuisine.name,
              },
            }}
          >
            <p key={cuisine.id} className="capitalize font-light text-reg">
              {cuisine.name}
            </p>
          </Link>
        ))}
      </div>
      <div className="mt-3 pb-4">
        <h1 className="mb-2">Price</h1>
        <div className="flex flex-col lg:flex-row">
          <Link
            className="text-start lg:text-center  border w-full text-reg font-light rounded-l p-2"
            href={{
              pathname: "/search",
              query: {
                ...searchParams,
                price: PRICE.CHEAP,
              },
            }}
          >
            $
          </Link>

          <Link
            className="text-start lg:text-center border-r border-t border-b w-full text-reg font-light p-2"
            href={{
              pathname: "/search",
              query: {
                ...searchParams,
                price: PRICE.REGULAR,
              },
            }}
          >
            $$
          </Link>
          <Link
            className="text-start lg:text-center border-r border-t border-b w-full text-reg font-light p-2 rounded-r"
            href={{
              pathname: "/search",
              query: {
                ...searchParams,
                price: PRICE.EXPENSIVE,
              },
            }}
          >
            $$$
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

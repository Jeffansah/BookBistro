"use client";

import Link from "next/link";
import errorMascot from "../../public/icons/error.png";
import Image from "next/image";

const notFound = ({ error }: { error: Error }) => {
  return (
    <div className="bg-gray-200 h-screen flex flex-col justify-center items-center">
      <Image src={errorMascot} alt="" className="w-56 mb-8" />
      <div className="bg-white px-9 py-14 shadow rounded">
        <h3 className="text-3xl font-bold">Well, this is embarrassing</h3>
        <p className="mt-2 text-reg font-bold">
          We couldn't find your restaurant
        </p>
        <p className="mt-6 text-sm font-light">
          Error Code: <span className="text-red-500">404</span>
        </p>
        <Link href="/">
          <button className="mt-6 bg-blue-400 text-white border p-1 px-4 rounded mr-3">
            Go home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default notFound;

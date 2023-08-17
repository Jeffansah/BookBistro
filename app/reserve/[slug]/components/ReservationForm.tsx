"use client";

import { CircularProgress } from "@mui/material";
import Image from "next/image";
import { useState, useEffect } from "react";
import useReservation from "../../../../hooks/useReservation";
import WestIcon from "@mui/icons-material/West";
import Link from "next/link";

const ReservationForm = ({
  slug,
  date,
  partySize,
}: {
  slug: string;
  date: string;
  partySize: string;
}) => {
  const [inputs, setInputs] = useState({
    bookerFirstName: "",
    bookerLastName: "",
    bookerPhone: "",
    bookerEmail: "",
    bookerOccasion: "",
    bookerRequest: "",
  });

  const [day, time] = date.split("T");

  const [disabled, setDisabled] = useState(true);

  const [didBook, setDidBook] = useState(false);

  const { error, loading, createReservation } = useReservation();

  useEffect(() => {
    if (
      inputs.bookerFirstName &&
      inputs.bookerLastName &&
      inputs.bookerEmail &&
      inputs.bookerPhone
    )
      return setDisabled(false);
    return setDisabled(true);
  }, [inputs]);

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = async () => {
    const booking = await createReservation({
      slug,
      time,
      day,
      partySize,
      bookerFirstName: inputs.bookerFirstName,
      bookerLastName: inputs.bookerLastName,
      bookerEmail: inputs.bookerEmail,
      bookerPhone: inputs.bookerPhone,
      bookerRequest: inputs.bookerRequest,
      bookerOccasion: inputs.bookerOccasion,
      setDidBook,
    });
  };

  return (
    <div className="mt-10 flex flex-wrap justify-between w-[660px]">
      {didBook ? (
        <>
          <Image
            className="mt-3"
            src="https://i.ibb.co/F865Bvk/High-five.jpg"
            width={400}
            height={400}
            alt="success"
          />
          <div className="flex flex-col mt-2 ">
            <p className="text-2xl">
              You've successfully completed your booking!
            </p>
            <p className="text-lg">Enjoy your reservation</p>
            <Link href={"/"} className=" w-[110px]">
              <div className="flex mt-8 hover:shadow-md rounded-lg">
                <WestIcon />
                <p className="ml-2">Go home</p>
              </div>
            </Link>
          </div>
        </>
      ) : (
        <>
          {" "}
          <input
            name="bookerFirstName"
            onChange={handleChangeInput}
            value={inputs.bookerFirstName}
            type="text"
            className="border rounded p-3 w-80 mb-4 focus:outline-blue-300"
            placeholder="First name"
          />
          <input
            name="bookerLastName"
            onChange={handleChangeInput}
            value={inputs.bookerLastName}
            type="text"
            className="border rounded p-3 w-80 mb-4 focus:outline-blue-300"
            placeholder="Last name"
          />
          <input
            name="bookerPhone"
            onChange={handleChangeInput}
            value={inputs.bookerPhone}
            type="text"
            className="border rounded p-3 w-80 mb-4 focus:outline-blue-300"
            placeholder="Phone number"
          />
          <input
            name="bookerEmail"
            onChange={handleChangeInput}
            value={inputs.bookerEmail}
            type="text"
            className="border rounded p-3 w-80 mb-4 focus:outline-blue-300"
            placeholder="Email"
          />
          <input
            name="bookerOccasion"
            onChange={handleChangeInput}
            value={inputs.bookerOccasion}
            type="text"
            className="border rounded p-3 w-80 mb-4 focus:outline-blue-300"
            placeholder="Occasion (optional)"
          />
          <input
            name="bookerRequest"
            onChange={handleChangeInput}
            value={inputs.bookerRequest}
            type="text"
            className="border rounded p-3 w-80 mb-4 focus:outline-blue-300"
            placeholder="Requests (optional)"
          />
          <button
            disabled={disabled || loading}
            className="bg-red-600 w-full p-3 text-white font-bold rounded disabled:bg-gray-300"
            onClick={handleClick}
          >
            {loading ? (
              <CircularProgress color="inherit" />
            ) : (
              "Complete reservation"
            )}
          </button>
          <p className="mt-4 text-sm">
            By clicking “Complete reservation” you agree to the BookBistro Terms
            of Use and Privacy Policy. Standard text message rates may apply.
            You may opt out of receiving text messages at any time.
          </p>
        </>
      )}
    </div>
  );
};

export default ReservationForm;

"use client";

import { useState, useEffect } from "react";

const ReservationForm = () => {
  const [inputs, setInputs] = useState({
    bookerFirstName: "",
    bookerLastName: "",
    bookerPhone: "",
    bookerEmail: "",
    bookerOccasion: "",
    bookerRequest: "",
  });

  const [disabled, setDisabled] = useState(true);

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

  return (
    <div className="mt-10 flex flex-wrap justify-between w-[660px]">
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
        disabled={disabled}
        className="bg-red-600 w-full p-3 text-white font-bold rounded disabled:bg-gray-300"
      >
        Complete reservation
      </button>
      <p className="mt-4 text-sm">
        By clicking “Complete reservation” you agree to the BookBistro Terms of
        Use and Privacy Policy. Standard text message rates may apply. You may
        opt out of receiving text messages at any time.
      </p>
    </div>
  );
};

export default ReservationForm;

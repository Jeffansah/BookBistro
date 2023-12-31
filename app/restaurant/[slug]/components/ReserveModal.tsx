"use client";

import React, { useEffect, useState, useContext } from "react";
import Box from "@mui/material/Box";
import { CircularProgress } from "@mui/material";
import Alert from "@mui/joy/Alert";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import Modal from "@mui/material/Modal";
import { partySize as partySizes, times } from "../../../../data/index";
import DatePicker from "react-datepicker";
import useAvailability from "../../../../hooks/useAvailablity";
import Link from "next/link";
import {
  convertToDisplayTime,
  Time,
} from "../../../../utils/convertToDisplayTime";

import { AuthenticationContext } from "../../../context/AuthContext";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 300,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const ReserveModal = ({
  openTime,
  closeTime,
  slug,
}: {
  openTime: string;
  closeTime: string;
  slug: string;
}) => {
  const { data, error, loading, fetchAvailabilities } = useAvailability();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [time, setTime] = useState(openTime);
  const [partySize, setPartySize] = useState("2");
  const [day, setDay] = useState(new Date().toISOString().split("T")[0]);

  console.log({ data });

  const handleChangeDate = (date: Date | null) => {
    if (date) {
      setDay(date.toISOString().split("T")[0]);
      return setSelectedDate(date);
    }
    return setSelectedDate(null);
  };

  const handleClick = () => {
    fetchAvailabilities({
      slug,
      day,
      time,
      partySize,
    });
  };

  const filterRestaurantTime = () => {
    const timesWithinWindow: typeof times = [];

    let isWithinWindow = false;

    times.forEach((time) => {
      if (time.time === openTime) {
        isWithinWindow = true;
      }
      if (isWithinWindow) {
        timesWithinWindow.push(time);
      }
      if (time.time === closeTime) {
        isWithinWindow = false;
      }
    });

    return timesWithinWindow;
  };

  return (
    <>
      <h1 onClick={handleOpen} className="lg:hidden">
        Reservation
      </h1>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="sm:w-[400px]">
          <div className="bg-white p-3">
            <div className="text-center border-b pb-2 font-bold">
              <h4 className="mr-7 text-lg">Make a Reservation</h4>
            </div>
            <div className="my-3 flex flex-col">
              <label htmlFor="">Party size</label>
              <select
                name=""
                className="py-3 border-b font-light"
                id=""
                value={partySize}
                onChange={(e) => setPartySize(e.target.value)}
              >
                {partySizes.map((item) => (
                  <option value={item.value}>{item.label}</option>
                ))}
              </select>
            </div>
            <div className="flex justify-between">
              <div className="flex flex-col w-[48%]">
                <label htmlFor="">Date</label>
                <DatePicker
                  selected={selectedDate}
                  onChange={handleChangeDate}
                  className="py-3 border-b font-light text-reg w-24"
                  dateFormat="MMMM d"
                  wrapperClassName="w-[48%]"
                />
              </div>
              <div className="flex flex-col w-[48%]">
                <label htmlFor="">Time</label>
                <select
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  name=""
                  id=""
                  className="py-3 border-b font-light"
                >
                  {filterRestaurantTime().map((time) => (
                    <option value={time.time}>{time.displayTime}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="mt-5">
              <button
                onClick={handleClick}
                className="bg-red-600 rounded w-full px-4 text-white font-bold h-16"
                disabled={loading}
              >
                {loading ? <CircularProgress color="inherit" /> : "Find a Time"}
              </button>
            </div>
            {data && data.length ? (
              <div className="mt-4">
                <p className="text-reg">Select a Time</p>
                <div className="flex flex-wrap mt-2">
                  {data.map((time) => {
                    return time.available ? (
                      <Link
                        href={`reserve/${slug}?date=${day}T${time.time}&partySize=${partySize}`}
                        className="bg-red-600 cursor-pointer p-2 w-24 text-center mb-3 text-white rounded mr-3"
                      >
                        <p className="text-sm font-bold">
                          {convertToDisplayTime(time.time as Time)}
                        </p>
                      </Link>
                    ) : (
                      <p className="bg-gray-300 p-2 text-center text-sm font-light w-24 rounded mr-3 mb-3 text-black cursor-default">
                        {convertToDisplayTime(time.time as Time)}
                      </p>
                    );
                  })}
                </div>
              </div>
            ) : null}
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default ReserveModal;

"use client";

import React, { useEffect, useState, useContext } from "react";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/joy/CircularProgress";
import Alert from "@mui/joy/Alert";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import Modal from "@mui/material/Modal";
import AuthModalInputs from "./AuthModalInputs";
import useAuth from "../../hooks/useAuth";
import error from "../restaurant/error";
import loading from "../loading";
import { AuthenticationContext } from "../context/AuthContext";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const AuthModal = ({ isSignin }: { isSignin: boolean }) => {
  const { loading, data, error, setAuthState } = useContext(
    AuthenticationContext
  );

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { signin, signup } = useAuth();

  const [inputs, setInputs] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    city: "",
    password: "",
  });

  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if (isSignin) {
      if (inputs.password && inputs.email) {
        return setDisabled(false);
      }

      setDisabled(true);
    } else {
      if (
        inputs.firstName &&
        inputs.lastName &&
        inputs.email &&
        inputs.password &&
        inputs.phone &&
        inputs.city
      ) {
        return setDisabled(false);
      }

      setDisabled(true);
    }
  }, [inputs]);

  const handleClick = () => {
    if (isSignin) {
      signin({ email: inputs.email, password: inputs.password }, handleClose);
    } else {
      signup(inputs, handleClose);
    }
  };

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <button
        onClick={handleOpen}
        className={`${
          isSignin && " lg:bg-blue-400 lg:text-white"
        } border p-2 px-5 rounded mr-3 bg-transparent border-none sm:border`}
      >
        {isSignin ? "Sign in" : "Sign up"}
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {loading ? (
            <div className="py-24 px-2 h-[600px] flex justify-center">
              <CircularProgress variant="soft" />
            </div>
          ) : (
            <div className="p-2 h-[600px]">
              {error ? (
                <Alert
                  className="mb-4"
                  startDecorator={
                    <ErrorOutlineOutlinedIcon className="text-red-600" />
                  }
                  variant="soft"
                  color="danger"
                >
                  {error}
                </Alert>
              ) : null}
              <div className="uppercase font-bold text-center pb-2 border-b mb-2">
                <p className="text-sm">
                  {isSignin ? "Sign in" : "Create Account"}
                </p>
                <p>{data?.firstName}</p>
              </div>
              <div className="m-auto">
                <h2 className="text-2xl font-light text-center mb-8">
                  {isSignin
                    ? "Log Into Your Account"
                    : "Create Your BookBistro Account"}
                </h2>
                <AuthModalInputs
                  inputs={inputs}
                  handleChangeInput={handleChangeInput}
                  isSignIn={isSignin}
                />
                <button
                  className="uppercase bg-red-600 w-full text-white p-3 rounded text-sm mb-5 disabled:bg-gray-400"
                  disabled={disabled}
                  onClick={handleClick}
                >
                  {isSignin ? "Sign in" : "Create Account"}
                </button>
              </div>
            </div>
          )}
        </Box>
      </Modal>
    </>
  );
};

export default AuthModal;

interface Props {
  inputs: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    city: string;
    password: string;
  };
  handleChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isSignIn: boolean;
}

const AuthModalInputs = ({ inputs, handleChangeInput, isSignIn }: Props) => {
  return (
    <div className="max-w-[300px] sm:max-w-[1700px] ml-[60px] sm:ml-0 gap-3">
      {isSignIn ? null : (
        <div className="my-3 flex justify-between text-sm">
          <input
            type="text"
            className="border rounded p-2 py-3 w-[49%] focus:outline-blue-300"
            placeholder="First Name"
            value={inputs.firstName}
            onChange={handleChangeInput}
            name="firstName"
          />
          <input
            type="text"
            className="border rounded p-2 py-3 w-[49%] focus:outline-blue-300"
            placeholder="Last Name"
            value={inputs.lastName}
            onChange={handleChangeInput}
            name="lastName"
          />
        </div>
      )}
      <div className="my-3 flex justify-between text-sm ">
        <input
          type="email"
          className="border rounded p-2 py-3 w-full focus:outline-blue-300"
          placeholder="Email"
          value={inputs.email}
          onChange={handleChangeInput}
          name="email"
        />
      </div>
      {isSignIn ? null : (
        <div className="my-3 flex justify-between text-sm">
          <input
            type="text"
            className="border rounded p-2 py-3 w-[49%] focus:outline-blue-300"
            placeholder="Phone"
            value={inputs.phone}
            onChange={handleChangeInput}
            name="phone"
          />
          <input
            type="text"
            className="border rounded p-2 py-3 w-[49%] focus:outline-blue-300"
            placeholder="City"
            onChange={handleChangeInput}
            value={inputs.city}
            name="city"
          />
        </div>
      )}
      <div className="my-3 flex justify-between text-sm">
        <input
          type="password"
          className="border rounded p-2 py-3 w-full focus:outline-blue-300"
          onChange={handleChangeInput}
          name="password"
          placeholder="password"
        />
      </div>
    </div>
  );
};

export default AuthModalInputs;

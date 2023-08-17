import CircularProgress from "@mui/joy/CircularProgress";
import Header from "./components/Header";

const ReservationPage = () => {
  return (
    <>
      <div className="border-t h-screen">
        <div className="py-9 w-3/5 m-auto">
          {/* <CircularProgress variant="soft" /> */}
          <h3 className="font-bold">You're almost done!</h3>
          <div className="mt-5 flex">
            <div className="w-32 h-18 rounded bg-slate-200 animate-pulse" />
            <div className="ml-4">
              <div className="h-4 w-40 bg-slate-200 animate-pulse"></div>
              <div className="flex mt-3">
                <div className="mr-6 h-3 bg-slate-200 animate-pulse"></div>
                <div className="mr-6 h-3 bg-slate-200 animate-pulse"></div>
                <div className="mr-6 h-3 bg-slate-200 animate-pulse"></div>
              </div>
            </div>
          </div>
          <div className="mt-10 flex flex-wrap justify-between w-[660px]">
            <input
              type="text"
              className="border rounded p-3 w-80 mb-4"
              placeholder="First name"
            />
            <input
              type="text"
              className="border rounded p-3 w-80 mb-4"
              placeholder="Last name"
            />
            <input
              type="text"
              className="border rounded p-3 w-80 mb-4"
              placeholder="Phone number"
            />
            <input
              type="text"
              className="border rounded p-3 w-80 mb-4"
              placeholder="Email"
            />
            <input
              type="text"
              className="border rounded p-3 w-80 mb-4"
              placeholder="Occasion (optional)"
            />
            <input
              type="text"
              className="border rounded p-3 w-80 mb-4"
              placeholder="Requests (optional)"
            />
            <button className="bg-red-600 w-full p-3 text-white font-bold rounded disabled:bg-gray-300">
              Complete reservation
            </button>
            <p className="mt-4 text-sm">
              By clicking “Complete reservation” you agree to the BookBistro
              Terms of Use and Privacy Policy. Standard text message rates may
              apply. You may opt out of receiving text messages at any time.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReservationPage;

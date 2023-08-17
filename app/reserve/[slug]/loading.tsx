import CircularProgress from "@mui/joy/CircularProgress";
import Header from "./components/Header";

const ReservationPage = () => {
  return (
    <>
      <div className="border-t h-screen">
        <div className="py-9 w-3/5 m-auto">
          <Header />
          <CircularProgress variant="soft" />
        </div>
      </div>
    </>
  );
};

export default ReservationPage;

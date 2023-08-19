import Header from "./components/Header";

const loading = () => {
  return (
    <main className="">
      <Header />
      {/* <div className="h-[80vh] flex justify-center items-center">
        <Spin size="large" />
      </div> */}

      <div className="grid grid-cols-1 sm:hidden gap-1 sm:max-w-[600px] max-w-[1700px] lg:max-w-[1700px] lg:m-auto py-3 lg:px-36 mt-10 lg:flex flex-wrap justify-center sm:gap-2 px-6">
        {[
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        ].map((num) => (
          <div
            key={num}
            className="animate-pulse bg-slate-200 w-full sm:w-64 h-72 rounded overflow-hidden border cursor-pointer"
          ></div>
        ))}
      </div>
    </main>
  );
};

export default loading;

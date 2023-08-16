import Header from "./components/Header";

const loading = () => {
  return (
    <main className="h-screen">
      <Header />
      {/* <div className="h-[80vh] flex justify-center items-center">
        <Spin size="large" />
      </div> */}

      <div className="max-w-[1700px] m-auto py-3 px-36 mt-10 flex flex-wrap justify-center gap-2">
        {[
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        ].map((num) => (
          <div
            key={num}
            className="animate-pulse bg-gray-200 w-64 h-72 rounded overflow-hidden border cursor-pointer"
          ></div>
        ))}
      </div>
    </main>
  );
};

export default loading;

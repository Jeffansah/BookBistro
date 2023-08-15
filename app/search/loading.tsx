import Header from "./components/Header";

const loading = () => {
  return (
    <main>
      <Header />
      <div className="flex py-4 m-auto w-2/3 justify-between items-start">
        <div className="w-1/5 bg-slate-200 h-[25vh] animate-pulse">
          <div className="border-b pb-4"></div>
        </div>
        <div className="w-5/6">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
            <div className="border-b flex pb-5 ml-4">
              <div className="h-36 w-44 bg-slate-200 animate-pulse" />
              <div className="pl-5">
                <div className="w-32 h-6 bg-slate-200 animate-pulse"></div>
                <div className="mt-2 w-10 h-6 bg-slate-200 animate-pulse"></div>
                <div className="mt-16 w-32 h-6 bg-slate-200 animate-pulse"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default loading;

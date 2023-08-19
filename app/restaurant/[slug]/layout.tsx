import Header from "./components/Header";

const RestaurantLayout = ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { slug: string };
}) => {
  return (
    <main>
      <Header name={params.slug} />
      <div className="flex lg:m-auto lg:w-2/3 lg:justify-between justify-center  lg:items-start 0 -mt-11 lg:-mt-11">
        {children}
      </div>
    </main>
  );
};

export default RestaurantLayout;

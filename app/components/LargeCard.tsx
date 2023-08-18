import Image from "next/image";

const LargeCard = ({
  img,
  title,
  description,
  buttonText,
}: {
  img: string;
  title: string;
  description: string;
  buttonText: string;
}) => {
  return (
    <div className="flex lg:items-center lg:rounded-2xl h-96 min-w-[300px] mt-32 lg:mt-44 mb-6 lg:bg-[url(https://i.ibb.co/jTJ5hVN/two-pieces-medium-cooked-steak-served-with-tomato-mushroom-zucchini.jpg)] bg-[url(https://i.ibb.co/M2dXzpL/Untitled-1.webp)] bg-cover bg-center bg-no-repeat">
      <div className="cursor-pointer w-[58vw] ml-10">
        <h3 className="text-[36px] mt-10 mb-3 w-64 font-semibold text-white">
          {title}
        </h3>
        <p className="text-lg text-gray-200">{description}</p>
        <button className="text-md text-white bg-red-600 px-4 py-4 rounded-lg mt-5 hover:bg-red-700">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default LargeCard;

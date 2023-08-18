import React from "react";

const Images = ({ images }: { images: string[] }) => {
  return (
    <div>
      <h1 className="font-bold text-lg lg:text-3xl mt-10 mb-7 border-b pb-5">
        {images.length} photo{(images.length > 1 || images.length < 1) && "s"}
      </h1>
      <div className="flex flex-wrap">
        {images.map((image) => (
          <img
            key={image}
            className="lg:w-56 lg:h-44 w-40 h-28 mr-1 mb-1"
            src={image}
            alt=""
          ></img>
        ))}
      </div>
    </div>
  );
};

export default Images;

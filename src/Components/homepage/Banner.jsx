import React from 'react';
import bookimage from "../../assets/hero_img.jpg"

const Banner = () => {
  return (
    <div>
     
        <div className=" hero bg-base-200 min-h-[70%] mx-auto hero-content flex-col lg:flex-row-reverse justify-between mt-12 ">
          <img
            src={bookimage}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold mb-12">
              Books to freshen up <br /> your bookshelf
            </h1>

            <button className="btn btn-success text-white">
              View The List
            </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;

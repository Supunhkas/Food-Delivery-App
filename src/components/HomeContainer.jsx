import React from "react";
import Delivery from "../assets/img/delivery.png";
import HeroBG from "../assets/img/heroBg.png";
import { heroData } from "../utils/data";

const HomeContainer = () => {
  return (
    <section
      className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full "
      id="home"
    >
      <div className=" py-2 flex-1 flex flex-col items-start justify-center md:items-start gap-6 ">
        <div className="flex items-center gap-2 justify-center bg-orange-100 px-2 py-1 rounded-full">
          <p className="text-base text-orange-500 font-semibold ">
            Bike Delivety
          </p>
          <div className="w-8 h-8 rounded-full overflow-hidden bg-white drop-shadow-xl">
            <img
              src={Delivery}
              className="w-full h-full object-contain"
              alt="bike"
            />
          </div>
        </div>
        <p className=" text-[2.5rem] lg:text-[4rem] font-bold tracking-wide text-headingColor ">
          The fatster delivery in
          <span className="text-orange-600 text-[3rem] lg:text-[5rem]">
            your city
          </span>
        </p>
        <p className=" text-base text-textColor text-center md:text-left md:w-[80%] lg:text-[1.3 rem]">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum
          placeat minus saepe nihil obcaecati esse deserunt debitis magnam
          consectetur, reprehenderit, ipsam tempora, ipsum veritatis expedita
          voluptatem sit suscipit iusto pariatur?
        </p>

        <button
          type="button"
          className="bg-gradient-to-br from-orange-400 to-orange-500 w-full md:w-auto px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100"
        >
          Order Now
        </button>
      </div>
      <div className="py-2 flex-1 flex items-center relative ">
        <img
          src={HeroBG}
          alt="herobg"
          className="lg:h-650 h-420 w-full ml-auto lg:w-auto"
        />

        <div className=" w-full h-full absolute flex items-center justify-center top-0 left-0  py-4 gap-4 flex-wrap drop-shadow-lg lg:px-40">
          {heroData &&
            heroData.map((n) => (
              <div
                key={n.id}
                className=" lg:w-190 p-4 bg-cardOverlay backdrop-blur-md rounded-3xl flex flex-col justify-center items-center"
              >
                <img
                  src={n.imageSrc}
                  alt="item 1"
                  className="w-20 lg:w-40 lg:-mt-20 -mt-10   "
                />
                <p className="text-base lg:text-xl font-semibold text-textColor mt-2 lg:mt-4">
                  {n.name}
                </p>
                <p className="text-[12px] lg:text-sm text-gray-500 font-semibold lg:my-3 my-1 ">
                  {n.decp}
                </p>
                <p className="text-sm font-semibold text-headingColor ">
                  <span className="text-xs text-red-600">$</span> {n.price}
                </p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default HomeContainer;

import React from "react";
import "./style.css";

function Top() {
  return (
    <>
      <div className="relative w-full pb-10 md:h-[920px] h-full  ">
        <img
          src="/images/background.png"
          alt="Hero background"
          className="absolute top-0 left-0 object-cover w-full h-full "
        />
        <div className="md:absolute inset-0 md:pt-0 flex justify-center items-center m-[30px] text-white pt-[90%] ">
          <div className="bg-black/30 backdrop-blur-sm p-8 w-full md:mt-[40%] md:max-w-[850px] md:h-[full] h-[250px] rounded-[20px] mt-[30%] ">
            <h1 className="text-3xl md:text-5xl mb-4 font-playfair">
              Sustainably Growing the Future
            </h1>
            <p className="font-sans mb-[20px] w-full max-w-[600px] text-sm md:text-base">
              We are committed to cultivating sustainable, high-quality crops
              and meat products to nourish communities locally and globally,
              while driving innovation and food security.
            </p>
            <div className="bg-red flex justify-center">
              <button className="md:w-full max-w-[250px] md:h-[50px] font-sans mb-[20px] text-black bg-[#F9DF02] rounded-[20px] w-[150px] h-[35px] text-sm">
                Get in touch with us
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Top;

import React from "react";

function LifLatest() {
  return (
    <>
      {" "}
      <div className=" w-full md:h-[429px] h-[290px] flex justify-center items-center bg-[#ECFDF5]">
        <div className="w-full h-[160px] bg-[#74451F]  rounded-[15px] flex flex-col justify-center items-center  gap-4  md:mx-[150px] mx-2">
          <p className="w-full pt-4 font-[600] font-playfair line-[42px] flex justify-center text-center text-xl">
            Get the Latest LIF update by subscribing to our News Letter
          </p>
          <div className="relative pb-8 md:w-[44%] w-full  px-2 ">
            <label
              htmlFor="inputField"
              className="block text-gray-700  items-center  font-bold mb-2"
            ></label>
            <input
              type="email"
              id="inputField"
              placeholder="Enter Email Address"
              className="md:w-full w-full border border-gray-300 rounded-[20px] h-[50px] text-xs p-2"
            />
            <button className="absolute right-3 bottom-[42px]  w-[80px] h-[30px] text-xs text-black bg-[#F9DF02] rounded-[12px] font-medium ">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default LifLatest;

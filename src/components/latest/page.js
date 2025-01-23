import React from "react";

function LifLatest() {
  return (
    <>
      {" "}
      <div className=" w-full h-[429px] flex justify-center items-center bg-[#ECFDF5]">
        <div className="w-full h-[160px] bg-[#74451F]  rounded-[15px] flex flex-col justify-center items-center  gap-4  md:mx-[150px]">
          <p className="w-full py-3 font-[600] font-playfair line-[42px] flex justify-center">
            Get the Latest LIF update by subscribing to our News Letter
          </p>
          <div className="relative pb-8 w-[46%] ">
            <label
              htmlFor="inputField"
              className="block text-gray-700  items-center  font-bold mb-2"
            ></label>
            <input
              type="email"
              id="inputField"
              placeholder="Enter Email Address"
              className="w-full border border-gray-300 rounded-[20px] p-4  text-xs"
            />
            <button className="absolute right-1 bottom-[42px]  w-[100px] h-[30px] text-xs text-black bg-[#F9DF02] rounded-[12px] font-medium ">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default LifLatest;

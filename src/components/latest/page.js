import React from "react";

function LifLatest() {
  return (
    <>
      {" "}
      <div className="bg-[#ECFDF5] w-full h-[429px] flex justify-center items-center">
        <div className="w-[750px] h-[160px] bg-[#74451F]  rounded-[15px] flex flex-col justify-center items-center  gap-4 ">
          <p className="py-3 font-[600] font-playfair line-[42px] ">
            Get the Latest LIF update by subscribing to our News Letter
          </p>
          <div className="relative w-[543px] pb-8 ">
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

import React from "react";
import { Item } from "../data";

function Choose() {
  return (
    <>
      <div className="w-full bg-[#ECFDF5] pb-6">
        <p className="font-[550] text-xl text-[#000000] flex justify-center w-full mb-[30px] h-[43px] gap-9 items-center ">
          Why choose us
        </p>
        <div className=" w-full flex justify-center">
          <div className="md:w-[750px]  flex md:flex-row justify-center md:gap-4 w-full px-6  flex-col">
            <div className="md:w-[610px] md:h-[562px]">
              <img
                src="/images/Frame39.png"
                alt="farmer"
                className="w-full h-[450px] object-cover rounded-[35px] pb-4"
              />
            </div>
            <div className=" md:w-[700px] md:h-[450px] bg-[#40984440] w-full rounded-[10px] flex flex-col justify-center items-center">
              <div className="w-[90%] md:h-[395px] md:my-4 ">
                {Item.map((items) => (
                  <div key={items.name}>
                    <div className="flex justify-between items-center font-playfair font-medium">
                      <p className="text-[#000000] my-4 text-[15.5px]">
                        {items.text}
                      </p>
                      <img
                        src={items.photo}
                        alt={items.title}
                        className="w-[46.83px] h-[40px]"
                      />
                    </div>
                    <div>
                      <hr className="border-black border-1" />
                    </div>
                  </div>
                ))}
              </div>
              <div className="w-[250px] h-[50px] flex items-center my-3 ">
                <button className="h-[10px] w-[250px] py-[20px] px-[9px] font-Sans flex justify-center items-center text-[black] bg-[#F9DF02] rounded-[20px] text-xs">
                  Learn More About Our Story
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Choose;

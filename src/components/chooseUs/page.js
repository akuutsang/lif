import React from "react";
import { Item } from "../data";

function Choose() {
  return (
    <>
      <div className="w-full bg-[#ECFDF5] ">
        <p className="font-[550] text-xl text-[#000000] flex justify-center w-full mb-[30px] h-[43px] gap-9 items-center ">
          Why choose us
        </p>
        <div className=" w-full flex   justify-center">
          <div className="w-[750px]  flex justify-center gap-4 ">
            <div className="w-[610px] h-[562px]  ">
              <img
                src="/images/Frame39.png"
                alt="farmer"
                className="w-full h-[450px] object-cover rounded-[10px]"
              />
            </div>
            <div className=" w-[700px] h-[450px] bg-[#40984440] rounded-[10px] flex flex-col justify-center items-center">
              <div className="w-[90%] h-[395px] my-4">
                {Item.map((items) => (
                  <>
                    <div
                      key={items.name}
                      className=" flex justify-between items-center font-playfair font-medium"
                    >
                      <p className=" text-[#000000] my-4 text-[15.5px]">
                        {items.text}
                      </p>
                      <img
                        src={items.photo}
                        alt="items.title"
                        className="w-[46.83px] h-[40px]"
                      />
                    </div>
                    <div className="">
                      <hr />
                    </div>
                  </>
                ))}
              </div>
              <div className="w-[250px] h-[50px] flex items-center ">
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

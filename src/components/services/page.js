import React from "react";
import { Card } from "../data";

function Services() {
  return (
    <div>
      <>
        <div className="md:h-full md:w-full flex flex-col justify-center bg-[#ECFDF5] px-6">
          <div className="md:w-[1232px] md:h-[117px]  py-6 w-full text-black flex flex-col justify-center items-center">
            <p className="font-playfair font-[150px] text-[24px] ">
              Our Services
            </p>
            <p className="md:h-[64px] md:w-[800px] font-playfair md:font-[85px] w-[358px] text-center">
              Explore LIF service options which is revolutionizing Agricultural
              practices and shaping the future of food production.
            </p>
          </div>
          <div className="flex justify-center items-center  md:w-[1232px] h-full w-full">
            <div className="w-[1100px] grid grid-cols-2 md:grid-cols-3 justify-center  items-center rounded-[20px]">
              {Card.map((cards) => (
                <div
                  key={cards.title}
                  className=" w-[300px] font-playfair  flex flex-col md:bg-white text-[#000000] justify-between md:p-5 p-2 "
                >
                  <div className="rounded-[10px] bg-white">
                    <p className="text-[24px] h-[43px] font-playfair font-[65px] text-center ">
                      {cards.title}
                    </p>
                    <div className="h-[400px] w-full b">
                      <img
                        src={cards.photo}
                        alt={cards.title}
                        className="w-full h-[250px] object-cover pb-3"
                      />
                      <div className="md:w-full  flex justify-center ">
                        <p className="md:font-[400] h-[150px]  w-[80%]  font-sans text-center text-s leading-[20.11px]">
                          {cards.text}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </>
    </div>
  );
}

export default Services;

import React from "react";
import { Card } from "../data";

function Services() {
  return (
    <div>
      <>
        <div className="md:h-full md:w-full flex flex-col justify-center bg-[#ECFDF5]">
          <div className="md:w-[1232px] md:h-[117px]  py-6 w-full text-black flex flex-col justify-center items-center">
            <p className="font-playfair font-[150px] text-[24px] ">
              Our Services
            </p>
            <p className="md:h-[64px] md:w-[800px] font-playfair md:font-[85px] w-[358px] text-center">
              Explore LIF service options which is revolutionizing Agricultural
              practices and shaping the future of food production.
            </p>
          </div>
          <div className="flex justify-center items-center  md:h-full w-full  h-full ">
            <div className="md:w-[70%] grid grid-cols-2 md:grid-cols-3 md:gap-8 justify-center items-center rounded-[20px] w-full p-2  ">
              {Card.map((cards) => (
                <div
                  key={cards.title}
                  className=" md:w-[300px] font-playfair  flex flex-col text-[#000000] justify-between md:p-5 "
                >
                  <div className="bg-white md:gap-2  rounded-[10px]  md:py-1 md:p-2 md:h-[404px] py-8 h-[450px] m-1 ">
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
                        <p className="md:font-[400] md:h-[90px] h-[120px]  md:w-full w-[80%] font-sans text-center text-xs leading-[20.11px]">
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

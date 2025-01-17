import React from "react";
import { Card } from "../data";

function Services() {
  return (
    <div>
      <>
        <div className="h-[1048px] w-full flex flex-col justify-center bg-[#ECFDF5]">
          <div className="w-[1232px] h-[117px] pt-4 text-black flex flex-col justify-center items-center">
            <p className="font-playfair font-[150px] text-[24px] ">
              Our Services
            </p>
            <p className="h-[64px] w-[800px] font-playfair font-[85px] text-center">
              Explore LIF service options which is revolutionizing Agricultural
              practices and shaping the future of food production.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="w-[1100px] grid grid-cols-3 gap-8 px-20 items-center ">
              {Card.map((cards) => (
                <div
                  key={cards.title}
                  className="w-[300.67px] font-playfair  h-[405px] flex flex-col bg-white text-[#000000] rounded-[20px] justify-between p-5 gap-2"
                >
                  <p className="text-[24px] h-[43px] font-playfair  font-[65px] text-center">
                    {cards.title}
                  </p>
                  <div className="h-[250px] w-full">
                    <img
                      src={cards.photo}
                      alt={cards.title}
                      className="w-full h-full object-cover rounded-[10px]"
                    />
                  </div>
                  <p className="font-[400] h-[80px] font-sans text-center text-xs leading-[20.11px]">
                    {cards.text}
                  </p>
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

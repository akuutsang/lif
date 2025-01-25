import React from "react";
import { Card } from "../data";

function Services() {
  return (
    <div className="bg-[#ECFDF5]">
      <div className="md:w-[1232px] py-6 w-full text-black flex flex-col justify-center items-center">
        <p className="font-playfair text-[24px]">Our Services</p>
        <p className="md:w-[800px] w-[358px] text-center">
          Explore LIF service options which are revolutionizing agricultural
          practices and shaping the future of food production.
        </p>
      </div>

      <div className="flex justify-center items-center w-full">
        <div className="md:w-[70%] grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 w-full p-2">
          <div className="order-1 md:order-1">
            <CardComponent card={Card[0]} />
          </div>
          <div className="order-3 md:order-2">
            <CardComponent card={Card[1]} />
          </div>
          <div className="order-2 md:order-3">
            <CardComponent card={Card[2]} />
          </div>
          <div className="order-4 md:order-4">
            <CardComponent card={Card[3]} />
          </div>
          <div className="order-6 md:order-5">
            <CardComponent card={Card[4]} />
          </div>
          <div className="order-5 md:order-6">
            <CardComponent card={Card[5]} />
          </div>
        </div>
      </div>
    </div>
  );
}

function CardComponent({ card }) {
  return (
    <div className="bg-white rounded-[10px] p-4 h-full flex flex-col items-center shadow-md">
      <p className="md:text-[24px] text-[15px] font-playfair text-center mb-2 text-black">
        {card.title}
      </p>
      <img
        src={card.photo}
        alt={card.title}
        className="w-full h-[250px] object-cover mb-3 rounded"
      />
      <p className="text-center text-sm text-black">{card.text}</p>
    </div>
  );
}

export default Services;

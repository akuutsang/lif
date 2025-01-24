import React from "react";
import { AgricItems } from "../data";

function Agric() {
  return (
    <div className="w-full text-black h-full flex justify-center bg-[#ECFDF5] ">
      <div className="md:mx-[190px]">
        <div className="flex justify-center w-full items-center h-[50px] font-playfair font-[500] md:text-[32px] text-[25px] ">
          <p>Agricultural Sustainability</p>
        </div>

        <div className="flex flex-col-reverse md:flex-row md:gap-6 gap-4 w-full pt-3 ">
          <div className="flex flex-col gap-4 md:w-1/2 w-full px-2 justify-center items-center">
            <div className="bg-[#40984440] rounded-[10px] p-3 w-full">
              <div className="flex justify-between items-center mb-4">
                <p className="font-playfair text-2xl md:text-3xl font-semibold ">
                  Sustainability Vision
                </p>
                <img
                  src="/assets/icons/Group.png"
                  alt="Sustainability Icon"
                  className="w-[23px] h-[23px] "
                />
              </div>
              <p className="text-sm md:text-base px-2 py-2 text-black">
                At LIF, we strive to set the food industry standard for
                profitable and sustainable food production for a growing planet.
                This means improving the sustainable performance and resiliency
                of not only our operations but also contributing to the enhanced
                sustainability of the greater food production system as a whole,
                while also helping our customers achieve their sustainability
                goals.
              </p>
            </div>

            <div className="bg-[#40984440] rounded-[10px] p-4 w-full">
              <p className="text-2xl md:text-3xl mb-3 font-playfair font-semibold">
                Adaptation & Mitigation Initiatives
              </p>
              {AgricItems.map((item, index) => (
                <div key={index} className="flex items-center gap-2 mb-2">
                  <img
                    src={item.photo}
                    alt={item.title}
                    className="w-[23px] h-[23px]"
                  />
                  <p className="text-sm md:text-base font-medium text-black">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="md:w-1/2 w-full px-2">
            <img
              src="/images/Frame38.png"
              alt="Plant"
              className="w-full h-full object-cover rounded-[10px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Agric;

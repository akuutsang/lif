import React from "react";
import { AgricItems } from "../data";

function Agric() {
  return (
    <div className="w-full text-black bg-[#ECFDF5]">
      <div className="flex justify-center items-center h-[50px] font-playfair font-[500] text-[32px]">
        <p>Agricultural Sustainability</p>
      </div>

      <div className="flex flex-col-reverse md:flex-row md:gap-6 gap-4 w-full pt-3  px-[150px]">
        <div className="flex flex-col gap-4 md:w-1/2 w-full justify-center items-center ">
          <div className="bg-[#40984440] rounded-[10px]  md:full w-full p-3 ">
            <div className="flex justify-between items-center mb-4 md:w-full ">
              <p className="font-playfair  text-3xl font-[500]">
                Sustainability Vision
              </p>
              <img
                src="/assets/icons/Group.png"
                alt="Sustainability Icon"
                className="w-[23px] h-[23px]"
              />
            </div>
            <p className="md:text-sm md:px-2 md:py-4 text-xl  w-full ">
              At LIF, we strive to set the food industry standard for profitable
              and sustainable food production for a growing planet. This means
              improving the sustainable performance and resiliency of not only
              our operations but also contributing to the enhanced
              sustainability of the greater food production system as a whole,
              while also helping our customers achieve their sustainability
              goals.
            </p>
          </div>

          <div className="bg-[#40984440] rounded-[10px] p-4 w-full">
            <p className=" md:text-base mb-3 font-playfair  text-3xl font-[500]">
              Adaptation & Mitigation Initiatives
            </p>
            {AgricItems.map((item, index) => (
              <div key={index} className="flex items-center gap-2 mb-2">
                <img
                  src={item.photo}
                  alt={item.title}
                  className="md:w-[23px] md:h-[23px] h-[30px] w-[30px] mr-2"
                />
                <p className="font-[500 ]md:text-sm md:px-2 md:py-4 text-xl  w-full">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <img
            src="/images/Frame38.png"
            alt="Plant"
            className="w-full md:h-[604px] object-cover rounded-[10px]"
          />
        </div>
      </div>
    </div>
  );
}

export default Agric;

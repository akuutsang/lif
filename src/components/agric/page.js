import React from "react";
import { AgricItems } from "../data";

function Agric() {
  return (
    <>
      <div className="w-full flex flex-col justify-center items-center  text-black bg-[#ECFDF5] ">
        <div className="w-full h-[43px] flex justify-center items-center font-[500] font-playfair size-[32px]">
          <p>Agricultural Sustainability</p>
        </div>
        <div className="w-[750px] h-[472px] pt-3 flex justify-center gap-4  ">
          <div className=" w-[700px] h-[450px] rounded-[10px] flex flex-col justify-between ">
            <div className="w-[90%] h-[160px]  ">
              <div className="h-[180px] w-full bg-[#40984440] flex flex-col font-playfair  rounded-[10px] p-1 ">
                <div className="flex justify-between p-3">
                  <p className=" text-base font-[500]  text-black">
                    Sustainability Vision
                  </p>
                  <img
                    src="/assets/icons/Group.png"
                    className="w-[23px] h-[23.03px]"
                  />
                </div>
                <p className="h-[120px] text-xs text-black  pb-[30px] px-[10px]  ">
                  At LIF, we will be striving to set the food industry standard
                  for profitable and sustainable food production for a growing
                  planet. This means improving the sustainable performance and
                  resiliency of not only our operations but also contributing to
                  the enhanced sustainability of the greater food production
                  system as a whole, while also helping our customers achieve
                  their sustainability goals.
                </p>
              </div>
            </div>
            <div className="h-[250px] w-[90%] bg-[#40984440] p-2 rounded-[10px]">
              <div>
                <p className="text-base font-[500]  text-black">
                  Adaptation & Mitigation Initiatives
                </p>
              </div>
              {AgricItems.map((agricitems) => (
                <div className="flex start h-[55px] w-full pb-1  items-center p-2">
                  <img
                    src={agricitems.photo}
                    className="w-[23px] h-[23.03px] mr-1"
                  />
                  <p className=" font-[500] font-sans text-xs  text-black">
                    {agricitems.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="w-[610px] h-[562px] ">
            <img
              src="/images/Frame38.png"
              alt="plant"
              className="w-full h-[450px] object-cover rounded-[10px]"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Agric;

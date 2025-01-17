import Footer from "@/components/footer/page";
import Nav from "@/components/nav/page";
import React from "react";

function About() {
  return (
    <>
      <Nav />
      <div className="w-full h-[674px]  bg-[#ECFDF5]  flex justify-center items-center pb-12">
        <div className="w-[900px] h-[554px]  text-black pt-4  flex flex-col justify-between items-center">
          <p className="font-playfair font-[150px] text-[24px] ">About Us</p>
          <div className="h-[500px] w-full flex flex-col gap-2 ">
            <div className="w-full border-[5px] border-solid border-white h-[150px] rounded-[10px] flex">
              <div className="w-[50%] bg-[#409844] bg-opacity-25 px-3 rounded-tl-[10px] rounded-bl-[10px] ">
                <div className="flex justify-between  py-2 items-center">
                  <p>LONGON INTEGRATED FARMS (LIF)</p>
                  <div className="w-[25px] h-[25px] rounded-[10px] overflow-hidden">
                    <img
                      src="./assets/icons/Group.png"
                      className="w-full h-full  object-cover"
                    />
                  </div>
                </div>
                <p className="h-[66px] font-sans font-semibold text-xs">
                  LIF is an Agro-allied registered company that is in business
                  to cultivate commercial quantities both organic, and
                  non-organic agricultural produce for both the Nigerian and
                  International market.
                </p>
                <div className="gap-2 flex justify-center items-center">
                  <p className="font-sans font-semibold text-xs">Learn More</p>
                  <img
                    src="./assets/icons/arrow.png"
                    className="h-[12px] w-[12px]"
                  />
                </div>
              </div>
              <div className="w-[50%]">
                <img
                  src="./images/Frame32.png"
                  className="h-[140px] w-full rounded-tr-[10px] rounded-br-[10px]"
                />
              </div>
            </div>
            <div className="w-full border-[5px] border-solid border-white h-[150px] rounded-[10px] flex">
              <div className="w-[50%]">
                <img
                  src="./images/Frame31.png"
                  className="h-[140px] w-full rounded-tl-[10px] rounded-bl-[10px]"
                />
              </div>
              <div className="w-[50%]  bg-[#409844] bg-opacity-25 px-3 rounded-tr-[10px] rounded-br-[10px] ">
                <div className="flex justify-between   py-2 items-center">
                  <p>Our Vision</p>
                  <div className="w-[25px] h-[25px] rounded-[10px] overflow-hidden">
                    <img
                      src="./assets/icons/Group.png"
                      className="w-full h-full  object-cover"
                    />
                  </div>
                </div>
                <p className="h-[66px] font-sans font-semibold text-xs">
                  Our Vision is to become the leading commercial farm brands not
                  just in Nigeria but also on the global stage
                </p>
                <div className="gap-2 flex justify-center items-center">
                  <p className="font-sans font-semibold text-xs">Learn More</p>
                  <img
                    src="./assets/icons/arrow.png"
                    className="h-[12px] w-[12px]"
                  />
                </div>
              </div>
            </div>
            <div className="w-full border-[5px] border-solid border-white h-[150px] rounded-[10px] flex">
              <div className="w-[50%] bg-[#409844] bg-opacity-25 px-3 rounded-tl-[10px] rounded-bl-[10px] ">
                <div className="flex justify-between  py-2 items-center">
                  <p>Our Mission</p>
                  <div className="w-[25px] h-[25px] rounded-[10px] overflow-hidden">
                    <img
                      src="./assets/icons/Group.png"
                      className="w-full h-full  object-cover"
                    />
                  </div>
                </div>
                <p className="h-[66px] font-sans font-semibold text-xs">
                  The mission of LIF is to establish a farming business capable
                  of serving the community by creating jobs, thereby alleviating
                  poverty, and producing healthy , high-quality products that
                  customers will benefit from.
                </p>
                <div className="gap-2 flex justify-center items-center">
                  <p className="font-sans font-semibold text-xs">Learn More</p>
                  <img
                    src="./assets/icons/arrow.png"
                    className="h-[12px] w-[12px]"
                  />
                </div>
              </div>
              <div className="w-[50%]">
                <img
                  src="./images/Frame33.png"
                  className="h-[140px] w-full rounded-tr-[10px] rounded-br-[10px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;

import Footer from "@/components/footer/page";
import Nav from "@/components/nav/page";
import React from "react";

function Contact() {
  return (
    <>
      <div>
        <Nav />
        <div className="min-h-screen bg-[#ECFDF5]  flex flex-col items-center">
          <div className="w-full max-w-4xl pt-4 flex justify-start items-center px-4">
            <img
              src="./assets/icons/arrowLeft.png"
              className=" md:w-[15px] md:h-[15px] w-[20px] h-[20px]  "
              alt="Back"
            />
          </div>
          <div className="w-full max-w-4xl pt-4 text-black flex flex-col justify-center items-center">
            <p className="font-playfair text-[34px]  lg:text-[48px]">
              Contact Us
            </p>
            <p className=" md:w-full max-w-2xl md:font-playfair md:px-[18px]  w-[90%] h-[40px] leading-[20px] text-[21px]  font-sans text-center text-xs md:text-lg ">
              Get in touch to learn how you can partner with us or benefit from
              our products and services
            </p>
          </div>
          <div className="flex justify-center w-full md:py-8 py-2">
            <div className="w-full max-w-3xl bg-[#74451F] mx-4 md:mx-8 lg:mx-16 rounded-[10px] p-4">
              <div className="flex flex-col items-center md:gap-4 gap-2">
                <div className="h-[50px] w-full flex justify-between items-center font-playfair font-bold">
                  <p>Join Us In Feeding the Future</p>
                  <img
                    src="./assets/icons/group.png"
                    className="md:w-[33px] w-[20px] "
                    alt="Group Icon"
                  />
                </div>
                <div className="relative w-full  ">
                  <label
                    htmlFor="organization"
                    className="block text-gray-700 font-bold md:mb-2 "
                  ></label>
                  <input
                    type="text"
                    id="organization"
                    placeholder="Organization"
                    className="w-full  border border-gray-300 md:h-[50px] md:p-4 md:rounded-[12px] rounded-[40px] h-[30px] p-1 text-xs"
                  />
                </div>
                <div className="flex flex-col md:flex-row justify-between w-full md:mt-4">
                  <div className="w-full md:w-[49%] ">
                    <label
                      htmlFor="firstName"
                      className="block text-gray-700 font-bold mb-2"
                    ></label>
                    <input
                      type="text"
                      id="firstName"
                      placeholder="First Name"
                      className="w-full border border-gray-300 md:h-[50px] md:p-4 md:rounded-[12px] rounded-[40px] h-[30px] p-1  text-xs"
                    />
                    <label
                      htmlFor="email"
                      className="block text-gray-700 font-bold mb-2"
                    ></label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Email Address"
                      className="w-full border border-gray-300 md:h-[50px] md:p-4 md:rounded-[12px] rounded-[40px] h-[30px] p-1  text-xs"
                    />
                  </div>
                  <div className="w-full md:w-[49%]">
                    <label
                      htmlFor="lastName"
                      className="block text-gray-700 font-bold mb-2"
                    ></label>
                    <input
                      type="text"
                      id="lastName"
                      placeholder="Last Name"
                      className="w-full border border-gray-300 md:h-[50px] md:p-4  md:rounded-[12px] rounded-[40px] h-[30px] p-1  text-xs"
                    />
                    <label
                      htmlFor="phone"
                      className="block text-gray-700 font-bold mb-2"
                    ></label>
                    <input
                      type="tel"
                      id="phone"
                      placeholder="Phone Number"
                      className="w-full border border-gray-300 md:h-[50px]  md:p-4 md:rounded-[12px] rounded-[40px] h-[30px] p-1  text-xs"
                    />
                  </div>
                </div>

                <label
                  htmlFor="message"
                  className="block text-gray-700 font-bold md:mb- "
                ></label>
                <textarea
                  id="message"
                  placeholder="Message"
                  className="w-full  border border-gray-300 md:h-[110px] md:p-4 md:rounded-[12px] rounded-[15px] h-[122px] p-1  text-xs"
                />

                <div className="w-full flex justify-between items-center">
                  <img
                    src="./assets/icons/leafLeft.png"
                    className="w-[33px]"
                    alt="Group Icon"
                  />
                  <button className="w-[150px] h-[30px] text-xs text-black bg-[#F9DF02] rounded-[12px] font-medium">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Contact;

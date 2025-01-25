import React from "react";

function Footer() {
  return (
    <>
      <footer className="pt-[50px] w-full flex flex-col justify-center before: text-black bg-white ">
        <div className="md:px-[150px] mx-3">
          <div className="w-full  ">
            <div className="w-full h-full flex md:flex-row flex-col justify-between pb-8 md:text-[13px] text-[20px] font-sans">
              <div className="h-[251px] flex flex-col justify-between">
                <p>LIF Team</p>
                <p>12 Apex Plaza, Hill Station Roundabout, Jos, Nigeria</p>
                <div>
                  <p>Reach Us At:</p>
                  <p>+234 81 353 155 32</p>
                  <p>info@lif.com</p>
                </div>
                <div className="flex w-full h-[50px]  items-center my-2  gap-6">
                  <div className="h-[30px] bg-[#FFFFFF] flex justify-center items-center md:p-1 ">
                    <img
                      src="/assets/icons/facebook.png"
                      alt="facebook"
                      className="w-[15px] h-[15px]"
                    />
                  </div>
                  <div className="h-[30px] bg-[#FFFFFF] flex justify-center items-center md:p-1 ">
                    <img
                      src="/assets/icons/instagram.png"
                      alt="instagram"
                      className="w-[15px] h-[15px]"
                    />
                  </div>
                  <div className="h-[30px] bg-[#FFFFFF] flex justify-center items-center md:p-1 ">
                    <img
                      src="/assets/icons/x.png"
                      alt="x"
                      className="w-[15px] h-[15px]"
                    />
                  </div>
                  <div className="h-[30px] bg-[#FFFFFF] flex justify-center items-center md:p-1 ">
                    <img
                      src="/assets/icons/linkedin.png"
                      alt="linkedin"
                      className="w-[15px] h-[15px]"
                    />
                  </div>
                  <div className="h-[30px] bg-[#FFFFFF] flex justify-center items-center md:p-1">
                    <img
                      src="/assets/icons/youtube.png"
                      alt="youtube"
                      className="w-[15px] h-[15px]"
                    />
                  </div>
                </div>
              </div>
              <div className="flex md:flex-row">
                <div className="h-[152px] w-[180px] flex flex-col justify-between">
                  <p>Support</p>
                  <p>FAQ</p>
                  <p>Careers</p>
                  <p>Blog</p>
                </div>
                <div className="h-[152px] w-[180px] flex flex-col justify-between">
                  <p>Privacy Policy</p>
                  <p>Return Policy</p>
                  <p>Terms of Service</p>
                  <p>Contact</p>
                </div>
              </div>
            </div>
            <div>
              <hr className="border-black" />
            </div>
            <div className="mt-4 md:mt-0">
              <div className="w-full flex justify-between h-[70px] items-center md:text-[12px] text-[20px] bg-inherit">
                <p>© 2024 LIF. All rights reserved.</p>
                <div className="w-[180px] justify-between hidden md:flex">
                  <p>Privacy Policy</p>
                  <p>Terms of Service</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;

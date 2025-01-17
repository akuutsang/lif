import React from "react";

function Footer() {
  return (
    <>
      <footer className="bg-[#FFFFFF] pt-[50px] h-[403px] w-full flex justify-center">
        <div className="w-[800px] text-black">
          <div className="flex justify-between pb-8 text-[13px] font-sans">
            <div className="h-[251px] flex flex-col justify-between">
              <p className=" ">LIF Team</p>
              <p>12 Apex Plaza, Hill Station Roundabout , Jos, Nigeria</p>
              <div>
                <p>Reach Us At:</p>
                <p>+234 81 353 155 32</p>
                <p> info@lif.com</p>
              </div>
              <div className="flex w-[130px]">
                <div className="h-[30px] bg-[#FFFFFF] flex justify-center items-center p-1">
                  <img
                    src="/assets/icons/facebook.png "
                    alt="plant"
                    className="w-[15px] h-[15px] "
                  />
                </div>
                <div className="h-[30px] bg-[#FFFFFF] flex justify-center items-center p-1">
                  <img
                    src="/assets/icons/instagram.png "
                    alt="plant"
                    className="w-[15px] h-[15px] "
                  />
                </div>
                <div className="h-[30px] bg-[#FFFFFF] flex justify-center items-center p-1">
                  {" "}
                  <img
                    src="/assets/icons/x.png "
                    alt="plant"
                    className="w-[15px] h-[15px] "
                  />
                </div>
                <div className="h-[30px] bg-[#FFFFFF] flex justify-center items-center p-1">
                  <img
                    src="/assets/icons/linkedin.png "
                    alt="plant"
                    className="w-[15px] h-[15px]"
                  />
                </div>
                <div className="h-[30px] bg-[#FFFFFF] flex justify-center items-center p-1">
                  {" "}
                  <img
                    src="/assets/icons/youtube.png "
                    alt="plant"
                    className="w-[15px] h-[15px] "
                  />
                </div>
              </div>
            </div>
            <div className="h-[152px] w-[180px] flex flex-col justify-between">
              <p>FAQ</p>
              <p>Support</p>
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
          <div>
            <hr />
          </div>
          <div className=" flex justify-between h-[70px] items-center text-[12px]">
            <p>© 2024 LIF. All rights reserved.</p>
            <div className="w-[180px] flex justify-between ">
              <p>Privacy Policy</p>
              <p>Terms of Service</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;

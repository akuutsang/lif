import React from "react";
import Image from "next/image";
import Link from "next/link";

function Navbar() {
  const navList = [
    { name: "Home", path: "/" },
    { name: "About Us", drop: true, path: "/MDAs/library" },
    { name: "Services", drop: false, path: "/MDAs/contact" },
    { name: "Our Team", drop: false, path: "/MDAs/contact" },
  ];

  return (
    <>
      <div className="p-[30px] h-[90px] bg-[#409844] flex justify-between items-center">
        <div>
          <Image
            src="/assets/Logo.png"
            alt="Example image"
            width={50}
            height={50}
          />
        </div>
        <div className=" ">
          <ul className="flex h-[44px] w-[496px] justify-between items-center ">
            {navList.map((nav) => (
              <li key={nav.name} className="nav-item">
                <Link href={nav.path}>{nav.name}</Link>
                {nav.drop && <div className="round-dot" />}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <button className="w-[158px] h-[50px] py-[22px] px-[13px] flex justify-center  items-center text-[black]  bg-[#F9DF02] rounded-[20px]">
            Contact
          </button>
        </div>
      </div>
      <div className="h-[600px] relative">
        <Image
          src="https://s3-alpha-sig.figma.com/img/7972/d53a/8ff7652518c242fddcdeaa8fa38ba564?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=b6zEDsvLTNpQAsmUC3bi8T3kATu87s~Pwy85IXRS3Thfhf6QbG6al2h7KIyFHVhCzUyn2~jVu1Wf3SiLwijYt0AaL12OHyadumHZivUI58mNLnE1S1JSkh0~8-G8Gl8ZvfeVZ21vVHwSYR7jnBrXTS6qLXTzMeg-qBvcpX5-D-dq8WgDkIcARSJHAg9GfmzcvBIYNqbs9iDKi15jsnBWv7ZD9Aw1u6VHPCY7-0cBbu0m0mAHciGTrs9HoAGYBa7uosOYtRjR8GKP5tQAzhSDsRw50letnWaHDU6SdOAiP1DlpzT71e68XKBVLk7Er0kyIlN0hdUVcAc-xd63LR9wBA__"
          alt="Example image"
          layout="fill"
          objectFit="cover"
          className="absolute top-0 left-0"
        />
        <div className="absolute inset-0 flex justify-start  items-center text-white pt-[200px] pl-[150px] mr-[15px] ">
          <div className="bg-black/10 backdrop-blur-sm pt-8 rounded-lg w-[850px] mt-[50px] pl-[30px]">
            <h1 className="text-5xl  mb-4 w-[750px]">
              Sustainably Growing the Future
            </h1>
            <p className=" mb-[20px] w-[600px] ">
              We are committed to cultivating sustainable, high-quality crops
              and meat products to <br /> nourish communities locally and
              globally, while driving innovation and food security.
            </p>
            <button className="w-[250px] h-[50px]  mb-[20px] py-[22px] px-[13px] flex justify-center items-center text-black bg-[#F9DF02] rounded-[20px]">
              Get in touch with us
            </button>
          </div>
        </div>
      </div>
      <div className="h-[1239px] w-[1440px] bg-[#ECFDF5]">
        <div className="w-[1232px] h-[117px] gap-3 pt-4  text-[black] flex flex-col justify-center items-center">
          <p>Our Services</p>
          <p className="h-[64px]">
            Explore LIF service options which is revolutionizing Agricultural
            practices and shaping the future of food production.
          </p>
        </div>
      </div>
    </>
  );
}

export default Navbar;

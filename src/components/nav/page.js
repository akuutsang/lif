"use client";
import React, { useState } from "react";
import { navList } from "../data";
import Image from "next/image";
import Link from "next/link";

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <>
      <div className="w-full px-4 md:px-36 h-[70px] bg-[#409844] flex justify-between items-center">
        {/* Logo */}
        <div className="mr-4 md:mr-0">
          {" "}
          {/* Add margin-right for small screens */}
          <img
            src="https://s3-alpha-sig.figma.com/img/647c/d342/915bacec1a6ed98b7fbddf2af4877cab?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HtI~oUzpw0jTz7DJejeG~EgFcan1~Jd1P~VwyxXumnnVLCrAQXbWCbhFiR2wMr4tLNgk7kGIRAxD0ok7SzTuh~-BPOWLJrQH3XX4GbP3zjqZlRoQnBroUTbTDks~AfAcYVN6PUZaQFeDMPuWSzpkgX41bpKZR-QqKcm-WelaD~m6APoX5n9HzA0ArZRZx64SVQgsGYr~q1Aq7yRc2nBdw42Gc5z~j0cs7wbpG31-8C2Ei83UhzMdSAFto-igYkAFPQRLnEqYUHcHmHSzn6k1bpEc~AEHUD7OXUjH9Vqxb9GfBy0iWKK9dRreuNNipiO~LQ0TV6~IDRWIJUpQVLY6Cg__"
            alt="Logo"
            className="w-[80px] h-[150px] transition-all duration-300"
          />
        </div>

        {/* Hamburger Menu */}
        <div className="md:hidden flex items-center">
          <div className="flex items-center justify-center w-10 h-10 border-4 border-white rounded-full">
            {" "}
            {/* Circle with white border */}
            <button onClick={toggleMenu} className="text-white">
              {" "}
              {/* Keep text color white */}
              {/* Hamburger Icon */}
              <span className="block w-5 h-1 bg-white mb-1 rounded-[2px]"></span>
              <span className="block w-5 h-1 bg-white mb-1 rounded-[2px]"></span>
              <span className="block w-5 h-1 bg-white mb-1 rounded-[2px]"></span>
            </button>
          </div>
        </div>

        {/* Navigation Links (Desktop and Mobile Toggle) */}
        <div className={`md:flex hidden items-center`}>
          <ul className="flex justify-between items-center space-x-8">
            {navList.map((nav) => (
              <li key={nav.name} className="font-sans">
                <Link href={nav.path}>{nav.name}</Link>
                {nav.drop && <div className="round-dot" />}
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu (Full Screen, Contact Item Added) */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } absolute top-0 left-0 right-0 bottom-0 bg-[#F9DF02] flex flex-col justify-start items-center px-5 z-50`}
        >
          {/* Close Button */}
          <button
            onClick={toggleMenu}
            className="self-end text-white text-3xl mt-5 mr-5"
          >
            X
          </button>

          {/* Navigation Links (Mobile) */}
          <ul className="flex flex-col items-center py-4 space-y-6">
            {navList.map((nav) => (
              <li key={nav.name} className="font-sans py-2 text-white">
                <Link href={nav.path}>{nav.name}</Link>
                {nav.drop && <div className="round-dot" />}
              </li>
            ))}

            {/* New Contact Item */}
            <li className="font-sans py-2 text-white bg-[#F9DF02] rounded-lg w-full text-center">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Contact Button (Visible only on Desktop) */}
        <div className="md:block hidden">
          <button className="w-[145px] h-[40px] py-[22px] px-[13px] flex justify-center items-center text-[black] bg-[#F9DF02] text-sm rounded-[15px]">
            Contact
          </button>
        </div>
      </div>
    </>
  );
}

export default Nav;

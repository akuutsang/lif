import React from "react";
import "../../app/globals.css";
import "@fontsource/source-sans-pro/700.css";
import Services from "../services/page";
import Choose from "../chooseUs/page";
import Agric from "../agric/page";
import LifLatest from "../latest/page";
import Footer from "../footer/page";
import Top from "../topSection/page";
import Nav from "../nav/page";

function MainPage() {
  return (
    <>
      <div className="w-100vw">
        <Nav />
        <Top />
        <Services />
        <Choose />
        <Agric />
        <LifLatest />
        <Footer />
      </div>
    </>
  );
}

export default MainPage;

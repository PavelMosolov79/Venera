"use client";
import MainSection from "./services/mainSection/MainSection";
import BlocksSection from "./services/blocksSection/BlocksSection";
import FoterSection from "./services/foterSection/FoterSection";
import { useRef } from "react";

const ServicesPage = () => {
  const fullpage = useRef(null);

  const scrollToElement = (id) => {
    const element = document.getElementById(id);
    fullpage.current.scrollTo({
      top: element.offsetTop,
      behavior: "smooth",
    });  
  };

  return (
    <div className="fullpage__container">
      <scroll-container ref={fullpage}>
        <scroll-page id='mainSection'>
          <MainSection func={scrollToElement}/>
        </scroll-page>
        <scroll-page id='BlocksSection'>
          <BlocksSection func={scrollToElement}/>
        </scroll-page>
        <scroll-page id='FoterSection'>
          <FoterSection func={scrollToElement}/>
        </scroll-page>
      </scroll-container>
    </div>
  )
}

export default ServicesPage;
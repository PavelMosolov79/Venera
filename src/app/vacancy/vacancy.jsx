"use client";
import MainSection from "./vacancy/mainSection/MainSection";
import BlocksSection from "./vacancy/blocksSection/BlocksSection";
import FoterSection from "./vacancy/foterSection/FoterSection";
import { useRef } from "react";

const VacancyPage = () => {
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

export default VacancyPage;
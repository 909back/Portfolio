import React from "react";
import "./assets/scss/common.scss";
import "./assets/scss/menu.scss";

import { Routes, Route, NavLink } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Parallax, Mousewheel } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// pages
import AboutMe from "./pages/AboutMe";
import Skill from "./pages/Skill";
import Project from "./pages/Project";
import Contact from "./pages/Contact";


const App = () => {
  
    window.addEventListener('resize',()=>{
      // 현재 1vh를 구한다.
      let vh = window.innerHeight * 0.01;
    
      // html 요소중 속성이 '--vh'로 지정된 속성을 1vh * 100으로 변경해라
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    });

  return (
    <>
      <Swiper
        direction={"vertical"}
        pagination={{
          clickable: true,
          renderBullet: function (index, className){
            let menu = '';
            switch(index){
              case 0:   
              menu = 'ABOUT ME';
              break;
              case 1: 
              menu = 'SKILLS';
              break;
              case 2: 
              menu = 'PROJECT';
              break;
              case 3: 
              menu = 'CONTACT';
              break;
            }
            return `<span class="${className} app">${menu}</span>`;
          },
        }}
        speed={600}
        parallax={true}
        modules={[Pagination, Parallax,Mousewheel]}
      >
        <SwiperSlide>
          <AboutMe />
        </SwiperSlide>

        <SwiperSlide>
          <Skill />
        </SwiperSlide>

        <SwiperSlide>
          <Project />
        </SwiperSlide>

        <SwiperSlide>
          <Contact />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default App;

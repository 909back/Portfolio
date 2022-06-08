import React from "react";
import style from "../assets/scss/Project.module.scss";
import ProjectItem from "../components/ProjectItem";
import config from '../util/_config.json';
import Dangoon from "../assets/img/dangoon2.webp";
import Starbucks from '../assets/img/starbucks.webp';
import Baskin from '../assets/img/baskin.webp';
import Portfolio from '../assets/img/portfolio.webp';


import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";  
import "swiper/css/navigation";

import "../assets/scss/ProjectMenu.scss"

const Project = () => {

  return (
    <>  
      <section className="project">
        <h2 className={style.head}>Project</h2>
        <Swiper
          modules={[Navigation]}
          slidesPerView={"auto"}
          spaceBetween={100}
          centeredSlides={true}
          navigation={true}
          className={style.Swiper}
        >
          <SwiperSlide>
            <ProjectItem Image={Starbucks} data={config.project_info[0]} styleName={style.starbucks}/>
          </SwiperSlide>

          <SwiperSlide>
            <ProjectItem Image={Baskin} data={config.project_info[1]} styleName={style.baskin}/>
          </SwiperSlide>

          <SwiperSlide>
            <ProjectItem Image={Dangoon} data={config.project_info[2]} styleName={style.dangoon}/>
          </SwiperSlide>
          <SwiperSlide>
            <ProjectItem Image={Portfolio} data={config.project_info[3]} />
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
};

export default Project;

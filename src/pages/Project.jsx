import React from "react";
import style from "../assets/scss/Project.module.scss";
import ProjectItem from "../components/ProjectItem";
import config from '../../_config.json';
import Dangoon from "../assets/img/dangoon.png";
import Starbucks from '../assets/img/starbucks.png';

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
            <ProjectItem Image={Starbucks} data={config.project_info[0]}/>
          </SwiperSlide>

          <SwiperSlide>
            <ProjectItem Image={Dangoon} />
          </SwiperSlide>

          <SwiperSlide>
            <ProjectItem Image={Starbucks} />
          </SwiperSlide>
          <SwiperSlide>
            <ProjectItem Image={Dangoon} />
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
};

export default Project;

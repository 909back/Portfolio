import React from "react";
import style from "../assets/scss/Project.module.scss";
import ProjectItem from "../components/ProjectItem";
import Dangoon from "../assets/img/dangoon.png";
import Starbucks from '../assets/img/starbucks.png';
// import required modules
import { Pagination, Mousewheel, } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "../assets/scss/ProjectMenu.scss"

const Project = () => {
  return (
    <>
      <section className="project">
        <Swiper
          pagination={{
            type: "fraction",
          }}
          modules={[Pagination,Mousewheel]}
          slidesPerView={"auto"}
          mousewheel={true}
          className={style.Swiper}
        >
          <SwiperSlide>
            <ProjectItem Image={Starbucks}/>
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

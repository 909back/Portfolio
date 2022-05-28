import React from "react";
import style from "../assets/scss/Project.module.scss";
import ProjectItem from "../components/ProjectItem";
import Dangoon from "../assets/img/dangoon.png";

// import required modules
import { Pagination, Mousewheel, } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "../assets/scss/ProjectMenu.scss"

const Project = () => {
  return (
    <>
      <section className={style.page}>
        <Swiper
          pagination={{
            clickable: true,
            renderBullet: function (index, className) {
              return (
                '<span class="' + className + ' project">' + (index + 1) + "</span>"
              );
            },
          }}
          modules={[Pagination,Mousewheel]}
          slidesPerView={1}
          mousewheel={true}
          className={style.Swiper}
        >
          <SwiperSlide>
            <ProjectItem />
          </SwiperSlide>

          <SwiperSlide>
            <ProjectItem index={1} />
          </SwiperSlide>

          <SwiperSlide>
            <ProjectItem index={1} />
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
};

export default Project;

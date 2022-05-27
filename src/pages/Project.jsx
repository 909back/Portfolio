import React from "react";
import style from "../assets/scss/Project.module.scss";
import ProjectItem from "../components/ProjectItem";
import Dangoon from "../assets/img/dangoon.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const Project = () => {
  return (
    <>
      <section className={style.page}>
        <div className={style.gridTop}>
          <div className={style.left}></div>
          <div className={style.right}></div>
        </div>

        <Swiper
          modules={[Navigation]}
          navigation={true}
          className={style.Swiper}
        >
          <SwiperSlide>
            <ProjectItem styleName={style.dangoon} index={0} image={Dangoon} />
          </SwiperSlide>

          <SwiperSlide>
            <ProjectItem index={1} />
          </SwiperSlide>

          <SwiperSlide>
            <ProjectItem index={1} />
          </SwiperSlide>
        </Swiper>

        <div className={style.gridBottom}>
          <div className={style.left}></div>
          <div className={style.right}></div>
        </div>
      </section>
    </>
  );
};

export default Project;

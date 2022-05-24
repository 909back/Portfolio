import React from "react";
import style from "../assets/scss/Project.module.scss";

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

        <div className={style.gridTop}></div>

        <Swiper modules={[Navigation]} navigation={true} className={style.Swiper}>

          <SwiperSlide>
            <article>
              <div>
                <img src="" alt="" />
              </div>
              <ul>
                <li>
                  <h3>project name</h3>
                </li>
                <li>
                  <p>project period</p>
                </li>
                <li>
                  <p>project desc</p>
                </li>
                <li>
                  <p>주요기능</p>
                </li>
                <li>
                  <p>사용한 스택</p>
                </li>
                <li>
                  <p>관련 블로그 글</p>
                </li>
              </ul>
            </article>
          </SwiperSlide>

          <SwiperSlide>
            <article>
              <div>
                <img src="" alt="" />
              </div>
              <ul>
                <li>
                  <h3>project name</h3>
                </li>
                <li>
                  <p>project period</p>
                </li>
                <li>
                  <p>project desc</p>
                </li>
                <li>
                  <p>주요기능</p>
                </li>
                <li>
                  <p>사용한 스택</p>
                </li>
                <li>
                  <p>관련 블로그 글</p>
                </li>
              </ul>
            </article>
          </SwiperSlide>

          <SwiperSlide>
            <article>
              <div>
                <img src="" alt="" />
              </div>
              <ul>
                <li>
                  <h3>project name</h3>
                </li>
                <li>
                  <p>project period</p>
                </li>
                <li>
                  <p>project desc</p>
                </li>
                <li>
                  <p>주요기능</p>
                </li>
                <li>
                  <p>사용한 스택</p>
                </li>
                <li>
                  <p>관련 블로그 글</p>
                </li>
              </ul>
            </article>
          </SwiperSlide>
        </Swiper>

        <div className={style.gridBottom}></div>
      </section>
    </>
  );
};  

export default Project;

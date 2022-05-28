import React from "react";
import style from "../assets/scss/Project.module.scss";
import config from "../../_config.json";
import Arrow48 from "../assets/img/arrow48.png";

const ProjectItem = ({ index, Image, styleName }) => {
  const [data, setData] = React.useState(config.project_info[index]);

  return (
    <>
      <section className={style.slide}>
        <div className={style.image}>
          <img src={Image} alt="스타벅스" />
        </div>
        <article className={style.info}>
          <div className={style.title}>
            <h2>Starbucks</h2>
          </div>
          <ul>
            <li>2021.11</li>
            <li>스타벅스, 베스킨라빈스 메인 페이지 클론코딩</li>
            <li>
              <span>HTML5</span>
              <span>CSS3</span>
              <span>JavaScript</span>
            </li>
            <li>
              <span>캐러셀 구현 </span>
              <span>css transform</span>
              <span>transition 활용</span>
              <span>시맨틱 웹 구현</span>
            </li>
          </ul>
          <div className={style.link}>
            
          <div className={style.github}>
            <a href="">
              <img src={Arrow48} alt="" />
              Github
            </a>
          </div>
          <div className={style.demo}>
            <a href="">
              <img src={Arrow48} alt="" />
              Demo
            </a>
          </div>
          </div>
        </article>
      </section>
    </>
  );
};

export default ProjectItem;

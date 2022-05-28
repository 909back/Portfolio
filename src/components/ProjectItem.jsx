import React from "react";
import style from "../assets/scss/Project.module.scss";
import config from "../../_config.json";
import ArrowPX from '../assets/img/arrow_pixel_ivory.png';


const ProjectItem = ({ index, image, styleName }) => {
  const [data, setData] = React.useState(config.project_info[index]);

  return (
    <>
     <section className={style.page}>
          <div className={style.image}>
            <img src="" alt="" />
          </div>
          <div className={style.code}>
            <div className={style.arrow}>
              <img src={ArrowPX} alt="" />
            </div>
            <div className={style.github}>
              <a href="">GITHUB</a>
            </div>
          </div>
          <div className={style.domain}>
          <div className={style.arrow}>
              <img src={ArrowPX} alt="" />
            </div>
            <div className={style.demo}>
              <a href="">VIEW</a>
            </div>
          </div>
          <article className={style.info}></article>
          <article className={style.skill}></article>
     </section>
    </>
  );
};

export default ProjectItem;

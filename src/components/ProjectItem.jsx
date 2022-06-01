import React from "react";
import style from "../assets/scss/Project.module.scss";
import config from "../../_config.json";
import Arrow48 from "../assets/img/arrow48.png";

const ProjectItem = ({ data, Image, styleName }) => {
 console.log(data);

  return (
    <div className={style.wrapper}>
      <section className={[style.slide,styleName || null].join(" ")}>
        <div className={style.image}>
          <img src={Image} alt="스타벅스" />
        </div>
        <article className={style.info}>
          <div className={style.title}>
            <h2>{data.name}</h2>
          </div>
          <ul>
            <li>{data.period}</li>
            <li>{data.description}</li>
            <li>
              {data.skills.map(skill => <span>{skill}</span>)}
            </li>
            <li>
            {data.func.map(item => <span>{item}</span>)}
            </li>
          </ul>
          <div className={style.link}>
            
          <div className={style.github}>
            <a href={data.github}>
              <img src={Arrow48} alt="" />
              Github
            </a>
          </div>
          <div className={style.demo}>
            <a href={data.domain}>
              <img src={Arrow48} alt="" />
              See Live
            </a>
          </div>
          </div>
        </article>
      </section>
    </div>
  );
};

export default ProjectItem;

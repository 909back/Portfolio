import React from 'react';
import style from '../assets/scss/Skill.module.scss'

const Skill = () => {

    return (
     <>
     <section className={style.skillPage}>
        <h2>MY SKILL</h2>

        <section className={style.skills}>
          <div className={style.html}>html5</div>
          <div className={style.css}>css3</div>
          <div className={style.js}>JavaScript</div>
          <div className={style.react}>ReactJS</div>
          <div className={style.node}>NodeJS</div>
          <div className={style.next}>NextJS</div>
          <div className={style.mysql}>MySQL</div>
          <div className={style.type}>TypeScript</div>
        </section>

     </section>
     </>
    );
};

export default Skill;
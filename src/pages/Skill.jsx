import React from 'react';
import style from '../assets/scss/Skill.module.scss'

const Skill = () => {

    return (
     <>
     <section className={style.skillPage}>
        <h2>MY SKILL</h2>
        <section className={style.skills}>
          <article className={style.html}>
            
          </article>
          <article className={style.css}>css3</article>
          <article className={style.js}>JavaScript</article>
          <article className={style.react}>ReactJS</article>
          <article className={style.node}>NodeJS</article>
          <article className={style.next}>NextJS</article>
          <article className={style.mysql}>MySQL</article>
          <article className={style.type}>TypeScript</article>
        </section>

     </section>
     </>
    );
};

export default Skill;
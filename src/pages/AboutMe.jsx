import React from "react";
import style from '../assets/scss/Aboutme.module.scss'
import myImage from '../assets/img/me.jpeg'


const Aboutme = () => {
  return (
    <>
        <section>
          <article className={style.profile}>
            <div className={style.profileImg}>
              <img src={myImage} />
            </div>
            <div className={style.introduce}>

            </div>
          </article>
        </section>
    </>
  );
};

export default Aboutme;

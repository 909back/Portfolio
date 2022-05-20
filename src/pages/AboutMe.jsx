import React from "react";
import style from "../assets/scss/Aboutme.module.scss";
import myImage from "../assets/img/me.jpeg";
import Sparkle1 from "../assets/img/Sparkle1.png";
import Sparkle2 from "../assets/img/Sparkle2.png";

const AboutMe = () => {
  const Stars = React.useRef([]);
  const [position, setPosition] = React.useState({ X: 0, Y: 0 });

  const onMouseMove = (event) => {
    setPosition({
      X: event.clientX - event.currentTarget.style.width,
      Y: event.clientY - event.currentTarget.style.height,
    });

    loop();
  };

  const loop = () => {
    const speed = 0.01;
    let mx = 0;
    let my = 0;

    mx += (position.X - mx) * speed;
    my += (position.Y - my) * speed;

    Stars.current[0].style.transform = `translate(${mx / 2}px,${
      my / 2
    }px) perspective(300px) translateZ(${(10 * my) / 3}px)`;
    Stars.current[1].style.transform = `translate(${mx / 2}px,${
      my / 2
    }px) perspective(300px) translateZ(${(10 * my) / 3}px)`;

    window.requestAnimationFrame(loop);
  };

  return (
    <>
      <section>
        <img
          ref={(element) => (Stars.current[0] = element)}
          src={Sparkle2}
          alt="sparkle image1"
          className={style.sparkle2}
        />
        <img
          ref={(element) => (Stars.current[1] = element)}
          src={Sparkle1}
          alt="sparkle image1"
          className={style.sparkle1}
        />
        <article className={style.profile} onMouseMove={onMouseMove}>
          <div className={style.profileImg}>
            <img src={myImage} />
          </div>
          <div className={style.introduce}>
            안녕하세요. 프론트엔드 개발자 백은지라고 합니다.
          </div>
        </article>
      </section>
    </>
  );
};

export default AboutMe;

import React from "react";
import style from "../assets/scss/Aboutme.module.scss";
import myImage from "../assets/img/me2.jpeg";
import Sparkle1 from "../assets/img/Sparkle1.png";
import Sparkle2 from "../assets/img/Sparkle2.png";
import velog from "../assets/img/velog.svg";
import velogLight from "../assets/img/velog-white.svg";
import github from "../assets/img/github.png";
import githubLight from "../assets/img/github-light.png";
import email from "../assets/img/email.png";
import emailLight from "../assets/img/email-light.png";
import TypeWriterEffect from "react-typewriter-effect";

const AboutMe = () => {
  const Stars = React.useRef([]);
  const [content, setContent] = React.useState([]);
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
        <header className={style.header}>
          <div className={style.logo}>
            <div className={style.background}>
         <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
            </div>
            <h1>
              <p>909</p>
              <p>BACK</p>
            </h1>
          </div>
          <div className={style.greeting}>
            <div className={style.greetingWrapper}>
              <TypeWriterEffect
                startDelay={200}
                cursorColor="black"
                text="&#8618; &#91; system &#93; 안녕하세요. 프론트엔드 개발자 백은지라고 합니다."
                typeSpeed={100}
              />
            </div>
          </div>
        </header>

        <article className={style.profile} onMouseMove={onMouseMove}>
          <div className={style.profileImg}>
            <img src={myImage} />
          </div>
          <div className={style.introduce}>
            <h2>ABOUT ME</h2>
            <div>
              <p>안녕하세요. 신입 프론트엔드 개발자 백은지라고합니다. </p>
              <p>
                2년간 IT업체에서 영업관리 업무를 담당하며 프론트엔드 개발자의
                꿈을 키우게 되었습니다.
              </p>
              <ul>
                <li>블라블라블라</li>
                <li>
                  새로운 기술에 대해 관심이 많고 배우는 것을 두려워하지 않습니다
                </li>
                <li>
                  사용자를 즐겁게 할 수 있는 Ui/UX와 인터렉션 기술에 흥미를
                  가지고 꾸준히 공부하고 있습니다.
                </li>
              </ul>
            </div>
            <div className={style.sns}>
              <div className={`${style.icons} ${style.github}`}>
                <a href="https://github.com/909back" target="_blank">
                  <img src={githubLight} alt="깃허브 아이콘 화이트" />
                  <img src={github} alt="깃허브 아이콘" />
                </a>
              </div>

              <div className={`${style.icons} ${style.velog}`}>
                <a href="https://velog.io/@909backdev" target="_blank">
                  <img src={velog} alt="벨로그 아이콘" />
                  <img src={velogLight} alt="벨로그 아이콘 화이트" />
                </a>
              </div>

              <div className={`${style.icons} ${style.email}`}>
                <a href="mailto:ejbaek909@gmail.com" target="_blank">
                  <img src={emailLight} alt="이메일 아이콘 화이트" />
                  <img src={email} alt="이메일 아이콘" />
                </a>
              </div>
            </div>
          </div>
        </article>
      </section>
    </>
  );
};

export default AboutMe;

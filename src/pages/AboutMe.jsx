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

  const TypeWriter = TypeWriterEffect;

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

    Stars.current[0].style.transform = `translate(${mx/2}px,${my/2}px) perspective(300px) translateZ(${(10*my)/3}px)`;
    Stars.current[1].style.transform = `translate(${mx/2}px,${my/2}px) perspective(300px) translateZ(${(10*my)/3}px)`;

    window.requestAnimationFrame(loop);
  };

  const Text = `${String.fromCharCode(8618)} ${String.fromCharCode(91)} system ${String.fromCharCode(93)} 안녕하세요${String.fromCharCode(46)} 프론트엔드 개발자 백은지라고 합니다${String.fromCharCode(46)}`.toString();

  const myRef = document.querySelector(".type-area");

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
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <h1>
              <p>909</p>
              <p>BACK</p>
            </h1>
          </div>
          <div className={style.greeting}>
            <div className="type-area">
              <TypeWriter
                startDelay={200}
                cursorColor="#222"
                text={Text}
                typeSpeed={100}
                scrollArea={myRef}
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
              <p>
                안녕하세요. 신입 프론트엔드 개발자 <strong>백은지</strong>
                라고합니다.
              </p>
              <p>
                IT 서비스 회사에서 재직하던 중 HTML5, CSS3, JS 수업을 들으며
                프론트엔드 개발자의 꿈을 키우게 되었습니다.
              </p>
              <p>
                6개월동안 풀스택 개발자 수업을 들으면서 프론트 뿐만 아니라
                백엔드에도 관심을 가지고 공부하고 있습니다.
              </p>
              <ul>
                <li>사용자를 즐겁게하는 창의적인 작업을 즐깁니다.</li>
                <li>
                  새로운 것을 알아가는 것을 좋아히고 언제나 배우려는 자세를
                  가지고 있습니다.
                </li>
                <li>항상 긍정적인 자세로 문제를 해결하고자 합니다.</li>
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

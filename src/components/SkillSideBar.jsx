import React from "react";
import style from "../assets/scss/Skill.module.scss";
import styled from "styled-components";

import level1 from "../assets/img/Level1.png";
import level2 from "../assets/img/Level2.png";
import Arrow48 from '../assets/img/arrow48.png';

const Container = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;

   &.most {
     transform: rotate(5deg);
   }

    img {
      width: 100%;
      height: auto;
    }
  }

  p {
    position: relative;
    text-align: center;
    font-weight: 700;
    font-size: 1.7rem;
  }
`;

const SkillSideBar = () => {
  const [ show, setShow ] = React.useState(false);

  const onClickSidebar = () => {
    setShow((prevState)=> !prevState);
  }

  return (
    <>
      <div className={[style.hide, show ? style.desc : null].join(' ')}>
        <div className={style.head} onClick={onClickSidebar}>
          <p>
          LEVEL
          </p>
          <p>
            MARK
          </p>
         { !show && <img src={Arrow48} alt="" /> }
          </div>

        <div className={style.content}>
          <article className={style.levelM}>
            <Container>
              <div>
                <img src={level1} alt="I'm learning" />
              </div>
              <p>L</p>
            </Container>
            <p>현재 배우고 있는 언어로 <br/> 기초 내용을 학습하고 있습니다.</p>
          </article>
          <article className={style.levelL}>
          <Container>
          <div className="most">
            <img src={level2} alt="the most used" />
          </div>
          <p>M</p>
        </Container>
        <p>프로젝트를 만든 경험이 있고 <br/>자주 사용하는 언어입니다. </p>
          </article>
        </div>

      </div>
    </>
  );
};

export default SkillSideBar;

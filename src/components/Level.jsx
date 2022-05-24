import React from "react";
import styled from "styled-components";

import level1 from "../assets/img/Level1.png";
import level2 from "../assets/img/Level2.svg";

const Container = styled.div`
  position: absolute;
  width: 40px;
  height: 40px;
  right: 10px;
  bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }

  div {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    animation-name: rotate;
    animation-duration: 3s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;

    img {
      width: 100%;
      height: auto;
    }
  }

  p {
    position: relative;
    text-align: center;
    font-weight: 700;
    font-size: 1rem;
  }
`;

const Level = ({ type }) => {
  return (
      <>
    {type === "L" && (
      <Container>
        <div>
          <img src={level1} alt="I'm learning" />
        </div>
        <p>L</p>
      </Container>
    )}

    { type === "M" && (
        <Container>
          <div>
            <img src={level2} alt="I'm learning" />
          </div>
          <p>M</p>
        </Container>
      )
    }
    </>

  );
};

export default Level;

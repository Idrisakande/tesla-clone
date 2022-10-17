import React from "react";
import { Fade } from "react-reveal";
import styled from "styled-components";

export const Section = ({
  title,
  discription,
  backgroundImg,
  leftBtnText,
  rightBtnText,
}) => {
  return (
    <Wrap bgImage={backgroundImg}>
      <Fade bottom>
        <ItemText>
          <h1>{title}</h1>
          <p>{discription}</p>
        </ItemText>
      </Fade>
      <Buttons>
        <Fade bottom>
          <ButtonGroup>
            <LeftButton>{leftBtnText}</LeftButton>
            {rightBtnText && <RightButton>{rightBtnText}</RightButton>}
          </ButtonGroup>
        </Fade>
        <DownArrow src="/images/down-arrow.svg" />
      </Buttons>
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 100vw;
  height: 40rem;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-image: ${(props) => `url('/images/${props.bgImage}')`};
`;

const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center:
`;
const Buttons = styled.div``;

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 1.85rem;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const LeftButton = styled.div`
  height: 2.5rem;
  width: 250px;
  color: #fff;
  background-color: rgba(23, 26, 32, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0.5rem;
  opacity: 0.85;
  font-size: 0.75rem;
  text-transform: uppercase;
  border-radius: 100px;
  cursor: pointer;
`;
const RightButton = styled(LeftButton)`
  color: #000;
  background-color: #fff;
  opacity: 0.65;
`;
const DownArrow = styled.img`
  height: 2.5rem;
  animation: animateDown infinite 1.5s;
`;

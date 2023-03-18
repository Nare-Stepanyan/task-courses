import React from "react";
import styled from "styled-components";
import { ICard } from "../react-app-env";
import playIcon from "assets/playIcon.jpg";

type ICardProps = {
  data: ICard;
};
interface ContainerProps {
  backgroundImage: string;
}

const Card = ({ data }: ICardProps) => {
  return (
    <Container backgroundImage={data.image}>
      <TopTexts>
        <p> {data.title}</p>
        <p>{data.length}</p>
      </TopTexts>
      <Lessons>{data.lessons}</Lessons>
      <Play>
        <img src={playIcon} alt="play" />
      </Play>
    </Container>
  );
};

const Container = styled.div<ContainerProps>`
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
  background-position: center center;
  width: 100%;
  border-radius: 24px;
  color: #ffffff;
  padding: 42px;
  min-height: 544px;
  position: relative;
  margin-bottom: 60px;
  z-index: 1000;
  @media (max-width: 1024px) {
    max-height: 275px;
    min-height: 275px;
    padding: 20px;
  }
`;
const TopTexts = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 15px;
  font-weight: 500;
  font-size: 24px;
  color: #ffffff;
  @media (max-width: 1024px) {
    margin-bottom: 8px;
  }
`;
const Lessons = styled.div`
  font-weight: 500;
  font-size: 16px;
  color: #ffffff;
`;

const Play = styled.div`
  position: absolute;
  bottom: 65px;
  left: 42px;
  width: 84px;
  height: 75px;
  img {
    max-width: 100%;
    max-height: 100%;
    border-radius: 16px;
  }
  @media (max-width: 1024px) {
    width: 58px;
    height: 54px;
    bottom: 40px;
    left: 20px;
  }
`;
export default Card;

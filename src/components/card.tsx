import React from "react";
import styled from "styled-components";
import { ICard } from "../react-app-env";

type ICardProps = {
  data: ICard;
};

const Card = ({ data }: ICardProps) => {
  return (
    <Container>
      {data.title}
      {data.length}
      {data.lessons}
      {data.image}
    </Container>
  );
};

const Container = styled.div``;

export default Card;

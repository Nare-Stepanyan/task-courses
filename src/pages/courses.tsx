import Layout from "components/layout";
import React, { useEffect } from "react";
import styled from "styled-components";
import { courses } from "data/constants";
import { RootState } from "state/reducers";
import { useAppSelector } from "hooks/useTypedSelector";
import { useAppDispatch } from "hooks/useActions";
import Card from "components/card";
import { ICard } from "react-app-env";

const Courses = () => {
  const cards: ICard[] = useAppSelector((state: RootState) => state.courses);
  const { displayPopular } = useAppDispatch();
  useEffect(() => {
    displayPopular(courses);
  }, []);
  useEffect(() => {}, [cards]);
  return (
    <Layout>
      <Container>
        {cards &&
          cards.map((item: ICard, i) => {
            return <Card data={item} key={i} />;
          })}
      </Container>
    </Layout>
  );
};

const Container = styled.div`
  background-color: #fff4ee;
  height: 100vh;
  width: 100%;
  padding: 0 100px;
  @media (max-width: 1024px) {
    padding: 0 30px;
  }
`;

export default Courses;

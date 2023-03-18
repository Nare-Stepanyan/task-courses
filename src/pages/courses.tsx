import Layout from "components/layout";
import React, { useState } from "react";
import styled from "styled-components";
import Card from "components/card";
import { courses } from "data/constants";
import { ICard } from "react-app-env";
import { RootState } from "state/reducers";
import { useAppSelector } from "hooks/useTypedSelector";
import { useAppDispatch } from "hooks/useActions";

const Courses = () => {
  const state = useAppSelector((state: RootState) => state.courses);
  const { displayPopular, displayFavourite, displayNew } = useAppDispatch();
  const [courseList, setCourseList] = useState<ICard[]>(courses);
  const data = courseList[0];
  console.log(data, "data");
  return (
    <Layout>
      <Container>
        <Card data={data} />
      </Container>
    </Layout>
  );
};

const Container = styled.div`
  background-color: #fff4ee;
  height: 100vh;
  width: 100%;
  padding: 0 100px;
`;

export default Courses;

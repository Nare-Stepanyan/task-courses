import Layout from "components/layout";
import React from "react";
import styled from "styled-components";

const Profile = () => {
  return (
    <Layout>
      <Container>Profile</Container>
    </Layout>
  );
};

const Container = styled.div`
  background-color: #fff4ee;
  height: 100vh;
  width: 100%;
  padding: 0 100px;
  overflow: auto;

  @media (max-width: 1024px) {
    padding: 0 30px;
  }
`;
export default Profile;

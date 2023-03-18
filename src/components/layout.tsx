import React from "react";
import styled from "styled-components";
import Header from "./header";
import SideBar from "./sidebar";

const Layout = ({ children }: any) => {
  return (
    <Container>
      <SideBar />
      <Main>
        <Header />

        {children}
      </Main>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;
const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  height: 100vh;
  background-color: ;
`;
export default Layout;

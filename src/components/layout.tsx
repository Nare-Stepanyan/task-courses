import React from "react";
import styled from "styled-components";
import Header from "./header";
import SideBar from "./sidebar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
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
  align-items: stretch;
`;
const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  background-color: #fff4ee;
`;
export default Layout;

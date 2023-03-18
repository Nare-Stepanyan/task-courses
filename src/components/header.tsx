import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <Container>
      <Navigation>
        <Title>Courses</Title>
        <Links>
          <Link>Popular</Link>
          <Link>Favourite</Link>
          <Link>New</Link>
        </Links>
      </Navigation>
    </Container>
  );
};

const Container = styled.div`
  padding: 65px 100px;
  width: 100%;
  background-color: #fff4ee;
  border-radius: 0px 24px 0px 0px;
`;

const Navigation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Title = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 48px;
  color: #000000;
`;
const Links = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
const Link = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  color: #cbb1a2;
  margin-left: 48px;
  cursor: pointer;
`;
export default Header;

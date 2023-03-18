import { useAppDispatch } from "hooks/useActions";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { courses } from "data/constants";
import { capitalizeStr } from "helpers";

const Header = () => {
  const [pageTitle, setPageTitle] = useState("Courses");
  const [isActive, setIsActive] = useState("popular");
  const location = useLocation();
  const { displayPopular, displayFavourite, displayNew } = useAppDispatch();

  useEffect(() => {
    const pathName = location.pathname;
    const pageName = pathName.slice(1);
    setPageTitle(capitalizeStr(pageName) || "Courses");
  }, [location]);
  const handlePopularClick = () => {
    setIsActive("popular");
    displayPopular(courses);
  };
  const handleFavouriteClick = () => {
    setIsActive("favourite");
    displayFavourite(courses);
  };
  const handleNewClick = () => {
    setIsActive("new");
    displayNew(courses);
  };

  return (
    <Container>
      <Navigation>
        <Title>{pageTitle}</Title>
        {pageTitle === "Courses" && (
          <Links>
            <Link
              onClick={handlePopularClick}
              className={isActive === "popular" ? "active" : ""}
            >
              Popular
              {isActive === "popular" && <Line></Line>}
            </Link>
            <span></span>
            <Link
              onClick={handleFavouriteClick}
              className={isActive === "favourite" ? "active" : ""}
            >
              Favourite
              {isActive === "favourite" && <Line></Line>}
            </Link>
            <Link
              onClick={handleNewClick}
              className={isActive === "new" ? "active" : ""}
            >
              New
              {isActive === "new" && <Line></Line>}
            </Link>
          </Links>
        )}
      </Navigation>
    </Container>
  );
};

const Container = styled.div`
  padding: 65px 100px;
  width: 100%;
  background-color: #fff4ee;
  border-radius: 0px 24px 0px 0px;
  @media (max-width: 1024px) {
    padding: 75px 30px;
  }
`;

const Navigation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;
const Title = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 48px;
  color: #000000;
  @media (max-width: 1024px) {
    margin-bottom: 15px;
  }
`;
const Links = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
const Link = styled.a`
  font-weight: 700;
  font-size: 24px;
  color: #cbb1a2;
  margin-left: 48px;
  cursor: pointer;
  text-decoration: none;
  position: relative;
  &.active {
    color: #6749a5;
  }
  @media (max-width: 1024px) {
    margin-left: 0;
    margin-right: 35px;
  }
`;
const Line = styled.span`
  width: 24px;
  border: 3px solid #8964d7;
  position: absolute;
  bottom: -15px;
  left: 40%;
`;
export default Header;

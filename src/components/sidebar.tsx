import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTableColumns,
  faClipboardList,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const SideBar = () => {
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    const path = window.location.pathname;
    setActiveLink(path);
  }, []);
  const handleItemClick = (item: string) => {
    setActiveLink(item);
  };

  return (
    <Container>
      <IconContainer className={activeLink === "/" ? "active" : ""}>
        <StyledNavLink
          to="/"
          onClick={() => handleItemClick("/")}
          className={activeLink === "/" ? "active" : ""}
        >
          <FontAwesomeIcon icon={faTableColumns} />
        </StyledNavLink>
      </IconContainer>
      <IconContainer
        className={activeLink === "/completed-courses" ? "active" : ""}
      >
        <StyledNavLink
          to="/completed-courses"
          onClick={() => handleItemClick("/completed-courses")}
          className={activeLink === "/completed-courses" ? "active" : ""}
        >
          <FontAwesomeIcon
            icon={faClipboardList}
            onClick={() => handleItemClick("completed")}
          />
        </StyledNavLink>
      </IconContainer>
      <IconContainer className={activeLink === "/profile" ? "active" : ""}>
        <StyledNavLink
          to="/profile"
          className={activeLink === "/profile" ? "active" : ""}
        >
          <FontAwesomeIcon
            icon={faUsers}
            onClick={() => handleItemClick("/profile")}
          />
        </StyledNavLink>
      </IconContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 160px;
  padding-top: 127px;
  background-color: #ffe4d6;
  border-radius: 24px 0px 0px 0px;
  @media (max-width: 1024px) {
    width: 100px;
  }
`;
const IconContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 75px;
  font-size: 40px;
  color: #e1aa98;
  &.active {
    border-left: 3px solid #8964d7;
  }
`;
const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #e1aa98;
  cursor: pointer;
  &.active {
    color: #8964d7;
  }
`;

export default SideBar;

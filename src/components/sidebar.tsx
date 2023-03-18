import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTableColumns,
  faClipboardList,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const SideBar = () => {
  const navigate = useNavigate();
  const [active, isActive] = useState(false);

  return (
    <Container>
      <IconContainer>
        <FontAwesomeIcon
          icon={faTableColumns}
          onClick={() => {
            navigate("/");
          }}
        />
      </IconContainer>
      <IconContainer>
        <FontAwesomeIcon
          icon={faClipboardList}
          onClick={() => {
            navigate("/completed-courses");
          }}
        />
      </IconContainer>
      <IconContainer>
        <FontAwesomeIcon
          icon={faUsers}
          onClick={() => {
            navigate("/profile");
          }}
        />
      </IconContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 160px;
  height: 100vh;
  padding-top: 127px;
  background-color: #ffe4d6;
  border-radius: 24px 0px 0px 0px;
  color: #e1aa98;
`;
const ActiveIcon = styled.div`
  color: #8964d7;
  border-left: 3px solid #8964d7;
`;
const IconContainer = styled.div.attrs({
  className: ActiveIcon,
})`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 75px;
  font-size: 40px;
  cursor: pointer;
`;
export default SideBar;

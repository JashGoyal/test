import React from "react";
import styled from "styled-components";
import { AccountBox } from "./accountBox";
import Navbarmain from "./Navbar";
import back from "../images/back.jpg";

const PageStyles = styled.div`
  max-width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  *,
  *::before,
  *::after {
    box-sizing: revert;
  }
`;
export default function Sign() {
  return (
    <PageStyles
      class="bg_image"
      style={{
        backgroundImage: "url(" + back + ")",
        backgroundSize: "cover",
      }}
    >
      <Navbarmain />
      <AccountBox />
    </PageStyles>
  );
}

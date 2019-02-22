import React from "react";
import SideNav from "./side-nav/index";
import { Container } from "./styled.js";
const Main = () => {
  return (
    <div>
      <Container>
        <SideNav />
        <div>Body PlaceHolder</div>

        <div>SidePanel Placeholder</div>
      </Container>
    </div>
  );
};

export default Main;

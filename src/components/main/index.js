import React from "react";
import SideNav from "./side-nav/index";
import SidePanel from "./side-panel";
import Body from "./body";
import { Container, MidBodyWrapper, RightBodyWrapper } from "./styled.js";
const Main = () => {
  return (
    <div>
      <Container>
        <SideNav />
        <MidBodyWrapper>
          <Body Title={"Top Questions"} />
        </MidBodyWrapper>
        <RightBodyWrapper>
          <SidePanel />
        </RightBodyWrapper>
      </Container>
    </div>
  );
};

export default Main;

import React from "react";
import { IconTitle, TitleItem, TitleItemIcon, Container } from "./styled";

const Content = props => {
  return (
    <>
      <Container>
        <TitleItemIcon>
          <IconTitle>{props.iconComponent}</IconTitle>
        </TitleItemIcon>
        <TitleItem>
          <span>{props.content}</span>
        </TitleItem>
      </Container>
    </>
  );
};

export default Content;

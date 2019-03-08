import React from "react";
import {
  Title,
  IconTitle,
  TitleItem,
  TitleItemIcon,
  PostLineBreak
} from "./styled";
const Headers = props => {
  return (
    <>
      <Title>
        <div>
          <TitleItemIcon>
            <IconTitle>{props.iconComponent}</IconTitle>
          </TitleItemIcon>
          <TitleItem>
            <span>{props.header}</span>
          </TitleItem>
        </div>
        <PostLineBreak />
      </Title>
    </>
  );
};

export default Headers;

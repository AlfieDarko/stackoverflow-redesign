import React from "react";
import { IconTitle, TitleItem, PostViewsContainer, Container } from "../styled";

const HotPost = props => {
  return (
    <>
      <Container>
        <PostViewsContainer>
          <IconTitle>{props.postView}k</IconTitle>
        </PostViewsContainer>
        <TitleItem>
          <span>{props.content}</span>
        </TitleItem>
      </Container>
    </>
  );
};

export default HotPost;

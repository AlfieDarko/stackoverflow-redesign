import React from "react";
import { BodyWrapper } from "./styled";
import {} from "react-feather";
import Tabs from "./tabs";
const Body = props => {
  return (
    <>
      <BodyWrapper>
        <h1>{props.Title}</h1>
        <Tabs />
      </BodyWrapper>
    </>
  );
};

export default Body;

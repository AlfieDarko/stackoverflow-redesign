import React from "react";
import {
  HeaderRowItem,
  Container,
  HeaderWrapperLeft,
  HeaderWrapperRight,
  SearchBarItem,
  InputStyled,
  QuestionBtn
} from "./styled.js";
import { LogoStyled } from "./logo/styled.js";

const Header = () => {
  return (
    <>
      <Container>
        <HeaderWrapperLeft>
          <HeaderRowItem>
            <LogoStyled />
          </HeaderRowItem>

          <HeaderRowItem>
            <span>
              stack<b>overflow</b>
            </span>
          </HeaderRowItem>

          <HeaderWrapperLeft>
            <SearchBarItem>
              <span>
                <i class="fa fa-search" aria-hidden="true" />
              </span>
              <span>
                <InputStyled
                  type="text"
                  placeholder="Search by keywords or tags"
                />
              </span>
            </SearchBarItem>
          </HeaderWrapperLeft>
        </HeaderWrapperLeft>

        <HeaderWrapperRight>
          <QuestionBtn>
            <i class="fa fa-plus-circle" aria-hidden="true" />Ask A Question
          </QuestionBtn>
          <span> Profile Info</span>
        </HeaderWrapperRight>
      </Container>
    </>
  );
};

export default Header;

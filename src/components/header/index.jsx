import React from "react";
import {
  HeaderRowItem,
  Container,
  HeaderWrapperLeft,
  HeaderWrapperRight,
  SearchBarItem,
  InputStyled,
  QuestionBtn,
  ProfileIcons,
  ProfilePic,
  ProfileArrow
} from "./styled.js";
import { LogoStyled } from "./logo/styled.js";
import pic from "../../images/FscSjUV__400x400.jpg";

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
            <i class="fa fa-plus-circle" aria-hidden="true" />
            Ask A Question
          </QuestionBtn>

          <ProfileIcons>
            <i class="fas fa-award" />
          </ProfileIcons>

          <ProfileIcons>
            <i class="far fa-comment-alt" />
          </ProfileIcons>

          <ProfilePic>
            <img src={pic} alt="" />
          </ProfilePic>
          <ProfileArrow>
            <i class="fas fa-caret-down" />
          </ProfileArrow>
        </HeaderWrapperRight>
      </Container>
    </>
  );
};

export default Header;

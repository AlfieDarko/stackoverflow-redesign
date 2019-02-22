import styled from "styled-components";

export const HeaderRowItem = styled("div")`
  /* align-self: center; */
`;

export const SearchBarItem = styled("div")`
  /* flex: 0 0 2.5em; */
  /* flex: 0 0 15rem; */
  padding-left: 15rem;

  span {
    padding-right: 2rem;
  }

  span:last-child {
    color: grey;
    font-size: 1.35rem;
  }
`;

export const HeaderRowContainerMiddle = styled("div")`
  flex: 1;
  text-align: center;
`;

export const HeaderRowContainerRight = styled("div")``;

export const HeaderWrapperLeft = styled("div")`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const HeaderWrapperRight = styled("div")`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 3rem;
`;

export const HeaderWrapperMid = styled("div")`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 3rem;
`;

export const Container = styled("div")`
  display: flex;
  flex-wrap: no-wrap;
  justify-content: space-between;
  border-bottom: 1px solid lightgray;
  background-color: white;
`;

export const item = styled.div``;

export const InputStyled = styled.input`
  border-style: none;
`;

export const QuestionBtn = styled("button")`
  margin-right: 3rem;
  box-sizing: border-box;
  padding: 0 2rem;
  width: auto;
  height: 3rem;
  border: none;
  border-radius: 0.45rem;
  background-color: #f49313;
  color: white;
  font-weight: bold;

  i {
    padding-right: 1rem;
  }
`;

export const ProfileIcons = styled("div")`
  padding-right: 2rem;
  color: lightgrey;
`;

export const ProfilePic = styled("div")`
  img {
    height: 5rem;
    width: auto;
    border-radius: 50%;
  }
`;

export const ProfileArrow = styled("div")`
  i {
    padding-left: 1rem;
    color: lightgrey;
  }
`;

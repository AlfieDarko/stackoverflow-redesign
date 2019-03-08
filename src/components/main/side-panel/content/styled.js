import styled from "styled-components";

export const Container = styled.div`
  font-size: 1.2rem;
  display: flex;
`;

export const IconTitle = styled.span`
  padding-top: 1rem;
  color: grey;
`;

export const TitleItem = styled.div`
  display: inline-block;
`;

export const TitleItemIcon = styled.div`
  span {
    margin: 0.9rem 0.3rem 0.5rem 0.5rem;
  }

  width: 8rem;

  /* width: 0.5rem; */
  display: inline-block;
`;

export const PostViewsContainer = styled.div`
  span {
    margin: 0.9rem 0.3rem 0.5rem 0.5rem;
  }
  width: 9rem;
  margin-bottom: 3rem;
  display: inline-block;
`;
export const PostLineBreak = styled("hr")`
  margin-top: 2rem;
  border: none;
  height: 0.1rem;
  color: lightgrey;
  background-color: lightgrey;
`;

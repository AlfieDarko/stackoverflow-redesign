import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  border: 1px solid lightgrey;
  /* width: 30rem; */
  display: block;
  margin: 3rem;
  padding: 2rem;
  width: 29rem;
  background-color: white;
  border-radius: 0.5rem;
`;

export const Title = styled.div`
  font-size: 1.8rem;
`;

export const IconTitle = styled.span`
  padding-top: 1rem;
  color: grey;
`;

export const TitleItem = styled.div`
  display: inline-block;
`;

export const TitleItemIcon = styled.div`
  padding: 0.9rem 0.5rem 0.5rem 0.5rem;
  display: inline-block;
`;

export const PostLineBreak = styled("hr")`
  margin-top: 2rem;
  border: none;
  height: 0.1rem;
  color: lightgrey;
  background-color: lightgrey;
`;

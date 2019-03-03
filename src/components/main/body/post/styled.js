import styled from "styled-components";

export const PostContent = styled("div")`
  padding: 2rem 2rem 1rem 2rem;
  background-color: white;
`;

export const PostContentItem = styled("div")`
  display: flex;
  margin-bottom: 0.5rem;
  h3 {
  }
`;

export const FooterItems = styled("span")`
  background-color: #1682ff;
  color: #fff;
  border-radius: 0.3rem;
  padding: 0.5rem;
  font-size: 1rem;
  margin-right: 1rem;
`;

export const FooterTags = styled("span")`
  background-color: #e8f3ff;
  color: #3090ff;
  border-radius: 0.3rem;
  padding: 0.5rem;
  margin: 0.5rem 0.5rem 0.5rem 0;
  font-size: 1rem;
`;

export const FooterAnswers = styled("span")`
  background-color: #f0f7d7;
  color: #99b42d;
  border-radius: 0.3rem;
  padding: 0.5rem;
  margin: 0.5rem;
  font-size: 1rem;
`;

export const FooterAnswersBlanc = styled("span")`
  background-color: #fff;
  color: grey;
  border-radius: 0.3rem;
  padding: 0.5rem;
  margin: 0.5rem;
  font-size: 1rem;
`;

export const FooterSub = styled("span")`
  color: lightgrey;
  font-size: 1.2rem;
`;

export const PostContentFooter = styled("div")`
  display: flex;
  justify-content: space-between;
  padding-top: 0.5rem;

  div {
    flex-direction: column;
  }
`;

export const PostLineBreak = styled("hr")`
  margin-top: 2rem;
  border: none;
  height: 0.1rem;
  color: lightgrey;
  background-color: lightgrey;
`;

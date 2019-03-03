import styled from "styled-components";

export const TabsContainer = styled("div")`
  display: flex;
`;

export const TabsItem = styled("div")`
  span:not(:first-child),
  span:not(:last-child) {
    background-color: white;
    color: grey;
    /* box-shadow: 0 0.1rem 8px 0 rgba(0, 0, 0, 0.2),
      0 6px 20px 0 rgba(0, 0, 0, 0.19); */
    font-size: 1.4rem;
    padding: 2rem;
  }
  span:first-child {
    background-color: white;
    color: grey;
    border-top-left-radius: 1rem;
    /* box-shadow: 0 0.1rem 8px 0 rgba(0, 0, 0, 0.2),
      0 6px 20px 0 rgba(0, 0, 0, 0.19); */
    font-size: 1.4rem;
    padding: 2rem;
  }

  span:last-child {
    display: inline-block;
    background-color: #fafafa;
    color: grey;
    /* box-shadow: 0 0.1rem 8px 0 rgba(0, 0, 0, 0.2),
      0 6px 20px 0 rgba(0, 0, 0, 0.19); */
    font-size: 1.4rem;
    padding: 2rem;
  }

  span:nth-last-child(2) {
    background-color: white;
    color: grey;
    border-top-right-radius: 1rem;
    /* box-shadow: 0 0.1rem 8px 0 rgba(0, 0, 0, 0.2),
      0 6px 20px 0 rgba(0, 0, 0, 0.19); */
    font-size: 1.4rem;
    padding: 2rem;
  }
`;

export const TabsBodyContent = styled("div")`
  padding: 4rem;
  background-color: white;
`;

export const TabsBodyContentItem = styled("div")`
  display: flex;
  margin-bottom: 0.5rem;
  h3 {
  }
`;

export const TabsBodyContentFooter = styled("div")`
  display: flex;
  justify-content: space-between;
  padding-top: 0.5rem;

  div {
    flex-direction: column;
  }
`;

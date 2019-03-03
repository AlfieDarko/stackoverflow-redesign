import styled from "styled-components";

export const BodyContainer = styled("div")`
  /* flex-grow: 1; ensures that the container will take up the full height of the parent container */
  overflow-y: auto; /*adds scroll to this container*/
  display: flex;
`;

export const BodyWrapper = styled("div")`
  h1 {
    padding: 2rem;
  }
`;

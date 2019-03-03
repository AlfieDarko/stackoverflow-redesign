import styled from "styled-components";
import { unlink } from "fs";

export const NavHeader = styled("span")`
  font-weight: bold;
  font-variant-caps: small-caps;
  color: grey;
  padding: 5.5rem;
`;

export const SideNavContainer = styled("div")`
  padding-top: 4.5rem;
  width: 30rem;
  height: 100vh;
  background-color: white;
  position: sticky;
  /* top: 20px; */
`;

export const Menu = styled("ul")`
  list-style-type: none;

  li {
    display: flex;

    padding: 2rem 0 2rem 1.5rem;
    font-size: 1.4rem;
    svg {
      color: grey;
      padding-right: 1rem;
    }
  }
`;

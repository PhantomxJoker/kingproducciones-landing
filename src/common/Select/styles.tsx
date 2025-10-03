import styled from "styled-components";
import { ColorsBase } from "../../styles/colors_base";

export const StyledContainer = styled("div")`
  display: inline-block;
  width: 100%;
  padding: 10px 5px;
  margin-bottom: -0.625rem;
`;

export const StyledSelect = styled("select")`
  border-radius: 4px;
  border: 0px;
  background: rgb(241, 242, 243);
  transition: 0.3sease-in-out;
  outline: none;
  width: 100%;
  padding: 1rem 1.25rem;
`;

export const Label = styled("label")`
  display: block;
  padding-bottom: 10px;
  text-transform: capitalize;
`;

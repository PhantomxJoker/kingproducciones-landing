import styled from "styled-components";
import { ColorsBase } from "../../styles/colors_base";
import { GlowProperties } from "../../common/types";

export const MiddleBlockSection = styled("section")`
  position: relative;
  padding: 7.5rem 0 3rem;
  text-align: center;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 1024px) {
    padding: 5.5rem 0 3rem;
  }
`;

export const Title = styled("h6")<GlowProperties>`
  color: ${({ glow }) => glow ? ColorsBase.redNeonSoft : ColorsBase.redNeon};
  ${({ glow }) =>
    glow
      ? `text-shadow: 
          0 0 5px ${ColorsBase.redNeon},
          0 0 10px ${ColorsBase.redNeon},
          0 0 20px ${ColorsBase.redNeon},
          0 0 100px ${ColorsBase.redNeon};`
      : "text-shadow: none;"}
`;

export const Subtitle = styled("span")`
  color: white;
  text-shadow: none;
`;

export const Content = styled("p")`
  padding: 0.75rem 0 0.75rem;
`;

export const ContentWrapper = styled("div")`
  max-width: 570px;

  @media only screen and (max-width: 768px) {
    max-width: 100%;
  }
`;

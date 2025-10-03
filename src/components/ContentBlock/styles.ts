import { Row } from "antd";
import styled from "styled-components";
import { ColorsBase } from "../../styles/colors_base";
import { GlowProperties } from "../../common/types";

export const ContentSection = styled("section")`
  position: relative;
  padding: 0 0 8rem;

  @media only screen and (max-width: 1024px) {
    padding: 4rem 0 4rem;
  }
`;

export const Title = styled("h6")<GlowProperties>`
  color: ${ColorsBase.redNeonSoft};
  ${({ glow }) =>
    glow
      ? "animation: ledPulse 1.5s infinite alternate;"
      : `text-shadow: 
          0 0 5px ${ColorsBase.redNeon},
          0 0 10px ${ColorsBase.redNeon},
          0 0 20px ${ColorsBase.redNeon},
          0 0 100px ${ColorsBase.redNeon};`}
`;

export const Subtitle = styled("span")`
  color: white;
  text-shadow: none;
`;

export const Content = styled("p")`
  margin: 1.5rem 0 2rem 0;
`;

export const StyledRow = styled(Row)`
  flex-direction: ${({ direction }: { direction: string }) =>
    direction === "left" ? "row" : "row-reverse"};
`;

export const ContentWrapper = styled("div")`
  position: relative;
  max-width: 540px;

  @media only screen and (max-width: 575px) {
    padding-top: 4rem;
  }
`;

export const ServiceWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  max-width: 100%;
`;

export const MinTitle = styled("h6")`
  font-size: 22px;
  line-height: 1rem;
  padding: 0.5rem 0;
  color: ${ColorsBase.blueElectric};
`;

export const MinPara = styled("p")`
  font-size: 13px;
`;

export const ButtonWrapper = styled("div")<{ marginAtLast?: boolean }>`
  display: flex;
  justify-content: space-between;
  max-width: 100%;

  @media screen and (min-width: 1024px) {
    max-width: 80%;
  }

  button:last-child {
    margin-left: ${(p) => p.marginAtLast ? '20px' : '0px'};
  }
`;

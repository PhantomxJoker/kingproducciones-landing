import styled, { keyframes, css } from "styled-components";
import { ColorsBase } from "../../styles/colors_base";

interface LineDropProps {
  dropSpeed: string
}

const DropKeyframe = keyframes`
  0% {
    top: -50%;
  }
  100% {
    top: 110%;
  }
`;

const colors = [
  ColorsBase.redNeon,
  ColorsBase.blueElectric,
  ColorsBase.yellowLaser,
  ColorsBase.cyanFuture,
  ColorsBase.purpleCosmic,
  ColorsBase.redNeon,
  ColorsBase.blueElectric,
  ColorsBase.yellowLaser,
  ColorsBase.cyanFuture,
  ColorsBase.purpleCosmic,
  ColorsBase.redNeon,
  ColorsBase.blueElectric,
  ColorsBase.yellowLaser,
  ColorsBase.cyanFuture,
  ColorsBase.purpleCosmic,
  ColorsBase.redNeon,
  ColorsBase.blueElectric,
  ColorsBase.yellowLaser,
  ColorsBase.cyanFuture,
  ColorsBase.purpleCosmic,
];

const generateNthChildStyles = () => {
  let styles = "";

  for (let i = 0; i < colors.length; i++) {
    styles += `
      &:nth-child(${i + 1})::after {
        background: linear-gradient(
          to bottom,
          rgba(255, 255, 255, 0) 0%,
          ${colors[i]} 75%,
          ${colors[i]} 100%
        );
        animation-delay: ${i * 0.5}s;
      }
    `;
  }

  return css`${styles}`;
};

export const LinesContainer = styled("div")`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  margin: auto;
  width: 90vw;
  display: flex;
  justify-content: space-between; /* Distribute lines evenly */
`;

export const LineDrop = styled("div")<LineDropProps>`
  position: relative;
  width: 1px;
  height: 100%;
  overflow: hidden;

  &::after {
    content: '';
    display: block;
    position: absolute;
    height: 15vh;
    width: 100%;
    top: -50%;
    left: 0;
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, #ffffff 75%, #ffffff 100%);
    animation: ${DropKeyframe} ${props => props.dropSpeed} 0s infinite;
    animation-fill-mode: forwards;
    animation-timing-function: cubic-bezier(0.4, 0.26, 0, 0.97);
  }

  ${generateNthChildStyles()}
`;
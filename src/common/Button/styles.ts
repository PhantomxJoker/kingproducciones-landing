import styled from "styled-components";
import { ColorsBase } from "../../styles/colors_base";

export const StyledButton = styled("button")<{ color?: string }>`
  background: ${(p) => p.color || ColorsBase.blueElectric};
  color: ${(p) => (p.color ? ColorsBase.blueElectric : "#fff")};
  font-size: 1rem;
  font-weight: 700;
  width: 100%;
  border: 1px solid #edf3f5;
  border-radius: 4px;
  padding: 13px 0;
  cursor: pointer;
  margin-top: 0.625rem;
  max-width: 180px;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 0 5px ${ColorsBase.blueElectric},
          0 0 10px ${ColorsBase.blueElectric},
          0 0 20px ${ColorsBase.blueElectric},
          0 0 30px ${ColorsBase.blueElectric};

  &:hover,
  &:active,
  &:focus {
    color: #fff;
    border: 1px solid ${ColorsBase.cyanFuture};
    background-color: ${ColorsBase.cyanFuture};
    box-shadow: 0 0 5px ${ColorsBase.cyanFuture},
          0 0 10px ${ColorsBase.cyanFuture},
          0 0 20px ${ColorsBase.cyanFuture},
          0 0 30px ${ColorsBase.cyanFuture};
  }
`;

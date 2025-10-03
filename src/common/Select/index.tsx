import { withTranslation } from "react-i18next";
import { StyledSelect, StyledContainer, Label } from "./styles";
import { SelectProps } from "../types";

const Select = ({ name, labelName, placeholder, onChange, children, t }: SelectProps) => (
  <StyledContainer>
    <Label htmlFor={name}>{t(labelName)}</Label>
    <StyledSelect
      placeholder={t(placeholder)}
      id={name}
      name={name}
      onChange={onChange}
    >
      {children}
    </StyledSelect>
  </StyledContainer>
);

export default withTranslation()(Select);

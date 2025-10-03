import { withTranslation, TFunction } from "react-i18next";
import { Container, TextWrapper, Content } from "./styles";

interface Props {
  title: string;
  content: string;
  t: TFunction;
}

const Block = ({ title, content, t }: Props) => {
  const contentArray = t(content).split("[PARAGRAPH]")
  return (
    <Container>
      <h6>{t(title)}</h6>
      <TextWrapper>
        {contentArray.map(
          (paragraph: string) => {
            return (
              <Content>{paragraph}</Content>
            );
          }
        )}
      </TextWrapper>
    </Container>
  );
};

export default withTranslation()(Block);

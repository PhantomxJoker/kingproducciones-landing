import { Row, Col } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { Button } from "../../common/Button";
import { MiddleBlockSection, Content, ContentWrapper, Subtitle, Title } from "./styles";

interface MiddleBlockProps {
  title: string;
  subTitle?: string;
  content: string;
  button: string;
  japaneseText?: string;
  t: TFunction;
  glow?: boolean;
}

const MiddleBlock = ({ title, subTitle, content, button, japaneseText, t, glow }: MiddleBlockProps) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <MiddleBlockSection>
      <Slide direction="up" triggerOnce>
        <Row justify="center" align="middle">
          <ContentWrapper>
            <Col lg={24} md={24} sm={24} xs={24}>
              {japaneseText && <span style={{fontSize: '26px', position: 'relative', top: '18px'}}>{japaneseText}</span>}
              <Title glow={glow}>{t(`${title}`)} <br/><Subtitle>{t(subTitle || "")}</Subtitle></Title>
              <Content>{t(content)}</Content>
              {button && (
                <Button name="submit" onClick={() => scrollTo("sponsor-hasbro")}>
                  {t(button)}
                </Button>
              )}
            </Col>
          </ContentWrapper>
        </Row>
      </Slide>
    </MiddleBlockSection>
  );
};

export default withTranslation()(MiddleBlock);

import { Row, Col, Grid } from "antd";
import { Fade } from "react-awesome-reveal";
import { withTranslation } from "react-i18next";

import { ContentBlockProps } from "./types";
import { Button } from "../../common/Button";
import { SvgIcon } from "../../common/SvgIcon";
import { AssetImg } from "../../common/AssetImg";
import {
  ContentSection,
  Content,
  ContentWrapper,
  ServiceWrapper,
  MinTitle,
  MinPara,
  StyledRow,
  ButtonWrapper,
  Title,
  Subtitle,
} from "./styles";

const { useBreakpoint } = Grid;

const ContentBlock = ({
  icon,
  iconMobile,
  title,
  subTitle,
  content,
  section,
  button,
  t,
  id,
  direction,
  japaneseText,
  glow,
}: ContentBlockProps) => {
  const screens = useBreakpoint();
  
  return (
    <ContentSection>
      <Fade direction={direction} triggerOnce>
        <StyledRow
          justify="space-between"
          align="middle"
          id={id}
          direction={direction}
        >
          <Col lg={11} md={11} sm={12} xs={24} style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            {screens.xs && <AssetImg src={iconMobile ? iconMobile: icon} width={iconMobile ? "70%" : "50%"} height={iconMobile ? "70%" : "50%"} type="png" />}
            {screens.md && <AssetImg src={icon} width="100%" height="100%" type="png" />}
          </Col>
          <Col lg={11} md={11} sm={11} xs={24}>
            <ContentWrapper>
              {japaneseText && <span style={{fontSize: '26px', position: 'relative', top: '18px'}}>{japaneseText}</span>}
              <Title glow={glow}>{t(`${title}`)} <br/><Subtitle>{t(subTitle || "")}</Subtitle></Title>
              <Content>{t(content)}</Content>
              {button && button.length > 0 ? (
                <ButtonWrapper marginAtLast={button && button.length > 1}>
                  {typeof button === "object" &&
                    button.map(
                      (
                        item: {
                          color?: string;
                          title: string;
                          clickAction?: any;
                        },
                        id: number
                      ) => {
                        return (
                          <Button
                            key={id}
                            color={item.color}
                            onClick={item.clickAction}
                          >
                            {t(item.title)}
                          </Button>
                        );
                      }
                    )}
                </ButtonWrapper>
              ) : (
                <ServiceWrapper>
                  <Row justify="space-between">
                    {typeof section === "object" &&
                      section.map(
                        (
                          item: {
                            title: string;
                            content?: string;
                            icon: string;
                            htmlContent?: string;
                          },
                          id: number
                        ) => {
                          return (
                            <Col key={id} span={11}>
                              <SvgIcon
                                src={item.icon}
                                width="60px"
                                height="60px"
                              />
                              <MinTitle>{t(item.title)}</MinTitle>
                              {item.content && <MinPara>{t(item.content || "")}</MinPara>}
                              {item.htmlContent && <div dangerouslySetInnerHTML={{ __html: item.htmlContent || "" }} />}
                            </Col>
                          );
                        }
                      )}
                  </Row>
                </ServiceWrapper>
              )}
            </ContentWrapper>
          </Col>
        </StyledRow>
      </Fade>
    </ContentSection>
  );
};

export default withTranslation()(ContentBlock);

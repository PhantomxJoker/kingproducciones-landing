import { Row, Col } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import Container from "../../common/Container";

import i18n from "i18next";
import {
  FooterSection,
  Title,
  NavLink,
  Extra,
  LogoContainer,
  Para,
  Large,
  FooterLink,
  Chat,
  Empty,
  FooterContainer,
  Language,
  Label,
  LanguageSwitch,
  LanguageSwitchContainer,
} from "./styles";
import { AssetImg } from "../../common/AssetImg";

interface SocialLinkProps {
  href: string;
  src: string;
}

const Footer = ({ t }: { t: TFunction }) => {
  const handleChange = (language: string) => {
    i18n.changeLanguage(language);
  };

  const SocialLink = ({ href, src }: SocialLinkProps) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        key={src}
        aria-label={src}
      >
        <SvgIcon src={src} width="25px" height="25px" />
      </a>
    );
  };

  return (
    <>
      <FooterSection>
        <Container>
          <Row justify="space-between">
            <Col lg={10} md={10} sm={12} xs={12}>
              <Language>{t("Contact")}</Language>
              <Para>
                {t(`Do you have any question with web?`)}
              </Para>
              <a href="mailto:mail@mail.cl">
                <Chat>{t(`Let's Chat`)}</Chat>
              </a>
            </Col>
            <Col lg={8} md={8} sm={12} xs={12}>
              <Title>{t("Bases")}</Title>
              <FooterLink target="_blank" href="#">{t("Bases foodtruck & foodstand")}</FooterLink>
              <FooterLink target="_blank" href="#">{t("Bases Entrepreneurs")}</FooterLink>
            </Col>
            <Col lg={6} md={6} sm={12} xs={12}>
              <Empty />
            </Col>
          </Row>
          <Row justify="space-between">
            <Col lg={10} md={10} sm={12} xs={12}>
              <Empty />
              <Language>{t("Where")}</Language>
              <Para>Area52, Providencia</Para>
              <Para>Avenida Santa Isabel 962</Para>
              <Para>Santiago</Para>
            </Col>
            <Col lg={8} md={8} sm={12} xs={12}>
              <Empty />
              <Title>{t("Forms")}</Title>
              <FooterLink target="_blank" href="#">{t("Entrepreneur Stand Form")}</FooterLink>
            </Col>
            <Col lg={6} md={6} sm={12} xs={12}>
              <Empty />
              <Label htmlFor="select-lang">{t("Language")}</Label>
              <LanguageSwitchContainer>
                <LanguageSwitch onClick={() => handleChange("es")}>
                  <SvgIcon
                    src="chile.svg"
                    aria-label="homepage"
                    width="30px"
                    height="30px"
                  />
                </LanguageSwitch>
                <LanguageSwitch onClick={() => handleChange("en")}>
                  <SvgIcon
                    src="united-states.svg"
                    aria-label="homepage"
                    width="30px"
                    height="30px"
                  />
                </LanguageSwitch>
              </LanguageSwitchContainer>
            </Col>
          </Row>
        </Container>
      </FooterSection>
      <Extra>
        <Container border={true}>
          <Row
            justify="space-between"
            align="middle"
            style={{ paddingTop: "3rem" }}
          >
            <NavLink to="/">
              <LogoContainer>
                <AssetImg srcSet={{ 
                  small: {size: "141w", path: "logo_color_small.png"},
                  medium: {size: "100px", path: "logo_color_medium.png"},
                  large: {size: "352w", path: "logo_color_medium.png"},
                }} type="png"/>
              </LogoContainer>
            </NavLink>
            <FooterContainer>
              <SocialLink
                href="#"
                src="instagram.svg"
              />
              <SocialLink
                href="#"
                src="facebook.svg"
              />
              <SocialLink
                href="#"
                src="ticket.svg"
              />
              {/*
                <a
                href="https://ko-fi.com/Y8Y7H8BNJ"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  height="36"
                  style={{ border: 0, height: 36 }}
                  src="https://storage.ko-fi.com/cdn/kofi3.png?v=3"
                  alt="Buy Me a Coffee at ko-fi.com"
                />
              </a>
              */}
            </FooterContainer>
          </Row>
        </Container>
      </Extra>
    </>
  );
};

export default withTranslation()(Footer);

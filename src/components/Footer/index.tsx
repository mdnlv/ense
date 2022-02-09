import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { Img } from "../../common/Img";
import Container from "../../common/Container";
import ig from './ig.png';
import vk from './vk.png';
import vm from './vm.png';

import i18n from "i18next";
import {
  FooterSection,
  Title,
  NavLink,
  Extra,
  LogoContainer,
  Para,
  Large,
  Chat,
  Empty,
  FooterContainer,
  Language,
  Label,
  LanguageSwitch,
  LanguageSwitchContainer,
  Block,
  AppBtn,
  AppIcon,
  AppFooter
} from "./styles";

interface SocialLinkProps {
  href: string;
  src: string;
}

const Footer = ({ t }: any) => {
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
        <Img src={src} width="25px" height="25px" />
      </a>
    );
  };

  return (
    <>
      <FooterSection>
        <Container>
          <Row justify="space-between">
            <Col lg={10} md={10} sm={12} xs={12}>
              <Language>{t("Почта")}</Language>
              <a href="mailto:md@ensemble.ru">
                <Chat>{t(`md@ensemble.ru`)}</Chat>
              </a>
            </Col>
            <Col lg={13} md={13} sm={12} xs={12}>
              <FooterContainer>
                <Block>
                  <AppBtn><a href="https://vk.com/ensembleru"><AppIcon src={vk}/></a></AppBtn> 
                  <AppBtn><a href="https://instagram.com/ensemble.ru"><AppIcon src={ig}/></a></AppBtn>
                  <AppBtn><a href="https://vimeo.com/ensembleru"><AppIcon src={vm}/></a></AppBtn>     
                </Block>
              </FooterContainer>
            </Col>
            <NavLink to="/">
              <LogoContainer>
              </LogoContainer>
            </NavLink>
          </Row>    
        </Container>
      </FooterSection>
    </>
  );
};

export default withTranslation()(Footer);

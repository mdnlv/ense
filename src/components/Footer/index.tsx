import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import Container from "../../common/Container";
import ig from './ig.png';
import vk from './vk.png';
import vm from './vm.png';

import {
  FooterSection,
  NavLink,
  LogoContainer,
  Chat,
  FooterContainer,
  Language,
  AppBtn,
  AppIcon
} from "./styles";

const Footer = ({ t }: any) => {

  return (
    <>
      <FooterSection>
        <Container>
          <Row justify="space-between">
            <Col lg={18} md={18} sm={12} xs={12}>
              <Language>{t("Почта")}</Language>
              <a href="mailto:md@ensemble.ru">
                <Chat>{t(`md@ensemble.ru`)}</Chat>
              </a>
            </Col>

            <Col lg={6} md={6} sm={12} xs={12}>
              <FooterContainer>
								<AppBtn><a href="https://vk.com/ensembleru"><AppIcon src={vk}/></a></AppBtn> 
								<AppBtn><a href="https://instagram.com/ensemble.ru"><AppIcon src={ig}/></a></AppBtn>
								<AppBtn><a href="https://vimeo.com/ensembleru"><AppIcon src={vm}/></a></AppBtn>     
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

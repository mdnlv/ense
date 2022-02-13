import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { ContentBlockProps } from "../types";
import { Fade } from "react-awesome-reveal";
import Plyr from 'plyr-react'
import 'plyr-react/dist/plyr.css'

import {
  RightBlockContainer,
  Content,
  ContentWrapper,
} from "./styles";

const RightBlock = ({
  t,
  id,
}: ContentBlockProps) => {

  return (
    <RightBlockContainer>
      <Fade direction="right">
        <Row justify="space-between" align="middle" id={id}>
          <Col lg={8} md={8} sm={8} xs={24}>
            <ContentWrapper>
              <Content>
                <h5>Опен колл</h5>
								<p style={{lineHeight: "1.5em"}}>Мы подали заявку на грант в области культуры и искусств в Фонд культурных инициатив для реализации концертного проекта "Песни года". Проект предполагает опен-колл — стипендиальный конкурс для музыкантов. По итогам конкурса будут выбраны 20 стипендиальных участников, соавторов концертного события. Остальные заявители также смогут принять участие в концертах. Запуск проекта намечен на весну 2022 года.</p>
              </Content>
            </ContentWrapper>
          </Col>
          <Col lg={15} md={15} sm={15} xs={24}>
          <Plyr
            source={{
              type: 'video',
              sources: [
                {
                  src: '672091672',
                  provider: 'vimeo',
                },
              ],
            }}
						options={{
							controls: ['play', 'progress', 'current-time', 'volume', 'fullscreen'],
							settings: ['captions']
						} as any}
          />
          </Col>
        </Row>
      </Fade>
    </RightBlockContainer>
  );
};

export default withTranslation()(RightBlock);

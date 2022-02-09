import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { Img } from "../../common/Img";
import { ContentBlockProps } from "../types";
import { Fade } from "react-awesome-reveal";

import {
  LeftContentSection,
  Content,  
  ContentWrapper,
  ServiceWrapper,
  MinTitle,
  MinPara,
} from "./styles";
import Plyr from 'plyr-react'
import 'plyr-react/dist/plyr.css'

import { List } from 'antd';

const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
];

const PesniGoda = ({
  section,
  t,
  id,
}: ContentBlockProps) => {
  return (
    <LeftContentSection>
      <Fade direction="left">
        <Row justify="space-between" align="middle" id={id}>
          <Col lg={11} md={11} sm={12} xs={24}>
            <Img src={'svg/cover.jpg'} width="100%" height="100%" />
          </Col>
          <Col lg={11} md={11} sm={11} xs={24}>
            <ContentWrapper>
              <h6>{'Песни Года'}</h6>
              <Content>
              <List
                size="small"
                bordered
                dataSource={data}
                renderItem={item => <List.Item>{item}</List.Item>}
              />

                <Plyr
                  source={{
                    type: 'audio',
                    title: 'Example title',
                    sources: [
                      {
                        src: '/pesn/01.mp3',
                        type: 'audio/mp3',
                      },
                      {
                        src: '/pesn/02.mp3',
                        type: 'audio/mp3',
                      },
                    ],
                  }}
                />
              </Content>
              <ServiceWrapper>
                <Row justify="space-between">
                  {typeof section === "object" &&
                    section.map((item: any, id: number) => {
                      return (
                        <Col key={id} span={11}>
                          <Img src={'svg'+ item.icon} width="60px" height="60px" />
                          <MinTitle>{t(item.title)}</MinTitle>
                          <MinPara>{t(item.content)}</MinPara>
                        </Col>
                      );
                    })}
                </Row>
              </ServiceWrapper>
            </ContentWrapper>
          </Col>
        </Row>
      </Fade>
    </LeftContentSection>
  );
};

export default withTranslation()(PesniGoda);

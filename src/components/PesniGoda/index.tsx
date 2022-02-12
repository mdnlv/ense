import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { Img } from "../../common/Img";
import { ContentBlockProps } from "../types";
import { Fade } from "react-awesome-reveal";
import Plyr, { APITypes } from 'plyr-react'
import 'plyr-react/dist/plyr.css'
import { List } from 'antd';
import { useEffect, useRef, useState } from "react";

import {
  LeftContentSection,
  Content,  
  ContentWrapper,
  ServiceWrapper,
  MinTitle,
  MinPara,
} from "./styles";

const tracks = {
	type: 'audio',
	title: 'Example title',
	sources: [
		{
			title: '1. Весна',
			src: "/pesn/01.mp3",
			type: 'audio/mp3'
		},
		{
			title: '2. Люпины',
			src: "/pesn/02.mp3",
			type: 'audio/mp3'
		},		
		{
			title: '3. Птицы',
			src: "/pesn/03.mp3",
			type: 'audio/mp3'
		},
		{
			title: '4. Зима',
			src: "/pesn/04.mp3",
			type: 'audio/mp3'
		},
		{
			title: '5. Цветы',
			src: "/pesn/05.mp3",
			type: 'audio/mp3'
		},
		{
			title: '6. Ночь',
			src: "/pesn/06.mp3",
			type: 'audio/mp3'
		},		
		{
			title: '7. Лето',
			src: "/pesn/07.mp3",
			type: 'audio/mp3'
		},
		{
			title: '8. Волчок',
			src: "/pesn/08.mp3",
			type: 'audio/mp3'
		},
		{
			title: '9. Слово',
			src: "/pesn/09.mp3",
			type: 'audio/mp3'
		},
		{
			title: '10. Дом',
			src: "/pesn/10.mp3",
			type: 'audio/mp3'
		},
	]
};

const PesniGoda = ({
  section,
  t,
  id,
}: ContentBlockProps) => {
	const ref = useRef<APITypes>(null);

  const playAudio = () => {
    (ref.current?.plyr as Plyr)?.play();
		(ref.current?.plyr as Plyr).on('ended', () => {
			let next = Number(String(ref.current?.plyr.source).slice(-6, -4));
			if(next < 10) {
				changeOnDemandSong(tracks.sources[next].src, tracks.sources[next].title, tracks.sources[next].type); 
				setTimeout(playAudio, 500);
			} 
		});
  };
	const [currentTrackSrc, setCurrentTrackSrc] = useState(tracks.sources[0])
	const [audioSrc, setAudioSrc] = useState({
		type: 'audio',
		sources: [
			{
				title: currentTrackSrc.title,
				src: currentTrackSrc.src,
				type: currentTrackSrc.type,
			}
		]
	});

	const changeOnDemandSong = (newSong: any, newSongTitle: any, newType: any) => {
		setCurrentTrackSrc(newSong);
		setAudioSrc({
			type: 'audio',
			sources: [
				{
					title: newSongTitle,
					src: newSong,
					type: newType
				}
			]
		});
	}



  useEffect(() => {
    function addListener() {
      console.log(ref.current?.plyr);
      (ref.current?.plyr as Plyr).on('ready', (event) => {
        console.log(event);
        alert("Play ended");
      });

			(ref.current?.plyr as Plyr).on('playing', (event) => {
				console.log(event);
			});
    }

    if (ref.current?.plyr.source === null) setTimeout(addListener, 300);
    else addListener();

		
  });

  return (
    <LeftContentSection>
      <Fade direction="left">
        <Row justify="space-between" align="middle" id={id}>
          <Col lg={11} md={11} sm={12} xs={24}>
            <Img src={'svg/cover.jpg'} width="100%" height="100%" />
          </Col>
          <Col lg={11} md={11} sm={11} xs={24}>
            <ContentWrapper>
              <h5>{'Песни Года'}</h5>
              <Content>
              <List
                size="small"
								className="ondemand-plList"
                bordered
                dataSource={tracks.sources}
                renderItem={item => <List.Item className="plItem" style={{background: "#fff", cursor: "pointer"}} onClick={() => { 					
										changeOnDemandSong(item.src, item.title, item.type); 
										setTimeout(playAudio, 500);
									}}>
										{item.title}
								</List.Item>}
              />

								{/*<div className="">{audioSrc.sources[0].title}</div>*/}					

							  <Plyr
									ref={ref}
                  source={audioSrc as any}
									options={{
										controls: ['play', 'progress', 'current-time', 'volume'],
										settings: ['captions']
									} as any}
									
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

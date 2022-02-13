import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { Img } from "../../common/Img";
import { ContentBlockProps } from "../types";
import { Fade } from "react-awesome-reveal";
import Plyr, { APITypes } from 'plyr-react'
import 'plyr-react/dist/plyr.css'
import { List } from 'antd';
import { useRef, useState } from "react";

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
	const [currentTrackSrc, setCurrentTrackSrc] = useState(tracks.sources[0]);
	const [numberTrack, setNumberTrack] = useState('00');
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

	const playAudio = () => {
    (ref.current?.plyr as Plyr)?.play();	
		let t = Number(String(ref.current?.plyr.source).slice(-6, -4));
		//numberTrack === '00' && setNumberTrack('01');
		(ref.current?.plyr as Plyr).on('ended', () => {
			if(t < 10) {
				changeOnDemandSong(tracks.sources[t].src, tracks.sources[t].title, tracks.sources[t].type); 
				setTimeout(playAudio, 500);
			} else {
				changeOnDemandSong(tracks.sources[0].src, tracks.sources[0].title, tracks.sources[0].type); 
			}
		});
  };

	const changeOnDemandSong = (newSong: any, newSongTitle: any, newType: any) => {
		setNumberTrack(newSong.slice(-6, -4));
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

  return (
    <LeftContentSection>

      <Fade direction="left">
        <Row justify="space-between" align="middle" id={id}>
          <Col lg={11} md={11} sm={12} xs={24}>
            <Img src={'covers/'+ numberTrack  +'.jpg'} width="100%" height="100%" />
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
									renderItem={item => 
										<List.Item 
											className="plItem" 
											style={(item.src.slice(-6, -4) === numberTrack) ? {background: "#d3e5f6", cursor: "pointer"} : {background: "#fff", cursor: "pointer", display: "flex"}} 
											onClick={() => {
												if(item.src.slice(-6, -4) !== numberTrack ) {
													changeOnDemandSong(item.src, item.title, item.type); 
													setTimeout(playAudio, 500);
												} else {
													(ref.current?.plyr as Plyr)?.togglePlay();
												}
											}}
										>
												{item.title} 
												{(item.src.slice(-6, -4) !== numberTrack) && <Img src={'svg/plyr-play.svg'} width="12px" height="12px" />}
										</List.Item>
									}
								/>		
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

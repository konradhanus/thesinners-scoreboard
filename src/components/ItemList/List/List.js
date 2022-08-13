import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  ListWrapper,
  Header,
  Content,
  Text,
  Button,
  Link,
  RankingContainer,
  Table,
  Title,
  Box,
  FirstBoxContainer,
  IconWithPlace,
  Avatar,
  AvatarWinners,
  SecondBoxContainer,
  NameWithPoints,
  Points,
  LevelContainer,
  Level,
} from "../../ScoreBoard/Styles/tableStyles";
import { listData, listDataOthers } from "./listData";

export default function ItemList() {
  // const date = new Date().toLocaleTimeString();
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
    AOS.refresh();
  }, []);

  return (
    <ListWrapper>
      <Header className="hero" data-aos="fade-right">
        <Content className="hero-body">
          <Text className="title">Welcome on Dog Ranking App</Text>
          <Text className="subtitle">
            Fight against other players and earn points to win.
          </Text>
        </Content>
        <Button className="button is-danger">
          <Link
            href="https://psiaapka.web.app"
            rel="noreferrer"
            target="_blank"
          >
            Get Started!
          </Link>
        </Button>
      </Header>
      <RankingContainer
        data-aos="fade-left"
        data-aos-anchor="#example-anchor"
        data-aos-offset="500"
        data-aos-duration="500"
      >
        <Table className="columns is-variable is-8-mobile is-0-tablet is-3-desktop is-8-widescreen is-2-fullhd">
          <Title>
            <h4 className="title is-4">Dog Ranking</h4>
          </Title>
          {/* map here */}
          {listData.map((list, id) => {
            return (
              <React.Fragment key={id}>
                <Box className="box">
                  <FirstBoxContainer>
                    <IconWithPlace>
                      {list.icon}
                      <h4 className="title is-6" style={{ minWidth: 40 }}>
                        {list.place}
                      </h4>
                    </IconWithPlace>
                  </FirstBoxContainer>

                  <AvatarWinners>
                    <figure className="image">
                      <img
                        className="is-rounded"
                        src={list.avatar}
                        alt="avatar"
                      />
                    </figure>
                  </AvatarWinners>
                  <SecondBoxContainer>
                    <NameWithPoints>
                      {list.name}
                      <Points>
                        <h4 className="title is-6">{list.points}</h4>
                      </Points>
                    </NameWithPoints>
                    <LevelContainer className="box">
                      <Level className="box">
                        <p style={{ fontSize: 12 }}>{list.level}</p>
                      </Level>
                    </LevelContainer>
                  </SecondBoxContainer>
                </Box>
              </React.Fragment>
            );
          })}
          {listDataOthers.map((listOthers, id) => {
            return (
              <React.Fragment key={id}>
                <Box className="box">
                  <FirstBoxContainer>
                    <IconWithPlace>
                      <h4 className="title is-6" style={{ minWidth: 40 }}>
                        {listOthers.place}
                      </h4>
                    </IconWithPlace>
                  </FirstBoxContainer>
                  <Avatar>
                    <figure className="image">
                      <img
                        className="is-rounded"
                        src={listOthers.avatar}
                        alt="avatar"
                      />
                    </figure>
                  </Avatar>
                  <SecondBoxContainer>
                    <NameWithPoints>
                      {listOthers.name}
                      <Points>
                        <h4 className="title is-6">{listOthers.points}</h4>
                      </Points>
                    </NameWithPoints>
                    {/* <LevelContainer className="box">
                      <Level className="box">
                        <p style={{ fontSize: 12 }}>{listOthers.level}</p>
                      </Level>
                    </LevelContainer> */}
                  </SecondBoxContainer>
                </Box>
              </React.Fragment>
            );
          })}
        </Table>
      </RankingContainer>
      {/* <footer
        className="footer"
        style={{backgroundColor: "#7490c0", width: "100%", marginTop: 80, alignItems: "center", minWidth: 320, padding: 20}}
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        <div className="content has-text-centered">
          <p className="subtitle" style={{ color: "white" }}>
            &copy; Powered by <b>Kotek999</b> &copy;
          </p>
        </div>
      </footer> */}
    </ListWrapper>
  );
}

import * as React from "react";
import {
  Box,
  FirstBoxContainer,
  IconWithPlace,
  AvatarWinners,
  SecondBoxContainer,
  NameWithPoints,
  Points,
  LevelContainer,
  Level,
} from "../../../components/ScoreBoard/Styles/tableStyles";

const ListDataWinners = ({ icon, place, avatar, name, level, points }: any) => (
  <React.Fragment>
    <Box className="box">
      <FirstBoxContainer>
        <IconWithPlace>
          {icon}
          <h4 className="title is-6" style={{ minWidth: 40 }}>
            {place}
          </h4>
        </IconWithPlace>
      </FirstBoxContainer>
      <AvatarWinners>
        <figure className="image">
          <img className="is-rounded" src={avatar} alt="avatar" />
        </figure>
      </AvatarWinners>
      <SecondBoxContainer>
        <NameWithPoints>
          {name}
          <Points>
            <h4 className="title is-6">{points}</h4>
          </Points>
        </NameWithPoints>
        <LevelContainer className="box">
          <Level className="box">
            <p style={{ fontSize: 12 }}>{level}</p>
          </Level>
        </LevelContainer>
      </SecondBoxContainer>
    </Box>
  </React.Fragment>
);

export default ListDataWinners;

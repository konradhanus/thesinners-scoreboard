import {
  Box,
  FirstBoxContainer,
  IconWithPlace,
  Avatar,
  SecondBoxContainer,
  NameWithPoints,
  Points,
  LevelContainer,
  Level,
} from "../../../components/ScoreBoard/Styles/tableStyles";

const ListDataOthers = ({ place, avatar, name, level, points }: any) => (
  <Box className="box">
    <FirstBoxContainer>
      <IconWithPlace>
        <h4 className="title is-6" style={{ minWidth: 40 }}>
          {place}
        </h4>
      </IconWithPlace>
    </FirstBoxContainer>
    <Avatar>
      <figure className="image">
        <img className="is-rounded" src={avatar} alt="avatar" />
      </figure>
    </Avatar>
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
);

export default ListDataOthers;

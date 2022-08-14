import {
  Box,
  FirstBoxContainer,
  IconWithPlace,
  Avatar,
  SecondBoxContainer,
  NameWithPoints,
  Points,
} from "../../../components/ScoreBoard/Styles/tableStyles";

const ListDataWithout = ({ place, avatar, name, points }: any) => (
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
    </SecondBoxContainer>
  </Box>
);

export default ListDataWithout;

import {
  Box,
  FirstBoxContainer,
  IconWithPlace,
  Value,
  AvatarWinners,
  SecondBoxContainer,
  NameWithPoints,
  Points,
  LevelContainer,
  Level,
} from "../../../components/ScoreBoard/Styles/tableStyles";
import temporaryAvatarImage from "../../../assets/avatarImage.png";
import { Winners } from "../../helpers/types";

function ListDataWinners(props: Winners) {
  const listData = props.players
    ? Object.keys(props.players).map((key) => {
        const p = props.players[key].player;

        return {
          // title: "untitled",
          // name: p.name && p.name,
          // status: "nothing",
          // points: p.points && p.points,
          // value: "0",
          icon: p.icon && p.icon,
          place: p.place && p.place,
          avatar: p.avatar && p.avatar,
          name: p.name && p.name,
          level: p.level && p.level,
          points: p.points && p.points,
        };
      })
    : [];
  return (
    <>
      {props.isMobile ? (
        <>
          {listData
            .sort((p, m) => (p.points < m.points ? 1 : -1))
            .filter((best, index) => index < 20)
            .map((row) => (
              <Box
                className="box"
                data-aos="fade-up"
                data-aos-anchor="#example-anchor"
                data-aos-duration="800"
                key={row.name}
              >
                <FirstBoxContainer>
                  <IconWithPlace>
                    {row.icon}
                    <Value className="title is-6" style={{ minWidth: 40 }}>
                      {row.place}
                    </Value>
                  </IconWithPlace>
                </FirstBoxContainer>
                <AvatarWinners>
                  <figure className="image">
                    <img
                      className="is-rounded"
                      src={temporaryAvatarImage}
                      alt="avatar"
                    />
                  </figure>
                </AvatarWinners>
                <SecondBoxContainer>
                  <NameWithPoints>
                    {row.name}
                    <Points>
                      <Value className="title is-6">{row.points}</Value>
                    </Points>
                  </NameWithPoints>
                  <LevelContainer className="box">
                    <Level className="box">
                      <Value style={{ fontSize: 12 }}>{row.level}</Value>
                    </Level>
                  </LevelContainer>
                </SecondBoxContainer>
              </Box>
            ))}
        </>
      ) : (
        <>
          {listData
            .sort((p, m) => (p.points < m.points ? 1 : -1))
            .filter((best, index) => index < 3)
            .map((row) => (
              <Box
                className="box"
                data-aos="fade-up"
                data-aos-anchor="#example-anchor"
                data-aos-duration="800"
                key={row.name}
              >
                <FirstBoxContainer>
                  <IconWithPlace>
                    {row.icon}
                    <Value className="title is-6" style={{ minWidth: 40 }}>
                      {row.place}
                    </Value>
                  </IconWithPlace>
                </FirstBoxContainer>
                <AvatarWinners>
                  <figure className="image">
                    <img
                      className="is-rounded"
                      src={temporaryAvatarImage}
                      alt="avatar"
                    />
                  </figure>
                </AvatarWinners>
                <SecondBoxContainer>
                  <NameWithPoints>
                    {row.name}
                    <Points>
                      <Value className="title is-6">{row.points}</Value>
                    </Points>
                  </NameWithPoints>
                  <LevelContainer className="box">
                    <Level className="box">
                      <Value style={{ fontSize: 12 }}>{row.level}</Value>
                    </Level>
                  </LevelContainer>
                </SecondBoxContainer>
              </Box>
            ))}
        </>
      )}
    </>
  );
}

export default ListDataWinners;

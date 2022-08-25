import {
  Box,
  FirstBoxContainer,
  IconWithPlace,
  Value,
  Avatar,
  SecondBoxContainer,
  NameWithPoints,
  Points,
  Level,
  LevelContainer,
} from "../../../components/ScoreBoard/Styles/tableStyles";
import AvatarMobile from "../../Avatar";
import { Others } from "../../helpers/types";
import ModalData from "../../Modal";

function ListDataOthers(props: Others) {
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
      {listData
        .sort((p, m) => (p.points < m.points ? 1 : -1))
        .filter((best, index) => index > 2)
        .map((player) => (
          <Box
            className="box"
            data-aos="fade-up"
            data-aos-anchor="#example-anchor"
            data-aos-duration="800"
            key={player.name}
          >
            <FirstBoxContainer>
              <IconWithPlace>
                {/* {player.icon} */}
                <Value className="title is-6" style={{ minWidth: 40 }}>
                  {player.place}
                </Value>
              </IconWithPlace>
            </FirstBoxContainer>
            <Avatar>
              <AvatarMobile />
            </Avatar>
            <SecondBoxContainer>
              <NameWithPoints>
                {player.name}
                <ModalData
                  name={player.name}
                  place={player.place}
                  points={player.points}
                >
                  <LevelContainer className="box">
                    <Level className="box">
                      <Value style={{ fontSize: 12 }}>{player.level}</Value>
                    </Level>
                  </LevelContainer>
                </ModalData>
                <Points>
                  <Value className="title is-6">{player.points}</Value>
                </Points>
              </NameWithPoints>
            </SecondBoxContainer>
          </Box>
        ))}
    </>
  );
}

export default ListDataOthers;

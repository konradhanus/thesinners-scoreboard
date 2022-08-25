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
import { Winners } from "../../helpers/types";
import { IconType } from "../../helpers/types";
import { ImageData } from "../../../components/ItemList/List/listData";
import { MAX_POINTS, PLACE } from "./Data";
import Avatar from "../../Avatar";
import Icon from "../../PlaceIcons";
import displayIcon from "../../helpers/displayIcon";

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
                    {player.points >= MAX_POINTS &&
                      player.place === PLACE[0] && (
                        <Icon
                          src={displayIcon(IconType.FirstPlace)}
                          alt={ImageData.alt_First_Place}
                        />
                      )}
                    {player.points < MAX_POINTS &&
                      player.place === PLACE[1] && (
                        <Icon
                          src={displayIcon(IconType.SecondPlace)}
                          alt={ImageData.alt_Second_Place}
                        />
                      )}
                    {player.points < MAX_POINTS &&
                      player.place === PLACE[2] && (
                        <Icon
                          src={displayIcon(IconType.ThirdPlace)}
                          alt={ImageData.alt_Third_Place}
                        />
                      )}
                    <Value className="title is-6" style={{ minWidth: 40 }}>
                      {player.place}
                    </Value>
                  </IconWithPlace>
                </FirstBoxContainer>
                <AvatarWinners>
                  <Avatar />
                </AvatarWinners>
                <SecondBoxContainer>
                  <NameWithPoints>
                    {player.name}
                    <Points>
                      <Value className="title is-6">{player.points}</Value>
                    </Points>
                  </NameWithPoints>
                  <LevelContainer className="box">
                    <Level className="box">
                      <Value style={{ fontSize: 12 }}>{player.level}</Value>
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
                    {player.points >= MAX_POINTS &&
                      player.place === PLACE[0] && (
                        <Icon
                          src={displayIcon(IconType.FirstPlace)}
                          alt={ImageData.alt_First_Place}
                        />
                      )}
                    {player.points < MAX_POINTS &&
                      player.place === PLACE[1] && (
                        <Icon
                          src={displayIcon(IconType.SecondPlace)}
                          alt={ImageData.alt_Second_Place}
                        />
                      )}
                    {player.points < MAX_POINTS &&
                      player.place === PLACE[2] && (
                        <Icon
                          src={displayIcon(IconType.ThirdPlace)}
                          alt={ImageData.alt_Third_Place}
                        />
                      )}
                    <Value className="title is-6" style={{ minWidth: 40 }}>
                      {player.place}
                    </Value>
                  </IconWithPlace>
                </FirstBoxContainer>
                <AvatarWinners>
                  <Avatar />
                </AvatarWinners>
                <SecondBoxContainer>
                  <NameWithPoints>
                    {player.name}
                    <Points>
                      <Value className="title is-6">{player.points}</Value>
                    </Points>
                  </NameWithPoints>
                  <LevelContainer className="box">
                    <Level className="box">
                      <Value style={{ fontSize: 12 }}>{player.level}</Value>
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

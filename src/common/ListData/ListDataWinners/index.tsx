import {
  Box,
  FirstBoxContainer,
  IconWithPlace,
  Value,
  AvatarWinners,
  LevelInfo,
  SecondBoxContainer,
  NameWithPoints,
  Experience,
  Points,
  LevelContainer,
  Level,
} from "../../../components/ScoreBoard/Styles/tableStyles";
import { IconType } from "../../helpers/types";
import { ImageData } from "../../../components/ItemList/List/listData";
import { LEVELS, PLACE, PLACE_AFFIX } from "./Data";
import Avatar from "../../Avatar";
import Icon from "../../PlaceIcons";
import displayIcon from "../../helpers/displayIcon";
import getLevel from "../../helpers/getLevel";
import {Player} from '../../helpers/types';

export interface ListDataWinnersProps {
  players: any;
  isMobile: boolean;
  isFirst?: boolean;
  value?: number;
}

// refaktor

function ListDataWinners(props: ListDataWinnersProps): JSX.Element {
  const listData = props.players
    ? Object.keys(props.players).map((key) => {
        const p = props.players[key].player;

        return {
          icon: p.icon && p.icon,
          place: p.place && p.place,
          avatar: p.avatar && p.avatar,
          name: p.name && p.name,
          level: p.level && p.level,
          points: p.points && p.points,
        };
      })
    : [];

  if (props.players === null) {
    return <>"Ładowanie..."</>;
  }
  return (
    <>
      {props.isMobile ? (
        <>
          {listData
            .sort((p, m) => (p.points < m.points ? 1 : -1))
            .filter((best, index) => index < 20)
            .map((player, place) => {
              const id = place + 1;
              return (
                <Box
                  className="box"
                  data-aos="fade-up"
                  data-aos-anchor="#example-anchor"
                  data-aos-duration="800"
                  key={player.name}
                >
                  <FirstBoxContainer>
                    <IconWithPlace>
                      {id === PLACE.first && (
                        <Icon
                          src={displayIcon(IconType.FirstPlace)}
                          alt={ImageData.alt_First_Place}
                        />
                      )}

                      {id === PLACE.second && (
                        <Icon
                          src={displayIcon(IconType.SecondPlace)}
                          alt={ImageData.alt_Second_Place}
                        />
                      )}
                      {id === PLACE.third && (
                        <Icon
                          src={displayIcon(IconType.ThirdPlace)}
                          alt={ImageData.alt_Third_Place}
                        />
                      )}

                      <Value className="title is-6" style={{ minWidth: 40 }}>
                        {id === PLACE.first ||
                        id === PLACE.second ||
                        id === PLACE.third
                          ? `${id}${PLACE_AFFIX[id - 1]}`
                          : id}
                      </Value>
                    </IconWithPlace>
                  </FirstBoxContainer>
                  <AvatarWinners>
                    <Avatar />
                  </AvatarWinners>
                  <LevelInfo>{getLevel(player.points)}</LevelInfo>
                  <SecondBoxContainer>
                    <NameWithPoints>
                      {player.name}
                      <Points>
                        <Value className="title is-6">{player.points}</Value>
                      </Points>
                    </NameWithPoints>
                    <Experience size={"10pt"}>
                      EXP {player.points} /{" "}
                      {LEVELS[getLevel(player.points)].value}
                    </Experience>
                    <LevelContainer className="box">
                      <Level
                        className="box"
                        value={
                          (player.points /
                            LEVELS[getLevel(player.points)].value) *
                          100
                        }
                      >
                        <Value style={{ fontSize: 12 }}></Value>
                      </Level>
                    </LevelContainer>
                  </SecondBoxContainer>
                </Box>
              );
            })}
        </>
      ) : (
        <>
          {listData
            .sort((p, m) => (p.points < m.points ? 1 : -1))
            .filter((best, index) => index < 3)
            .map((player, place) => {
              const id = place + 1;
              return (
                <Box
                  className="box"
                  data-aos="fade-up"
                  data-aos-anchor="#example-anchor"
                  data-aos-duration="800"
                  key={player.name}
                >
                  <FirstBoxContainer>
                    <IconWithPlace>
                      {id === PLACE.first && (
                        <Icon
                          src={displayIcon(IconType.FirstPlace)}
                          alt={ImageData.alt_First_Place}
                        />
                      )}

                      {id === PLACE.second && (
                        <Icon
                          src={displayIcon(IconType.SecondPlace)}
                          alt={ImageData.alt_Second_Place}
                        />
                      )}
                      {id === PLACE.third && (
                        <Icon
                          src={displayIcon(IconType.ThirdPlace)}
                          alt={ImageData.alt_Third_Place}
                        />
                      )}

                      <Value className="title is-6" style={{ minWidth: 40 }}>
                        {id === PLACE.first ||
                        id === PLACE.second ||
                        id === PLACE.third
                          ? `${id}${PLACE_AFFIX[id - 1]}`
                          : id}
                      </Value>
                    </IconWithPlace>
                  </FirstBoxContainer>
                  <AvatarWinners>
                    <Avatar />
                  </AvatarWinners>
                  <LevelInfo>{getLevel(player.points)}</LevelInfo>
                  <SecondBoxContainer>
                    <NameWithPoints>
                      {player.name}
                      <Points>
                        <Value className="title is-6">{player.points}</Value>
                      </Points>
                    </NameWithPoints>
                    <Experience size={"8pt"}>
                      EXP {player.points} /{" "}
                      {LEVELS[getLevel(player.points)].value}
                    </Experience>
                    <LevelContainer className="box">
                      <Level
                        className="box"
                        value={
                          (player.points /
                            LEVELS[getLevel(player.points)].value) *
                          100
                        }
                      >
                        <Value style={{ fontSize: 12 }}></Value>
                      </Level>
                    </LevelContainer>
                  </SecondBoxContainer>
                </Box>
              );
            })}
        </>
      )}
    </>
  );
}

export default ListDataWinners;

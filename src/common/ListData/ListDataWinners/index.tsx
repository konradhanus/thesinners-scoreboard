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
import { LEVELS, PLACE, PLACE_AFFIX } from "./Data";
import Avatar from "../../Avatar";
import Icon from "../../PlaceIcons";
import displayIcon from "../../helpers/displayIcon";
import getLevel from "../../helpers/getLevel";

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

  if (props.players === null) {
    return "Ładowanie...";
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

              const valueLen = LEVELS.reduce(
                (total, totalOf) => (total = total + totalOf.value),
                0
              );

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
                  <div style={{
                    backgroundColor:"lime", 
                    width: 30,
                    height: 30, 
                    borderRadius: 9999, 
                    zIndex: 99, 
                    marginTop: 25, 
                    marginLeft: -20,
                    display: 'flex',
                    alignItems: 'center',
                    fontWeight: 'bold',
                    justifyContent: 'center'}}>{getLevel(player.points)}</div>
                  <SecondBoxContainer>
                    <NameWithPoints>
                      {player.name}
                      <Points>
                        <Value className="title is-6">{player.points}</Value>
                      </Points>
                    </NameWithPoints>
                    <p style={{ color: "red", textAlign: "center" }}>
                      <b>
                       {<> EXP {player.points} / {LEVELS[getLevel(player.points)].value}</>} <br></br>
                      </b>
                    </p>
                    <LevelContainer className="box">
                      {/* {player.points ===  } */}
                      <Level className="box" value={(player.points/LEVELS[getLevel(player.points)].value)*100}>
                        <Value style={{ fontSize: 12 }}>
                        </Value>
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
                  <SecondBoxContainer>
                    <NameWithPoints>
                      {player.name}
                      <Points>
                        <Value className="title is-6">{player.points}</Value>
                      </Points>
                    </NameWithPoints>
                    <LevelContainer className="box">
                      <Level className="box">
                        <Value style={{ fontSize: 12 }}>
                          {getLevel(player.points)}
                        </Value>
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

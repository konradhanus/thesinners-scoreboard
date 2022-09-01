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
import { LEVELS, PLACE } from "../ListDataWinners/Data";
import AvatarMobile from "../../Avatar";
import ModalData from "../../Modal";
import getLevel from "../../helpers/getLevel";
import { ReactElement } from "react";
import {Player} from '../../helpers/types';

export interface OthersProps {
  players: any;
  isMobile: boolean;
}

function ListDataOthers(props: OthersProps): JSX.Element {
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

  return (
    <>
      {listData
        .sort((p, m) => (p.points < m.points ? 1 : -1))
        .filter((best, index) => index > 2)
        .map((player, place) => {
          const id = place + 1;

          const EXPERIENCE = (
            <>
              {" "}
              EXP {player.points} / {LEVELS[getLevel(player.points)].value}{" "}
            </>
          );

          const POSITION =
            id === PLACE.first || id === PLACE.second || id === PLACE.third
              ? id + 3
              : id + 3;

          const LEVEL =
            (player.points / LEVELS[getLevel(player.points)].value) * 100;

          const LEVEL_MOBILE = lessPoints(getLevel(player.points));

          function lessPoints(points: number): ReactElement {
            if (player.points > 500) {
              return (
                <div style={{ fontSize: 12 }}>
                  Level {getLevel(player.points)}
                </div>
              );
            }
            return <></>;
          }

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
                  <Value className="title is-6" style={{ minWidth: 40 }}>
                    {POSITION}
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
                    exp={EXPERIENCE}
                  >
                    <LevelContainer className="box">
                      <Level className="box" value={LEVEL}>
                        <Value style={{ fontSize: 12 }}>{LEVEL_MOBILE}</Value>
                      </Level>
                    </LevelContainer>
                  </ModalData>
                  <Points>
                    <Value className="title is-6">{player.points}</Value>
                  </Points>
                </NameWithPoints>
              </SecondBoxContainer>
            </Box>
          );
        })}
    </>
  );
}

export default ListDataOthers;

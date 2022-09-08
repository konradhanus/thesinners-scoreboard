import AvatarMobile from "../../Avatar";
import ModalData from "../../Modal";

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

import { getPlayers } from "../../helpers/getPlayers";
import { ListExperience } from "../../ListExperience";
import { ListLevelMobile } from "../../ListLevelMobile";
import getLevelWidth from "../../helpers/getLevelWidth";
import getPosition from "../../helpers/getPosition";

export interface OthersProps {
  players: any;
  isMobile: boolean;
}
// TO DO REFAKTOR
function ListDataOthers(props: OthersProps): JSX.Element {
  const listData = props.players
    ? Object.keys(props.players).map(getPlayers(props))
    : [];

  return (
    <>
      {listData
        .sort((p, m) => (p.points < m.points ? 1 : -1))
        .filter((best, index) => index > 2)
        .map((player, place:number) => {
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
                    {getPosition(place)}
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
                    exp={<ListExperience player={player} />}
                  >
                    <LevelContainer className="box">
                      <Level className="box" value={getLevelWidth(player)}>
                        <Value style={{ fontSize: 12 }}>
                          <ListLevelMobile player={player} />
                        </Value>
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

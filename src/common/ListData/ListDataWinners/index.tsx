import getLevel from "../../helpers/getLevel";
import BoxContainer from "../../Box";
import FirstContainer from "../../Box/FirstBoxContainer";
import SecondContainer from "../../Box/SecondWinnersBox";
import PlayerAvatar from "../../Box/PlayerAvatar";
import { LevelInfo } from "../../../components/ScoreBoard/Styles/tableStyles";
import { getPlayers } from "../../helpers/getPlayers";

export interface ListDataWinnersProps {
  players: any;
  isMobile: boolean;
  isFirst?: boolean;
  value?: number;
}

function ListDataWinners(props: ListDataWinnersProps): JSX.Element {
  const listData = props.players
    ? Object.keys(props.players).map(getPlayers(props))
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
            .map((player, place: number) => {
              return (
                <BoxContainer key={player.name}>
                  <FirstContainer isPositionMobile={false} place={place} />
                  <PlayerAvatar isAvatarWinner={true} />
                  <LevelInfo>{getLevel(player.points)}</LevelInfo>
                  <SecondContainer
                    name={player.name}
                    points={player.points}
                    player={player}
                    size={"10pt"}
                  />
                </BoxContainer>
              );
            })}
        </>
      ) : (
        <>
          {listData
            .sort((p, m) => (p.points < m.points ? 1 : -1))
            .filter((best, index) => index < 3)
            .map((player, place: number) => {
              return (
                <BoxContainer key={player.name}>
                  <FirstContainer isPositionMobile={false} place={place} />
                  <PlayerAvatar isAvatarWinner={true} />
                  <LevelInfo>{getLevel(player.points)}</LevelInfo>
                  <SecondContainer
                    name={player.name}
                    points={player.points}
                    player={player}
                    size={"8pt"}
                  />
                </BoxContainer>
              );
            })}
        </>
      )}
    </>
  );
}

export default ListDataWinners;

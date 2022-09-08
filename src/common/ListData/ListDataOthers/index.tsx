import BoxContainer from "../../Box";
import FirstContainer from "../../Box/FirstBoxContainer";
import SecondContainer from "../../Box/SecondBoxContainer";
import PlayerAvatar from "../../Box/PlayerAvatar";
import { getPlayers } from "../../helpers/getPlayers";

export interface OthersProps {
  players: any;
  isMobile: boolean;
}

function ListDataOthers(props: OthersProps): JSX.Element {
  const listData = props.players
    ? Object.keys(props.players).map(getPlayers(props))
    : [];

  return (
    <>
      {listData
        .sort((p, m) => (p.points < m.points ? 1 : -1))
        .filter((best, index) => index > 2)
        .map((player, place: number) => {
          return (
            <BoxContainer key={player.name}>
              <FirstContainer isPositionMobile={true} place={place} />
              <PlayerAvatar isAvatarWinner={false}/>
              <SecondContainer
                name={player.name}
                place={player.place}
                points={player.points}
                player={player}
              />
            </BoxContainer>
          );
        })}
    </>
  );
}

export default ListDataOthers;

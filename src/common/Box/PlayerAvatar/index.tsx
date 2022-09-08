import AvatarWin from "../../Avatar";
import AvatarMobile from "../../Avatar";
import {
  AvatarWinners,
  Avatar,
} from "../../../components/ScoreBoard/Styles/tableStyles";

interface AvatarProps {
  isAvatarWinner: boolean;
}

export default function PlayerAvatar(props: AvatarProps) {
  return (
    <>
      {props.isAvatarWinner ? (
        <AvatarWinners>
          <AvatarWin />
        </AvatarWinners>
      ) : (
        <Avatar>
          <AvatarMobile />
        </Avatar>
      )}
    </>
  );
}

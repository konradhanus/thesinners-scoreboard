import getLevel from "./getLevel";
import { Player } from "./types";

const getLevelValue = (player: Player): JSX.Element => {
  if (player.points >= 500) {
    return <div style={{ fontSize: 12 }}>Level {getLevel(player.points)}</div>;
  }
  return <></>;
};

export default getLevelValue;

import getLevel from "../helpers/getLevel";
import { ReactElement } from "react";

export function lessPoints(player: any): ReactElement {
  if (player.points > 500) {
    return <div style={{ fontSize: 12 }}>Level {getLevel(player.points)}</div>;
  }
  return <></>;
}

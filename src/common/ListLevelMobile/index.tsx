import getLevel from "../helpers/getLevel";
import { lessPoints } from "../helpers/lessPoints";

// ADD TYPE to player
export const ListLevelMobile = (player: any) => (
  <>{lessPoints(getLevel(player.points))}</>
);

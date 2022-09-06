import getLevel from "../helpers/getLevel";
import { lessPoints } from "../helpers/lessPoints";

export const ListLevelMobile = (player: any) => (
  <>{lessPoints(getLevel(player.points))}</>
);

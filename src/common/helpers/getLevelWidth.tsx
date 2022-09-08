import getLevel from "./getLevel";
import { Player } from "./types";
import { LEVELS } from "../ListData/ListDataWinners/Data";

const getLevelWidth = (player: Player): number =>
  (player.points / LEVELS[getLevel(player.points)].value) * 100;
export default getLevelWidth;

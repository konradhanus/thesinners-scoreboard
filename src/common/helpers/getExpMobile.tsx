import { LEVELS } from "../ListData/ListDataWinners/Data";
import { Player } from "./types";
import getLevel from "../helpers/getLevel";

const getExpMobile = (player: Player) => (
  <>
    EXP {player.points} / {LEVELS[getLevel(player.points)].value}
  </>
);

export default getExpMobile;

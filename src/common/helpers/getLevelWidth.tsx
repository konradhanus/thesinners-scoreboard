import getLevel from "./getLevel";
import { LEVELS } from "../ListData/ListDataWinners/Data";

const getLevelWidth = (player:any):number => (player.points / LEVELS[getLevel(player.points)].value) * 100;
export default getLevelWidth;
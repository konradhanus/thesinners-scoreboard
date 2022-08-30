import { LEVELS } from "../ListData/ListDataWinners/Data";

function getLevel(points: number) {
  for (let i = 0; i <= LEVELS.length; i++) {
    if (LEVELS[i + 1].value >= points) {
      return "Level " + LEVELS[i].id;
    }
  }
}

export default getLevel;

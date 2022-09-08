import { LEVELS } from "../ListData/ListDataWinners/Data";

function getLevel(points: number | undefined): number {
  if (points === undefined) {
    return 0;
  }

  for (let i = 0; i <= LEVELS.length; i++) {
    if (i !== 100) {
      if (LEVELS[i + 1].value > points) {
        return LEVELS[i].id;
      }
    }
  }
  return 0;
}

export default getLevel;

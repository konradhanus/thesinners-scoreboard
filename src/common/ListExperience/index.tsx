import getLevel from "../helpers/getLevel";
import { LEVELS } from "../ListData/ListDataWinners/Data";

// wersja mobilna - błąd z value
export const ListExperience = (player: any) => (
  <>
    {" "}
    EXP {player.points} / {LEVELS[getLevel(player.points)].value}{" "}
  </>
);

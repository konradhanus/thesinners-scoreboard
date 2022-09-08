import { PLACE, PLACE_AFFIX } from "../ListData/ListDataWinners/Data";

const getPosition = (place: number) => {
  const id = place + 1;
  return id === PLACE.first || id === PLACE.second || id === PLACE.third
    ? `${id}${PLACE_AFFIX[id - 1]}`
    : id;
};

export default getPosition;

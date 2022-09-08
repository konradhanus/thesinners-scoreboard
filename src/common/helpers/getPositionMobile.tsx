import { PLACE } from "../ListData/ListDataWinners/Data";

const getPositionMobile: Function = (place: number) => {
  const id = place + 1;
  return id === PLACE.first || id === PLACE.second || id === PLACE.third
    ? id + 3
    : id + 3;
};

export default getPositionMobile;

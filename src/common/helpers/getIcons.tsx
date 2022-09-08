import Icon from "../PlaceIcons";
import displayIcon from "../helpers/displayIcon";
import { IconType } from "../helpers/types";
import { ImageData } from "../../components/ItemList/List/listData";
import { PLACE } from "../ListData/ListDataWinners/Data";

const getIcons = (place: number) => {
  const id = place + 1;

  if (id === PLACE.first) {
    return (
      <Icon
        src={displayIcon(IconType.FirstPlace)}
        alt={ImageData.alt_First_Place}
      />
    );
  }
  if (id === PLACE.second) {
    return (
      <Icon
        src={displayIcon(IconType.SecondPlace)}
        alt={ImageData.alt_Second_Place}
      />
    );
  }
  if (id === PLACE.third) {
    return (
      <Icon
        src={displayIcon(IconType.ThirdPlace)}
        alt={ImageData.alt_Third_Place}
      />
    );
  }
};

export default getIcons;

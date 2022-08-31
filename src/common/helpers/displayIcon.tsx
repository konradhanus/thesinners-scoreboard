import firstPlaceIcon from "../../assets/firstPlaceIcon.png";
import secondPlaceIcon from "../../assets/secondPlaceIcon.png";
import thirdPlaceIcon from "../../assets/thirdPlaceIcon.png";
import { IconType } from "./types";

const displayIcon = (icon: IconType):string => {
  switch (icon) {
    case IconType.FirstPlace:
      return firstPlaceIcon;
    case IconType.SecondPlace:
      return secondPlaceIcon;
    case IconType.ThirdPlace:
      return thirdPlaceIcon;
  }
};

export default displayIcon;

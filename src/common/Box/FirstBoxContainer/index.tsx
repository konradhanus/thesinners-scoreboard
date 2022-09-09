import getPositionMobile from "../../helpers/getPositionMobile";
import {
  FirstBoxContainer,
  IconWithPlace,
  Value,
} from "../../../components/ScoreBoard/Styles/tableStyles";
import getPosition from "../../helpers/getPosition";
import getIcons from "../../helpers/getIcons";

interface FirstContainerProps {
  place: number;
  isPositionMobile: boolean;
}

export default function FirstContainer(props: FirstContainerProps) {
  return (
    <FirstBoxContainer>
      {props.isPositionMobile ? (
        <IconWithPlace>
          <Value className="title is-6" style={{ minWidth: 40, fontSize: 18 }}>
            {getPositionMobile(props.place)}
          </Value>
        </IconWithPlace>
      ) : (
        <IconWithPlace>
          {getIcons(props.place)}
          <Value className="title is-4" style={{ minWidth: 40 }}>
            {getPosition(props.place)}
          </Value>
        </IconWithPlace>
      )}
    </FirstBoxContainer>
  );
}

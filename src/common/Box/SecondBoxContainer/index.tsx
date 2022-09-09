import ModalData from "../../Modal";
import getLevelWidth from "../../helpers/getLevelWidth";
import getExpMobile from "../../helpers/getExpMobile";
import getLevelValue from "../../helpers/getLevelValue";
import {
  Value,
  NameWithPoints,
  Points,
  Level,
  LevelContainer,
  SecondBoxContainer,
} from "../../../components/ScoreBoard/Styles/tableStyles";
import { Player } from "../../helpers/types";

interface SecondContainerProps {
  name: string;
  place: number;
  points: number;
  player: Player;
}

export default function SecondContainer(props: SecondContainerProps) {
  return (
    <SecondBoxContainer>
      <NameWithPoints>
        {props.name}
        <Points>
          <Value className="title is-6">{props.points}</Value>
        </Points>
      </NameWithPoints>
    </SecondBoxContainer>
  );
}

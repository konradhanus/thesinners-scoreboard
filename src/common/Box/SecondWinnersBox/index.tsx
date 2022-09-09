import getLevelValue from "../../helpers/getLevelValue";
import getExpMobile from "../../helpers/getExpMobile";
import getLevelWidth from "../../helpers/getLevelWidth";
import {
  Value,
  SecondBoxContainer,
  NameWithPoints,
  Experience,
  Points,
  LevelContainer,
  Level,
} from "../../../components/ScoreBoard/Styles/tableStyles";
import { Player } from "../../helpers/types";

interface SecondWinnersBoxProps {
  name: string;
  points: number;
  player: Player;
  size: string;
}

export default function SecondContainer(props: SecondWinnersBoxProps) {
  return (
    <SecondBoxContainer>
      <NameWithPoints>
        {props.name}
        <Points>
          <Value className="title is-4">{props.points}</Value>
        </Points>
      </NameWithPoints>
      {/* <Experience size={props.size}>{getExpMobile(props.player)}</Experience> */}
      {/* <LevelContainer className="box">
        <Level className="box" value={getLevelWidth(props.player)}>
          <Value style={{ fontSize: 12 }}>{getLevelValue(props.player)}</Value>
        </Level>
      </LevelContainer> */}
    </SecondBoxContainer>
  );
}

import { ListWrapper } from "../../components/ScoreBoard/Styles/tableStyles";
import ListHeader from "../ListHeader";
import RankingContainer from "../Ranking";

export default function ListWeb(props: any) {
  return (
    <>
      {props.isListWeb && (
        <ListWrapper>
          <ListHeader />
          <RankingContainer isMobileLevel={false} />
        </ListWrapper>
      )}
      {props.isListMobile && (
        <>
          <ListWrapper>
            <ListHeader />
            <RankingContainer isMobileLevel={true} />
          </ListWrapper>
        </>
      )}
    </>
  );
}

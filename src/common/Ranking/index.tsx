import {
  Ranking,
  Table,
  Title,
} from "../../components/ScoreBoard/Styles/tableStyles";
import ListDataWinners from "../ListData/ListDataWinners";
import ListDataOthers from "../ListData/ListDataOthers";
import ListDataWithout from "../ListData/ListDataWithout";
import {
  listData,
  listDataOthers,
} from "../../components/ItemList/List/listData";

const RankingContainer = (props: any) => (
  <>
    {props.isMobileLevel ? (
      <Ranking
        data-aos="fade-left"
        data-aos-anchor="#example-anchor"
        data-aos-offset="500"
        data-aos-duration="500"
      >
        <Table className="columns is-variable is-8-mobile is-0-tablet is-3-desktop is-8-widescreen is-2-fullhd">
          <Title>
            <h4 className="title is-4">Dog Ranking</h4>
          </Title>
          {listData.map((winnerMobile) => (
            <ListDataWinners key={winnerMobile.name} {...winnerMobile} />
          ))}
          {listDataOthers.map((otherMobile) => (
            <ListDataWithout key={otherMobile.name} {...otherMobile} />
          ))}
        </Table>
      </Ranking>
    ) : (
      <Ranking
        data-aos="fade-left"
        data-aos-anchor="#example-anchor"
        data-aos-offset="500"
        data-aos-duration="500"
      >
        <Table className="columns is-variable is-8-mobile is-0-tablet is-3-desktop is-8-widescreen is-2-fullhd">
          <Title>
            <h4 className="title is-4">Dog Ranking</h4>
          </Title>
          {listData.map((winner) => (
            <ListDataWinners key={winner.name} {...winner} />
          ))}
          {listDataOthers.map((other) => (
            <ListDataOthers key={other.name} {...other} />
          ))}
        </Table>
      </Ranking>
    )}
  </>
);

export default RankingContainer;

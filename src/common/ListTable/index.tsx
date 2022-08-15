import { HeaderData } from "../../components/ItemList/List/listData";
import {
  Ranking,
  Table,
  Title,
  TableTitle,
} from "../../components/ScoreBoard/Styles/tableStyles";

export default function ListTable(props: any) {
  return (
    <Ranking
      data-aos="fade-left"
      data-aos-anchor="#example-anchor"
      data-aos-offset="500"
      data-aos-duration="500"
    >
      <Table className="columns is-variable is-8-mobile is-0-tablet is-3-desktop is-8-widescreen is-2-fullhd">
        <Title>
          <TableTitle className="title is-4">
            {HeaderData.tableTitle}
          </TableTitle>
        </Title>
        {props.children}
      </Table>
    </Ranking>
  );
}

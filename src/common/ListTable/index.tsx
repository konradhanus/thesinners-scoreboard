import { HeaderData } from "../../components/ItemList/List/listData";
import {
  Ranking,
  Table,
  Title,
  TableTitle,
} from "../../components/ScoreBoard/Styles/tableStyles";

export interface ListTableProps {
  children: JSX.Element[] | JSX.Element;
}

export default function ListTable(props: ListTableProps) : JSX.Element {
  return (
    <Ranking>
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

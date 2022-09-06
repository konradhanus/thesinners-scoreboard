import ListTable from "..";
import {
  Ranking,
  Table,
  Title,
  TableTitle,
} from "../../../components/ScoreBoard/Styles/tableStyles";
import Enzyme, { shallow, ShallowWrapper } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

const ClassTable: string =
  "columns is-variable is-8-mobile is-0-tablet is-3-desktop is-8-widescreen is-2-fullhd";
const ClassTableTitle: string = "title is-4";

const Props: string[] = [
  "Data for Ranking:",
  "Class for Table:",
  "Data for Title:",
  "Class for TableTitle:",
];

describe("Test dla ListTable", () => {
  test("Czy komponent posiada to co powinien:", () => {
    const ListTableWrapper: ShallowWrapper = shallow(
      <ListTable>
        <></>
      </ListTable>
    );
    expect(ListTableWrapper.find(Ranking)).toHaveLength(1);
    expect(ListTableWrapper.find(Table).props().className).toEqual(ClassTable);
    expect(ListTableWrapper.find(Title)).toHaveLength(1);
    expect(ListTableWrapper.find(TableTitle).props().className).toEqual(
      ClassTableTitle
    );

    console.log(Props[0], ListTableWrapper.find(Ranking).props());
    console.log(Props[1], ListTableWrapper.find(Table).props().className);
    console.log(Props[2], ListTableWrapper.find(Title).props());
    console.log(Props[3], ListTableWrapper.find(TableTitle).props().className);
  });
});

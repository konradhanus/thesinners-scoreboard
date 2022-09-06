import ListHeader from "..";
import {
  Header,
  Content,
  //   Text,
} from "../../../components/ScoreBoard/Styles/tableStyles";
import Button from "../../../components/Buttons/HeaderButton";
import Enzyme, { shallow, ShallowWrapper } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

const HeaderClass: string = "hero";
const ContentClass: string = "hero-body";
const ButtonValue: string = "Get Started!";

const Props: string[] = [
  "Class for Header:",
  "Class for Content:",
  "Value for Button:",
];

describe("Test dla ListHeader", () => {
  test("Czy komponent posiada to co powinien:", () => {
    const ListHeaderWrapper: ShallowWrapper = shallow(<ListHeader />);
    expect(ListHeaderWrapper.find(Header).props().className).toEqual(
      HeaderClass
    );
    expect(ListHeaderWrapper.find(Content).props().className).toEqual(
      ContentClass
    );

    // issue with two the same components:

    // expect(ListHeaderWrapper.find(Text).props().className).toEqual('title');
    // expect(ListHeaderWrapper.find(Text).props().className).toEqual('subtitle');

    expect(ListHeaderWrapper.find(Button).props().value).toEqual(ButtonValue);

    console.log(Props[0], ListHeaderWrapper.find(Header).props().className);
    console.log(Props[1], ListHeaderWrapper.find(Content).props().className);
    console.log(Props[2], ListHeaderWrapper.find(Button).props().value);
  });
});

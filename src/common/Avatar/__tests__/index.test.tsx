import Avatar from '../';
import Enzyme, { shallow, ShallowWrapper } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe("Test dla Avatar", () => {
 test("Czy komponent posiada to co powinin", () => {
    const AvatarWapper: ShallowWrapper = shallow(<Avatar />)
    expect(AvatarWapper.find("figure.image")).toHaveLength(1);
    expect(AvatarWapper.find("img.is-rounded")).toHaveLength(1);
    expect(AvatarWapper.find('img').props().alt).toEqual('avatar');
  });
});

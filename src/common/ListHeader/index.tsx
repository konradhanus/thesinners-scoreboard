import {
  Header,
  Content,
  Text,
} from "../../components/ScoreBoard/Styles/tableStyles";
import { HeaderData } from "../../components/ItemList/List/listData";
import Button from "../../components/Buttons/HeaderButton";

export default function ListHeader(): JSX.Element {
  return (
    <Header className="hero" data-aos="fade-right">
      <Content className="hero-body">
        <Text className="title">{HeaderData.title}</Text>
        <Text className="subtitle">{HeaderData.subTitle}</Text>
      </Content>
      <Button value="Get Started!" />
    </Header>
  );
}

import {
  Header,
  Content,
  Text,
  Button,
  Link,
} from "../../components/ScoreBoard/Styles/tableStyles";

export default function ListHeader() {
  return (
    <>
      <Header className="hero" data-aos="fade-right">
        <Content className="hero-body">
          <Text className="title">Welcome on Dog Ranking App</Text>
          <Text className="subtitle">
            Fight against other players and earn points to win.
          </Text>
        </Content>
        <Button className="button is-danger">
          <Link
            href="https://psiaapka.web.app"
            rel="noreferrer"
            target="_blank"
          >
            Get Started!
          </Link>
        </Button>
      </Header>
    </>
  );
}

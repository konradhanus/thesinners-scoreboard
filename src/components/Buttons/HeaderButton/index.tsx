import {
  HeaderButton,
  Link,
} from "../../../components/ScoreBoard/Styles/tableStyles";

interface ButtonProps {
  value: string;
}

const Button = (props: ButtonProps) => {
  return (
    <HeaderButton className="button is-danger">
      <Link href="https://psiaapka.web.app" rel="noreferrer" target="_blank">
        {props.value}
      </Link>
    </HeaderButton>
  );
};

export default Button;

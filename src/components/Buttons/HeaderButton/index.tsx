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
      <Link href="http://thesinners.reactblog.pl" target="_blank">
        {props.value}
      </Link>
    </HeaderButton>
  );
};

export default Button;

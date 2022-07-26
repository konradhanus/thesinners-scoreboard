type OnClick = () => void;

interface ButtonProps {
  onClick: OnClick;
}

const Button = (props: ButtonProps) => {
  return (
    <div>
      <button className="button is-success is-outlined" onClick={props.onClick}>
        Outlined
      </button>
    </div>
  );
};

export default Button;

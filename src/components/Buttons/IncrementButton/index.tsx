import * as React from "react";

type OnClick = () => void;

interface ButtonProps {
  onClick: OnClick;
  value: string;
}

const IncrementButton = (props: ButtonProps) => {
  return (
    <div>
      <button className="button is-danger is-outlined" onClick={props.onClick}>
        <React.Fragment>
          <div>
            <strong>{props.value}</strong>
          </div>
        </React.Fragment>
      </button>
    </div>
  );
};

export default IncrementButton;

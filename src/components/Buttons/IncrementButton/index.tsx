import React from "react";

interface ButtonProps {
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
  value: string;
}

const IncrementButton = (props: ButtonProps) => {
  return (
    <div>
      <button className="button is-danger is-outlined" onClick={props.onClick}>
          <div>
            <strong>{props.value}</strong>
          </div>
      </button>
    </div>
  );
};

export default IncrementButton;

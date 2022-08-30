import React from 'react';

interface ButtonDataProps {
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
  value: string;
}

const ButtonData = (props: ButtonDataProps) => {
  return (
    <div>
      <button className="button is-success" onClick={props.onClick}>
        <div>
          <strong>{props.value}</strong>
        </div>
      </button>
    </div>
  );
};

export default ButtonData;

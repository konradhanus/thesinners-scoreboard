import * as React from "react";
import { connect } from "react-redux";
import { actionCreators } from "./action";

type OnClick = () => void;

interface ButtonProps {
  onClick: OnClick;
  change: any;
  checkThis: any;
  value: string;
}

const Button = (props: ButtonProps) => {
  return (
    <div>
      <button className="button is-success is-outlined" onClick={props.onClick}>
        <React.Fragment>
          <div>
            <strong>{props.value}</strong>
          </div>
        </React.Fragment>
      </button>
    </div>
  );
};

export default connect(
  (store: any) => ({
    change: store.change,
  }),
  actionCreators
)(Button);

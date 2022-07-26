import React, { useState } from "react";
import "./style.css";
import Button from "./Button";
import { connect } from "react-redux";
import { actionCreators } from "./action";
import { scoreData } from "./scoreData";
// import ChangeItem from "../Change/index";

function ScoreBoard(props) {
  const [count, setCount] = useState(0);

  // const handle = () => {
  //   setName("Alicja");
  // }

  const onClicked = (item) => {
    props.checkThis(item);
  };

  console.log(onClicked, "klik");

  return (
    <div style={{ textAlign: "center", marginTop: 20 }}>
      <h3 className="title is-3">{count}</h3>
      <Button onClick={() => setCount(count + 1)} />
      {/* <Button onClick={()=>onClicked(item)}/> */}

      {scoreData.map((item, key) => {
        return (
          <React.Fragment key={key}>
            <div className="content is-normal">
              <h1>{item.title}</h1>
              <Button onClick={() => onClicked(item)} />
              {props.change === item.text && (
                <article className="message is-success">
                  <div className="message-header">
                    <p>Success</p>
                    <button className="delete" aria-label="delete"></button>
                  </div>
                  <div className="message-body">
                    {" "}
                    <strong>Super Działa</strong>
                  </div>
                </article>
              )}
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
}

export default connect(
  (store) => ({
    change: store.change,
  }),
  actionCreators
)(ScoreBoard);

import React from "react";
import './style.css';
import Button from "./Button";
import { connect } from "react-redux";
import { actionCreators } from "./action";
import { scoreData } from "./scoreData";

function ScoreBoard(props: any) {

  const onClicked = (item: void) => {
    props.checkThis(item)
  }

  console.log(onClicked, "klik")

  return (
    <div style={{ textAlign: "center", marginTop: 20}}>
      <h3 className="title is-3">Siema</h3>
      <Button onClick={onClicked}/>
      {scoreData.map((item, key) => {
        return (
          <React.Fragment key={key}>
            <div className="content is-normal">
            <h1>{item.title}</h1>
            
            <p>{item.text}</p>
            </div>
            
          </React.Fragment>
        )
      })}
    </div>
  );
}

export default connect(null, actionCreators)(ScoreBoard);

import React from "react";
import './style.css';
import Button from "./Button";
import { connect } from "react-redux";
import { actionCreators } from "./action";
import { scoreData } from "./scoreData";

function ScoreBoard(props: any) {

  const onClicked = (item: any) => {
    props.checkThis(item)
  }

  console.log(onClicked, "klik")

  return (
    <div style={{ textAlign: "center", marginTop: 20}}>
      <h3 className="title is-3">Siema</h3>
      {/* <Button onClick={()=>onClicked(item)}/> */}
      {scoreData.map((item, key) => {
        return (
          <React.Fragment key={key}>
            <div className="content is-normal">
            
            <h1>{item.title}</h1>
            <Button onClick={()=>onClicked(item)}/>
            <p>{item.text}</p>
            </div>
            {props.change === item.title && (
              <div>
                <p>witam</p>
              </div>
            )}
            
          </React.Fragment>
        )
      })}
    </div>
  );
}

export default connect((param, store: any) => ({
  change: store.change
}), actionCreators)(ScoreBoard);

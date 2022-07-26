import React, { useState } from "react";
import "./style.css";
import Button from "./Button";
import { connect } from "react-redux";
import { actionCreators } from "./action";
import { scoreData } from "./scoreData";
import styled from 'styled-components';
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

  const Wrapper = styled.div`
  display: flex;
  background: papayawhip;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 4em;
  `;

  const Increment = styled.div`
  background: papayawhip;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4em;
  `;

  const MessageContainer = styled.div`
  display: flex;
  padding: 4em;
  justify-content: center;
  align-items: center;
  `;


  return (
    <Wrapper>
      <Increment>
      <h3 className="title is-3">{count}</h3>
      <Button onClick={() => setCount(count + 1)} />
      {/* <Button onClick={()=>onClicked(item)}/> */}
      </Increment>
      {scoreData.map((item, key) => {
        return (
          <React.Fragment key={key}>
            <MessageContainer>
              <h1>{item.title}</h1>
              <Button onClick={() => onClicked(item)} />
              {props.change === item.text ? (
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
              ) : (
                (
                  <article className="message is-danger">
                    <div className="message-header">
                      <p>Error</p>
                      <button className="delete" aria-label="delete"></button>
                    </div>
                    <div className="message-body">
                      {" "}
                      <strong>Niestety error...</strong>
                    </div>
                  </article>
                )
              )}
              
              </MessageContainer>
          </React.Fragment>
        );
      })}
    </Wrapper>
  );
}

export default connect(
  (store) => ({
    change: store.change,
  }),
  actionCreators
)(ScoreBoard);

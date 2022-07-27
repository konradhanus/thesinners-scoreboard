import React, { useState } from "react";
import "./style.css";
import { connect } from "react-redux";
import { actionCreators } from "./action";
import { scoreData } from "./scoreData";
import ScoreTable from "./Table";
import Button from "./Button";
import IncrementButton from "../IncrementButton";
import { getDatabase, set, ref, get } from "firebase/database";
import uuid from "react-uuid";
import { app as firebaseApp } from "../../firebase";
import {
  TableContainer,
  Wrapper,
  Increment,
  MessageContainer,
  StatusContainer,
} from "./style";
import List from "../ItemList/List";

function ScoreBoard(props) {
  const [count, setCount] = useState(0);

  const onClicked = (item) => {
    props.checkThis(item);
  };

  console.log("Status: ", props.change);
  console.log("Counter: ", count);

  const database = getDatabase(firebaseApp);

  function setData() {
    const uuidKey = uuid();

    set(ref(database, "public/" + "players/" + "/" + uuidKey), {
      player: {
        name: "Alicja",
        age: 22,
        description: "Hi, i like this",
        points: props.change,
      },
    })
      .then(() => {
        alert("Twoje dane zostały zapisane");
      })
      .catch((error) => {
        alert(error + "Nie zapisało się");
      });
  }

  // function getDatabase() {
  //   const data = "https://rankingdog-default-rtdb.firebaseio.com/public/data.json?print=pretty"
  // }

  function getData() {
    get(ref(database, "public")).then((snapshot) => {
      const players = [];

      snapshot.forEach((childSnapshot) => {
        players.push(childSnapshot.val());
      });

      alert("Gracze");

      console.log("gracze:", players, snapshot);

      return <div>{players}</div>;
    });
  }
  return (
    <TableContainer>
      <h1>ScoreBoard</h1>
      <ScoreTable />
      <Wrapper>
        <Increment>
          <IncrementButton
            value="Zwiększ o 1"
            onClick={() => setCount(count + 1)}
          />
          <h3
            style={{ marginTop: 60, padding: 40, textAlign: "center" }}
            className="title is-3"
          >
            Twoja liczba:
            <br></br>
            {count}
          </h3>
          <IncrementButton
            value="Zmniejsz o 1"
            onClick={() => setCount(count - 1)}
          />
          <IncrementButton value="Zapisz" onClick={() => setData()} />
          <IncrementButton value="Odczytaj" onClick={() => getData()} />
        </Increment>
        <MessageContainer>
          {scoreData.map((item, key) => {
            return (
              <React.Fragment key={key}>
                <StatusContainer>
                  <Button
                    value={item.value}
                    checkThis
                    change
                    onClick={() => onClicked(item)}
                  />
                </StatusContainer>
              </React.Fragment>
            );
          })}
        </MessageContainer>
      </Wrapper>
      {/* <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "center",
          alignContent: "center",
          backgroundColor: "gray",
          width: "20%"
        }}
      >
        <div style={{ width: "20%", height: "50%", backgroundColor: "red", textAlign: "center", margin: 20}}>
          <p>siema</p>
        </div>
        <div style={{ width: "20%", height: "50%", backgroundColor: "red", textAlign: "center", margin: 20}}>
          <p>siema</p>
        </div>
        <div style={{ width: "20%", height: "50%", backgroundColor: "red", textAlign: "center", margin: 20}}>
          <p>siema</p>
        </div>
        <div style={{ width: "20%", height: "50%", backgroundColor: "red", textAlign: "center", margin: 20}}>
          <p>siema</p>
        </div>
        <div style={{ width: "20%", height: "50%", backgroundColor: "red", textAlign: "center", margin: 20}}>
          <p>siema</p>
        </div>
      </div> */}
      <List />
    </TableContainer>
  );
}

export default connect(
  (store) => ({
    change: store.change,
  }),
  actionCreators
)(ScoreBoard);

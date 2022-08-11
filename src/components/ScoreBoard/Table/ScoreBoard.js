import React, { useState } from "react";
import { connect } from "react-redux";
import { actionCreators } from "../../Buttons/Button/action";
import { scoreData } from "../Data/scoreData";
import ScoreTable from ".";
import Button from "../../Buttons/Button";
import IncrementButton from "../../Buttons/IncrementButton";
import { getDatabase, set, ref, get } from "firebase/database";
import uuid from "react-uuid";
import { app as firebaseApp } from "../../../firebase";
// import {
//   TableContainer,
//   Wrapper,
//   Increment,
//   MessageContainer,
//   StatusContainer,
// } from "./style";
import {
  TableContainer,
  IncrementButtons,
  DataButtons,
  StoreButtons,
  Wrapper,
} from "../Styles/tableStyles";
import List from "../../ItemList/List/List";

function ScoreBoard(props) {
  const [count, setCount] = useState(0);
  const [players, setPlayers] = useState([]);

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

      console.log("Gracze:", players, snapshot);
      setPlayers(players[0]);

      return <div>{players}</div>;
    });
  }

  const heightScreen = window.innerHeight;
  return (
    <>
      <Wrapper>
        {/* <TableContainer> */}
        {
          // tabelka z danymi:
          /* <h1>ScoreBoard</h1>
      <ScoreTable players={players} /> */
        }
        <List />
        {/* <IncrementButtons>
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
        </IncrementButtons>
        <DataButtons>
          <IncrementButton value="Zapisz" onClick={() => setData()} />
          <IncrementButton value="Odczytaj" onClick={() => getData()} />
        </DataButtons>
        <StoreButtons>
          {scoreData.map((item, key) => {
            return (
              <React.Fragment key={key}>
                <Button
                  value={item.value}
                  checkThis
                  change
                  onClick={() => onClicked(item)}
                />
              </React.Fragment>
            );
          })}
        </StoreButtons> */}
        {/* </TableContainer> */}
      </Wrapper>
    </>
  );
}

export default connect(
  (store) => ({
    change: store.change,
  }),
  actionCreators
)(ScoreBoard);

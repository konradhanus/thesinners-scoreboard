import React, { useState } from "react";
import "./style.css";
import { connect } from "react-redux";
import { actionCreators } from "./action";
import { scoreData } from "./scoreData";
import ScoreTable from "./Table";
import Button from "./Button";
import IncrementButton from "../IncrementButton";
import { getDatabase, ref, set } from "firebase/database";
import { app as firebaseApp } from '../../firebase';
import {
  TableContainer,
  Wrapper,
  Increment,
  MessageContainer,
  StatusContainer,
} from "./style";


function ScoreBoard(props) {
  const [count, setCount] = useState(0);

  const onClicked = (item) => {
    props.checkThis(item);
  };

  console.log("Status: ", props.change);
  console.log("Counter: ", count);

// Create a reference to the file we want to download
// 
const database = getDatabase(firebaseApp);

function setData() {

 set(ref(database, 'public/'), {
  players: {
    name: "Alicja",
    age: 22,
    description: "Hi, i like this",
    points: props.change
  },
 }).then(() => {
  alert("Twoje dane zostały zapisane")
 })
 .catch((error) => {
  alert(error + "Nie zapisało się")
 });

}


// Get the download URL
// getDownloadURL(starsRef)
//   .then((url) => {
//     // Insert url into an <img> tag to "download"
//   })
//   .catch((error) => {
//     alert(error)
//   });
  
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
          <h3 style={{ marginTop: 60, padding: 40, textAlign: "center" }} className="title is-3">
            Twoja liczba: 
            <br></br>
            {count}
          </h3>
          <IncrementButton
            value="Zmniejsz o 1"
            onClick={() => setCount(count - 1)}
          />
          <IncrementButton
            value="Zapisz"
            onClick={() => setData()}
          />
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
    </TableContainer>
  );
}

export default connect(
  (store) => ({
    change: store.change,
  }),
  actionCreators
)(ScoreBoard);

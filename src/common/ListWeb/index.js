import { useState, useEffect } from "react";
import {
  ListWrapper,
  Buttons,
} from "../../components/ScoreBoard/Styles/tableStyles";
import ListHeader from "../ListHeader";
import ListDataWinners from "../ListData/ListDataWinners";
import { getDatabase, ref, get } from "firebase/database";
import { app as firebaseApp } from "../../firebase";
import ListTable from "../ListTable";
import ListDataOthers from "../ListData/ListDataOthers";
// import setData from "../helpers/setData";

export default function ListWeb(props) {
  const database = getDatabase(firebaseApp);

  const [players, setPlayers] = useState([]);

  function getData() {
    get(ref(database, "public")).then((snapshot) => {
      const players = [];

      snapshot.forEach((childSnapshot) => {
        players.push(childSnapshot.val());
      });
      setPlayers(players[0]);
    });
  }

  useEffect(() => {
    getData();
  });

  return (
    <>
      {props.isListWeb && (
        <ListWrapper>
          <ListHeader />
          <Buttons data-aos="fade-left">
            {/* <ButtonData value="Zapisz" onClick={setData} /> */}
          </Buttons>
          <ListTable>
            <ListDataWinners isMobile={true} players={players} />
          </ListTable>
        </ListWrapper>
      )}
      {props.isListMobile && (
        <ListWrapper>
          <ListHeader />
          <Buttons data-aos="fade-left">
            {/* <ButtonData value="Zapisz" onClick={setData} /> */}
          </Buttons>
          <ListTable>
            <ListDataWinners isMobile={false} players={players} />
            <ListDataOthers isMobile={true} players={players} />
          </ListTable>
        </ListWrapper>
      )}
    </>
  );
}

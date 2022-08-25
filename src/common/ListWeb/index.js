import { useState } from "react";
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
import ButtonData from "../../components/Buttons/ButtonData";

export default function ListWeb(props) {
  const database = getDatabase(firebaseApp);

  const [players, setPlayers] = useState([]);

  function getData() {
    get(ref(database, "public")).then((snapshot) => {
      const players = [];

      snapshot.forEach((childSnapshot) => {
        players.push(childSnapshot.val());
      });

      // alert("Gracze");

      console.log("Gracze:", players, snapshot);
      // console.log(setData);
      setPlayers(players[0]);
    });
  }

  return (
    <>
      {props.isListWeb && (
        <ListWrapper>
          <ListHeader />
          <Buttons data-aos="fade-left">
            {/* <ButtonData value="Zapisz" onClick={setData} /> */}
            <ButtonData value="Pokaż Graczy" onClick={getData} />
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
            <ButtonData value="Pokaż Graczy" onClick={getData} />
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

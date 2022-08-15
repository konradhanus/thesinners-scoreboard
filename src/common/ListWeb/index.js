import { useEffect, useState } from "react";
import { ListWrapper } from "../../components/ScoreBoard/Styles/tableStyles";
import ListHeader from "../ListHeader";
import RankingContainer from "../Ranking";
import ListDataWinners from "../ListData/ListDataWinners";
import { getDatabase, set, ref, get } from "firebase/database";
import { app as firebaseApp } from "../../firebase";
import IncrementButton from "../../components/Buttons/IncrementButton";
import ListTable from "../ListTable";
import ListDataOthers from "../ListData/ListDataOthers";

export default function ListWeb(props) {

  const database = getDatabase(firebaseApp);

  const [players, setPlayers] = useState([]);

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

  return (
    <>
      {props.isListWeb && (
        <ListWrapper>
          <ListHeader />
          <ListTable>
            <ListDataWinners isTelefon={true} players={players}/>
          </ListTable>
          <IncrementButton value="Odczytaj" onClick={() => getData()} />
          {/* <RankingContainer isMobileLevel={false} /> */}
        </ListWrapper>
      )}
      {props.isListMobile && (
        <ListWrapper>
          <ListHeader />
          <ListTable>
            <ListDataWinners isTelefon={false} players={players}/>
            <ListDataOthers isTelefon={true} players={players}/>
          </ListTable>
          <IncrementButton value="Odczytaj" onClick={() => getData()} />
          {/* <RankingContainer isMobileLevel={false} /> */}
        </ListWrapper>
      )}
    </>
  );
}

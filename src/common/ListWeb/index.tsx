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
import { Player } from '../helpers/types';
interface ListProps {
  isListWeb: boolean;
  isListMobile: boolean;
}

export default function ListWeb(props: ListProps): JSX.Element {
  const database = getDatabase(firebaseApp);

  const [players, setPlayers] = useState<Player>();

  function getData() {
    get(ref(database, "public")).then((snapshot) => {
      const players: Player[] = [];

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
          <ListTable>
            <ListDataWinners isMobile={true} players={players} />
          </ListTable>
        </ListWrapper>
      )}
      {props.isListMobile && (
        <ListWrapper>
          <ListHeader />
          <Buttons data-aos="fade-left">
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

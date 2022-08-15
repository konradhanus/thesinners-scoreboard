import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ListWeb from "../../../common/ListWeb/index";
import { getDatabase, set, ref, get } from "firebase/database";
import { app as firebaseApp } from "../../../firebase";
import IncrementButton from "../../Buttons/IncrementButton";

export default function ItemList() {
  // const date = new Date().toLocaleTimeString();

  const database = getDatabase(firebaseApp);

  const [players, setPlayers] = useState([]);
  const [size, setSize] = useState({
    w: window.innerWidth,
    h: window.innerHeight,
  });
  const updateSize = () =>
    setSize({
      w: window.innerWidth,
      h: window.innerHeight,
    });

  useEffect(() => {
    window.onresize = updateSize;
    AOS.init({
      duration: 2000,
    });
    AOS.refresh();
  }, []);

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

  // console.log("Width is:", size.w);

  if (size.w < 426) {
    return <><ListWeb players={players} isListMobile={true} />
   
    </>
    ;
  }

  return <><ListWeb isListWeb={true} />
  </>
  ;
}

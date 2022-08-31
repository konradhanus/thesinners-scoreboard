import { getDatabase, set, ref } from "firebase/database";
// @ts-ignore
import uuid from "react-uuid";
import { app as firebaseApp } from "../../firebase";

const database = getDatabase(firebaseApp);

function setData(): void {
  const uuidKey = uuid();

  set(ref(database, "public/" + "players/" + "/" + uuidKey), {
    player: {
      place: 0,
      avatar: "avatar",
      name: "unknown",
      level: "level",
      points: 0,
      // points: props.change,
    },
  })
    .then(() => {
      alert("Twoje dane zostały zapisane");
    })
    .catch((error) => {
      alert(error + "Nie zapisało się");
    });
}

export default setData;

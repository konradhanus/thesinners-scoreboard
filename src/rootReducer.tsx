import { combineReducers } from "redux";
import changeValueReducer from "./components/ScoreBoard/reducer";

export default combineReducers({
  change: changeValueReducer,
});

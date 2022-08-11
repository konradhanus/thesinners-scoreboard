import { combineReducers } from "redux";
import changeValueReducer from "./components/Buttons/Button/reducer";

export default combineReducers({
  change: changeValueReducer,
});

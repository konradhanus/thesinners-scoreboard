import { CHANGE_VALUE } from "./action";

const initialState = "Brak Informacji";
export function changeValueReducer(state = initialState, action: any) {
  switch (action.type) {
    case CHANGE_VALUE:
      return action.payload.points;

    default:
      return state;
  }
}
export default changeValueReducer;

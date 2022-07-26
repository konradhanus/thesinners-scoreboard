import { DZIAŁA_TO } from "./action";
import { USTAW_NA } from "./Set/action";

const firststate = "10";

export function changeValueReducer(state = firststate, action: any) {
  switch (action.type) {

    case USTAW_NA:
      return action.payload;

    case DZIAŁA_TO:
      return [action.payload.text];

    default:
      return state;
  }
}
export default changeValueReducer;

import { DZIAŁA_TO } from "./action";

const firststate = "1";

export function changeValueReducer(state = firststate, action : any) {
  switch (action.type) {
    case DZIAŁA_TO:
      return action.payload;

    default:
      return state;
  }
}
export default changeValueReducer;

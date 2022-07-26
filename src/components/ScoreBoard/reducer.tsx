import { DZIAŁA_TO } from "./action";

const firststate = "Sukces!";

export function changeValueReducer(state = firststate, action: any) {
  switch (action.type) {
    case DZIAŁA_TO:
      return action.payload.text;

    default:
      return state;
  }
}
export default changeValueReducer;

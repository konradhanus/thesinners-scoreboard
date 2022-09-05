import { CHANGE_VALUE, actionCreators } from "../action";

describe("Test dla przycisku czy akcja działa poprawnie.", () => {
  test("Akcja:", () => {
    const getAction = actionCreators.checkThis("NOWA_AKCJA");
    console.log("Akcja", getAction);
    expect(getAction.type).toBe(CHANGE_VALUE);
  });
});

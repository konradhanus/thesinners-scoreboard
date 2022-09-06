import each from 'jest-each';

import { CHANGE_VALUE, actionCreators } from "../action";

describe("Test dla przycisku czy akcja działa poprawnie.", () => {
  each([
    [
      "NOWA_AKCJA", 
      {
        type: CHANGE_VALUE,
        payload: "NOWA_AKCJA",
      }
    ],
    [
      "NOWA_AKCJA2", 
      {
        type: CHANGE_VALUE,
        payload: "NOWA_AKCJA2",
      }
    ],
    [
      undefined, 
      {
        type: CHANGE_VALUE,
        payload: undefined,
      }
    ],
    [
      null, 
      {
        type: CHANGE_VALUE,
        payload: null,
      }
    ],
    [
      123, 
      {
        type: CHANGE_VALUE,
        payload: 123,
      }
    ],
    [
      Infinity, 
      {
        type: CHANGE_VALUE,
        payload: Infinity,
      }
    ],
  ]).test("Akcja %s", (param: any, expected: object) => {
    const getAction = actionCreators.checkThis(param);
    console.log("Akcja", getAction);
    expect(getAction).toEqual(expected);
  });
});

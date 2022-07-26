export const CHANGE_VALUE = "@@SCOREBOARD/CHANGE_VALUE";

export const actionCreators = {
  checkThis: (payload: any) => ({
    type: CHANGE_VALUE,
    payload,
  }),
};

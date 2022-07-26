export const DZIAŁA_TO = "@@SCOREBOARD/DZIAŁA_TO";

export const actionCreators = {
  checkThis: (payload: any) => ({
    type: DZIAŁA_TO,
    payload,
  }),
};

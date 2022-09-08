// TO DO test it
export const getPlayers = (props: any) => (key: any) => {
  const p = props.players[key].player;
  return {
    icon: p.icon && p.icon,
    place: p.place && p.place,
    avatar: p.avatar && p.avatar,
    name: p.name && p.name,
    level: p.level && p.level,
    points: p.points && p.points,
  };
};

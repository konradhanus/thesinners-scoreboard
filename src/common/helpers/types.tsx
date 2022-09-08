export interface Player {
  icon: string;
  place: number;
  avatar: string;
  name: string;
  level: string;
  points: number;
}

export enum IconType {
  FirstPlace = "firstPlace",
  SecondPlace = "SecondPlace",
  ThirdPlace = "ThirdPlace",
}

export interface LevelProps {
  value?: number;
}

export interface ExpProps {
  size: string;
}

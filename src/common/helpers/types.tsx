import { ReactElement } from "react";

export interface Player {
  icon: string;
  place: string;
  avatar: string;
  name: string;
  level: string;
  points: string;
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

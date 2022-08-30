import { ReactElement } from "react";

export interface Winners {
  players: any;
  isMobile: boolean;
  isFirst: boolean;
  value: number;
}

export interface Others {
  players: any;
}

export interface Data {
  place: number;
  points: number;
  name: string;
  children?: ReactElement;
}

export enum IconType {
  FirstPlace = "firstPlace",
  SecondPlace = "SecondPlace",
  ThirdPlace = "ThirdPlace",
}

export interface ImageProps {
  src: string;
  alt: string;
}

export interface ListTableProps {
  children: ReactElement;
}
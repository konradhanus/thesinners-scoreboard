import { Image } from "../../components/ScoreBoard/Styles/tableStyles";
import { ImageProps } from "../helpers/types";

export default function Icon(props: ImageProps) {
  return <Image src={props.src} alt={props.alt}></Image>;
}

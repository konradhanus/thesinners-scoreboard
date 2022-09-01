import { Image } from "../../components/ScoreBoard/Styles/tableStyles";

export interface ImageProps {
  src: string;
  alt: string;
}
export default function Icon(props: ImageProps) {
  return <Image src={props.src} alt={props.alt}></Image>;
}

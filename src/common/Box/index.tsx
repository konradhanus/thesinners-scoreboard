import { Box } from "../../components/ScoreBoard/Styles/tableStyles";
import { ReactNode } from "react";

interface BoxProps {
  children: ReactNode;
}

export default function BoxContainer(props: BoxProps) {
  return (
    <Box
      className="box"
      data-aos="fade-up"
      data-aos-anchor="#example-anchor"
      data-aos-duration="800"
    >
      {props.children}
    </Box>
  );
}

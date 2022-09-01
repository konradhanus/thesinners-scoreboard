import { useState, ReactElement } from "react";
import { Experience } from "../../components/ScoreBoard/Styles/tableStyles";
import { Button, Modal } from "@mui/material";
import { style } from "./style";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import modalAvatarImage from "../../assets/modalAvatarImage.png";

export interface ModalDataProps {
  place: number;
  points: number;
  name: string;
  exp: ReactElement;
  children?: ReactElement;
}

export default function ModalData(props: ModalDataProps) {
  const [open, setOpen] = useState(false);
  const modalOpen = () => setOpen(true);
  const modalClose = () => setOpen(false);

  return (
    <Typography component="div">
      <Button onClick={modalOpen}>
        <p style={{ fontSize: "6pt", padding: 0 }}>Zobacz</p>
      </Button>
      <Modal
        open={open}
        onClose={modalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Card
          sx={style}
          data-aos="fade-up"
          data-aos-anchor="#example-anchor"
          data-aos-duration="800"
        >
          <CardMedia
            component="img"
            alt="modalAvatar"
            height="140"
            image={modalAvatarImage}
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              {props.place} {props.name}
            </Typography>
            <Typography
              component="div"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                alignContent: "space-between",
              }}
            >
              <Experience size={"12pt"}>{props.exp}</Experience>
              <Typography gutterBottom component="div" style={{}}>
                Punkty: {props.points}
              </Typography>
            </Typography>
            {props.children}
          </CardContent>
        </Card>
      </Modal>
    </Typography>
  );
}

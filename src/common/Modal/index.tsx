import { useState } from "react";
import { Button, Modal } from "@mui/material";
import { style } from "./style";
import { Data } from "../helpers/types";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import modalAvatarImage from "../../assets/modalAvatarImage.png";

export default function ModalData(props: Data) {
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
              gutterBottom
              component="div"
              style={{ display: "flex", justifyContent: "flex-end" }}
            >
              Punkty: {props.points}
            </Typography>
            {props.children}
          </CardContent>
        </Card>
      </Modal>
    </Typography>
  );
}

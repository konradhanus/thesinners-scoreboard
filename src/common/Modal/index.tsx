import * as React from "react";
import { ReactElement } from "react";
import { Button, Modal, Box } from "@mui/material";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 300,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 2,
};

interface Data {
  name: string;
  children?: ReactElement;
}

export default function ModalData(props: Data) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button onClick={handleOpen}>
        <p style={{ fontSize: "6pt", padding: 0 }}>Zobacz</p>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <>
            {props.children}
            Witaj {props.name}
          </>
        </Box>
      </Modal>
    </>
  );
}

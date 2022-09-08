interface ModalStyle {
  position: string;
  top: string;
  bottom: string;
  left: string;
  width: string;
  bgcolor: string;
  border: string;
  p: number;
}

export const style: ModalStyle = {
  position: "absolute" as "absolute",
  top: "50%",
  bottom: "0%",
  left: "0%",
  width: "100%",
  bgcolor: "background.paper",
  border: "0px solid #000",
  p: 0,
};

import { useState, forwardRef } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
} from "@mui/material";
import useAppContext from "../hooks/useAppContext";
import useAudio from "../utils/useAudio";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const ModalAlert = ({
  message,
  tipo,
  clearErrors,
  img,
  handleAlerta,
  handleMusic,
}) => {
  const [open, setOpen] = useState(true);
  const { handleModalBien, setAutoPlayCarou, fixMusic } = useAppContext();

  const handleClose = () => {
    if (fixMusic) {
      handleMusic();
    }

    if (img != "amor") {
      if (img != "grita") clearErrors();
      else handleAlerta();
    } else {
      setAutoPlayCarou(true);
    }

    handleModalBien(false);

    setOpen(false);
  };

  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle>{tipo}</DialogTitle>
      <DialogContent>
        <div style={{ textAlign: "center" }}>
          {img == "gun" && <img src="flork/flork-gun.png" alt="enojado" />}

          {img == "enojado" && (
            <img src="flork/flork-enojado.png" style={{ width: "300px" }} />
          )}

          {img == "grita" && (
            <img src="flork/flork-grita.jpg" style={{ width: "300px" }} />
          )}

          {img == "amor" && (
            <img src="flork/flork-amor.jpg" style={{ width: "300px" }} />
          )}
        </div>

        <DialogContentText style={{ marginTop: "20px" }}>
          {message}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>OK</Button>
      </DialogActions>
    </Dialog>
  );
};

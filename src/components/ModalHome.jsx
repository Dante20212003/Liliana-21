import { useState, forwardRef } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
} from "@mui/material";
import { ModalAlert } from "./ModalAlert";
import useAppContext from "../hooks/useAppContext";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const ModalHome = () => {
  const { modalHomeOpen, handleModalHome } = useAppContext();
  const [alerta, setAlerta] = useState(false);

  const handleAlerta = () => {
    setAlerta(false);
  };

  const handleNoQuiere = () => {
    setAlerta(true);
  };
  const handleClose = () => {
    handleModalHome();
  };

  return (
    <>
      {alerta && (
        <ModalAlert
          message="Como es posible"
          tipo="Desgraciada"
          img="grita"
          handleAlerta={handleAlerta}
        />
      )}

      {/* <Dialog
        open={modalHomeOpen}
        TransitionComponent={Transition}
        keepMounted
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>Informacion</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Para poder continuar debes ingresar dos claves secretas
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleNoQuiere}>No Quiero</Button>
          <Button onClick={handleClose}>Continuar</Button>
        </DialogActions>
      </Dialog> */}
    </>
  );
};

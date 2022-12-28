import React, { useRef, useState } from "react";
import { ModalAlert } from "./ModalAlert";
import "../assets/styles/Propuesta.css";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
  Typography,
} from "@mui/material";
import { forwardRef } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Propuesta = () => {
  const [alerta, setAlerta] = useState(false);
  const [contador, setContador] = useState(0);
  const [alertaEnojado, setAlertaEnojado] = useState(false);

  const router = useNavigate();

  const ref = useRef();

  const noQuiere = () => {
    setContador(contador + 1);
    const x = Math.round(Math.random() * 80);
    const y = Math.round(Math.random() * 80);
    ref.current.style.position = "absolute !important";
    ref.current.style.top = x + "%";
    ref.current.style.right = x + "%";
  };

  useEffect(() => {
    if (contador % 3 === 0 && contador != 0) setAlertaEnojado(true);
    return;
  }, [contador]);

  return (
    <>
      <Dialog
        open={alertaEnojado}
        TransitionComponent={Transition}
        keepMounted
        onClose={() => setAlertaEnojado(false)}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>Umm...</DialogTitle>
        <DialogContent>
          <div style={{ textAlign: "center" }}>
            <img src="flork/flork-gun.png" style={{ width: "300px" }} />
          </div>
        </DialogContent>
      </Dialog>

      <Dialog
        open={alerta}
        TransitionComponent={Transition}
        keepMounted
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>Bien</DialogTitle>
        <DialogContent>
          <div style={{ textAlign: "center" }}>
            <img src="flork/ambos.png" style={{ width: "300px" }} />
          </div>

          <DialogContentText style={{ marginTop: "20px" }}>
            Sabia que dirias que no
            <br />
            <br />
            Vamos juntos hasta el fin Puerca hermosa.???????????
            <br />
            <br /> TE A
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              setAlerta(false);
              router("/galeria");
            }}
          >
            mm
          </Button>
        </DialogActions>
      </Dialog>

      <h2 style={{ textAlign: "center" }}>Vamos por otro mes juntos..?/</h2>

      <div className="buttons-flex">
        <Button
          ref={ref}
          onClick={noQuiere}
          variant="contained"
          className="btn-no"
        >
          Si
        </Button>
        <Button
          onClick={() => setAlerta(true)}
          variant="contained"
          color="error"
          className="btn-si"
        >
          No
        </Button>
      </div>
      {/* 
      <Button
        style={{ position: "fixed", bottom: 0, right: 0, marginBottom: "1rem" }}
        variant="contained"
        color="warning"
        onClick={() => {
          router("/galeria");
        }}
      >
        Regresar
      </Button> */}
    </>
  );
};

export default Propuesta;

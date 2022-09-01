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
} from "@mui/material";
import { forwardRef } from "react";
import { useNavigate } from "react-router-dom";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Propuesta = () => {
  const [alerta, setAlerta] = useState(false);
  const router = useNavigate();

  const ref = useRef();

  const noQuiere = () => {
    const x = Math.round(Math.random() * 80);
    const y = Math.round(Math.random() * 80);
    console.log({ x, y });
    ref.current.style.position = "absolute !important";
    ref.current.style.top = x + "%";
    ref.current.style.right = x + "%";
  };

  return (
    <>
      <Dialog
        open={alerta}
        TransitionComponent={Transition}
        keepMounted
        onClose={() => setAlerta(false)}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>Gracias</DialogTitle>
        <DialogContent>
          <div style={{ textAlign: "center" }}>
            <img src="flork/flork-amor.jpg" style={{ width: "300px" }} />
          </div>

          <DialogContentText style={{ marginTop: "20px" }}>
            <div>
              <p>Sabia que dirias que si :")</p>
              <p>Vamos juntos hasta el fin Puerca hermosa. TE AMO ❤️</p>
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setAlerta(false)}>OK</Button>
        </DialogActions>
      </Dialog>

      <h2 style={{ textAlign: "center" }}>Deseas otros mes juntos :)?</h2>

      <div className="buttons-flex">
        <Button
          onClick={() => setAlerta(true)}
          variant="contained"
          className="btn-si"
        >
          Si
        </Button>
        <Button
          ref={ref}
          onClick={noQuiere}
          variant="contained"
          color="error"
          className="btn-no"
        >
          No
        </Button>
      </div>

      <Button
        style={{ position: "fixed", bottom: 0, right: 0, marginBottom: "1rem" }}
        /* style={{ marginTop: "15rem" }} */
        variant="contained"
        color="warning"
        onClick={() => {
          router("/galeria");
        }}
      >
        Regresar
      </Button>
    </>
  );
};

export default Propuesta;

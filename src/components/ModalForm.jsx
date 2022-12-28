import { forwardRef, useEffect, useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Slide,
  TextField,
} from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { MobileDatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

import esLocale from "dayjs/locale/es";
import { ModalAlert } from "./ModalAlert";
import useAppContext from "../hooks/useAppContext";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const initialError = {
  message: "",
  tipo: "",
  img: "",
};

const ModalForm = ({ handleMusic }) => {
  const {
    modalFormOpen,
    handleModalForm,
    modalBien,
    handleModalBien,
    fixMusic,
  } = useAppContext();
  const [fecha, setFecha] = useState(null);
  const [meses, setMeses] = useState("");
  const [error, setError] = useState(initialError);

  const [loading, setLoading] = useState(false);

  const clearErrors = () => {
    setError(initialError);
  };

  function handleClick() {
    /*  if (meses.length == 0 || fecha == null) {
      setError({
        message: "Ingresa las claves Puerca",
        tipo: "Alerta",
        img: "gun",
      });
      return;
    }
 */
    setLoading(true);

    setTimeout(() => {
      localStorage.setItem("completado", true);
      handleModalBien(true);
      handleMusic();
      handleModalForm();

      /*  const fechaSelect = fecha.$d.toLocaleDateString("es-ES");

      if (meses != 21 || fechaSelect != "2/12/2020") {
        setError({
          message: "Claves Incorrectas. Vas a ver!!!",
          tipo: "Error",
          img: "enojado",
        });
      } else {
        localStorage.setItem("completado", true);
        handleModalBien(true);
        handleMusic();
        handleModalForm();
      } */

      setLoading(false);
    }, 1500);
  }

  return (
    <>
      {modalBien && (
        <ModalAlert
          wi
          message={
            fixMusic ? "........................." : "????????????????????????"
          }
          tipo={fixMusic ? "??" : ""}
          img="amor"
          handleMusic={handleMusic}
        />
      )}

      {error.message.length > 0 && (
        <ModalAlert
          message={error.message}
          tipo={error.tipo}
          clearErrors={clearErrors}
          img={error.img}
        />
      )}

      <Dialog
        style={{ backdropFilter: "blur(5px)" }}
        open={modalFormOpen}
        TransitionComponent={Transition}
        keepMounted
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{" :))))))))))))))))))??"}</DialogTitle>
        {/* <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Primera Clave"
            type="email"
            fullWidth
            variant="standard"
            value={meses}
            onChange={(e) => setMeses(e.target.value)}
          />

          <LocalizationProvider
            dateAdapter={AdapterDayjs}
            adapterLocale={esLocale}
          >
            <MobileDatePicker
              label="Segunda Clave"
              value={fecha}
              inputFormat="DD/MM/YYYY"
              onChange={(newValue) => {
                setFecha(newValue);
              }}
              renderInput={(params) => (
                <TextField
                  fullWidth
                  variant="standard"
                  margin="dense"
                  {...params}
                />
              )}
            />
          </LocalizationProvider>
        </DialogContent> */}
        <DialogActions>
          {/* <Button>Verificar</Button> */}
          <LoadingButton onClick={handleClick} loading={loading}>
            OK
          </LoadingButton>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ModalForm;

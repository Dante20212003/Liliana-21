import { Button, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ModalForm from "./ModalForm";
import { ModalHome } from "./ModalHome";
import CarouselComp from "./CarouselComp";
import useAudio from "../utils/useAudio";
import useAppContext from "../hooks/useAppContext";
import Contador from "./Contador";
import { useEffect, useState } from "react";
import dayjs from "dayjs";

const getSeconsDiff = () => {
  const fechaInicio = new dayjs("12-02-2020");
  const fechaActual = new dayjs();

  const difference = fechaActual.diff(fechaInicio, "s");
  return difference;
};

const Home = () => {
  const { fixMusic } = useAppContext();

  const router = useNavigate();
  const [playing, toggle] = useAudio("rioroma2.mp3");
  const [seconds, setSeconds] = useState(getSeconsDiff());

  const handleMusic = () => {
    toggle();
  };

  const test = () => {
    setSeconds(seconds + 1);
  };

  setTimeout(() => {
    test();
  }, 1000);
  return (
    <>
      {fixMusic && (
        <h3 style={{ position: "absolute", display: "none" }}>FIX AUDIO</h3>
      )}
      <h1 style={{ textAlign: "center", marginBottom: "4rem" }}>
        Bienvenida Puerca 🐽
      </h1>

      <Contador seconds={seconds} />

      <CarouselComp />

      <Button
        variant="contained"
        fullWidth
        style={{ marginTop: "2rem" }}
        onClick={() => {
          router("/propuesta");
        }}
      >
        {"Click Aqui :)"}
      </Button>

      <ModalForm handleMusic={handleMusic} />
      <ModalHome />
    </>
  );
};

export default Home;

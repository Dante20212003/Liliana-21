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
  const router = useNavigate();
  const [playing, toggle] = useAudio("rioroma2.mp3");
  const [seconds, setSeconds] = useState(getSeconsDiff());

  const handleMusic = () => {
    toggle();
  };

  const test = () => {
    setSeconds(seconds + 1);
  };

  useEffect(() => {}, []);

  setTimeout(() => {
    test();
  }, 1000);
  return (
    <>
      <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>
        Bienvenida Puerca 🐽
      </h1>

      <Contador seconds={seconds} />

      <CarouselComp />

      <Button
        variant="contained"
        fullWidth
        style={{ marginTop: "2rem" }}
        onClick={() => {
          router("/galeria");
        }}
      >
        {"Ver Fotitos :)"}
      </Button>

      <ModalForm handleMusic={handleMusic} />
      <ModalHome />
    </>
  );
};

export default Home;

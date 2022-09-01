import { Button, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ModalForm from "./ModalForm";
import { ModalHome } from "./ModalHome";
import CarouselComp from "./CarouselComp";
import useAudio from "../utils/useAudio";
import useAppContext from "../hooks/useAppContext";
import Contador from "./Contador";

const Home = () => {
  const router = useNavigate();
  const [playing, toggle] = useAudio("rioroma2.mp3");

  const handleMusic = () => {
    toggle();
  };

  return (
    <>
      <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>
        Bienvenida Puerca 🐽
      </h1>

      <Contador />

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

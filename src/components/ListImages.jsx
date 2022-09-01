import { Button, Container } from "@mui/material";
import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CardImage from "./CardImage";

const images = [
  2, 3, 4, 5, 6, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23,
  24, 27, 28, 29, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45,
  46, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 70, 71, 72, 73, 74, 75, 76,
  77, 78, 79, 80, 81, 82, 83, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209,
  210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221,
];

const ListImages = () => {
  const [data, setData] = useState([]);
  const router = useNavigate();

  const ramdomArray = (array) => {
    array.sort(() => Math.random() - 0.5);
  };

  useEffect(() => {
    ramdomArray(images);
    setData(images);
  }, []);

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <h1 style={{ textAlign: "center", fontSize: "1.4rem" }}>
          Galeria de Fotos 💑
        </h1>

        <Button
          variant="outlined"
          style={{}}
          onClick={() => {
            router("/");
          }}
        >
          {"Inicio"}
        </Button>
      </div>

      <div className="list-grid">
        {data.map((x, i) => (
          <CardImage key={i} url={x} indice={i} />
        ))}
      </div>

      {/* <Button
        style={{ position: "fixed", bottom: 0, right: 0, marginBottom: "1rem" }}
        variant="contained"
        color="warning"
        onClick={() => {
          router("/propuesta");
        }}
      >
        {"Click Aqui"}
      </Button> */}
    </>
  );
};

export default ListImages;

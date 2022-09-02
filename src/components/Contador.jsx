import dayjs from "dayjs";
import { useEffect, useState } from "react";
import "../assets/styles/Contador.css";

const Contador = ({ seconds }) => {
  const [dataDate, setDataDate] = useState({
    years: "",
    months: "",
  });

  const getDiffTime = (val) => {
    const fechaInicio = new dayjs("12-02-2020");
    const fechaActual = new dayjs();

    const difference = fechaActual.diff(fechaInicio, val);
    return difference;
  };

  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  useEffect(() => {
    const fechaInicio = new dayjs("12-02-2020");
    const fechaActual = new dayjs();

    let years = 0;
    let months = fechaActual.diff(fechaInicio, "M");

    while (months >= 12) {
      months -= 12;
      years++;
    }

    setDataDate({
      years,
      months,
    });
  }, []);

  return (
    <div style={{ textAlign: "center", marginBottom: "4rem" }}>
      <div className="container-contador">
        <div className="contador-flex">
          <p className="anio-num">{dataDate.years}</p>
          <p className="anio-text">año</p>
        </div>
        <p className="meses-container">{dataDate.months} meses</p>
      </div>

      <div className="contador-grid">
        <div className="animar-contador">
          <p>Dias</p>
          <span>{getDiffTime("d")}</span>
        </div>

        <div className="animar-contador">
          <p>Horas</p>
          <span>{getDiffTime("h")}</span>
        </div>

        <div className="animar-contador">
          <p>Semanas</p>
          <span>{getDiffTime("w")}</span>
        </div>

        <div className="animar-contador">
          <p>Meses</p>
          <span>{getDiffTime("M")}</span>
        </div>
      </div>

      <h3>Segundos Juntos ❤️</h3>
      {numberWithCommas(seconds)}
    </div>
  );
};

export default Contador;

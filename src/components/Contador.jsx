import dayjs from "dayjs";
import "../assets/styles/Contador.css";

const Contador = ({ seconds }) => {
  const getDiffTime = (val) => {
    const fechaInicio = new dayjs("12-02-2020");
    const fechaActual = new dayjs();

    const difference = fechaActual.diff(fechaInicio, val);
    return difference;
  };
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }
  return (
    <div style={{ textAlign: "center", marginBottom: "4rem" }}>
      <div className="container-contador">
        <div className="contador-flex">
          <p className="anio-num">1</p>
          <p className="anio-text">año</p>
        </div>
        <p className="meses-container">9 meses</p>
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

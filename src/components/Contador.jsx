import "../assets/styles/Contador.css";

const Contador = ({ seconds }) => {
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }
  return (
    <div style={{ textAlign: "center", marginBottom: "3rem" }}>
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
          <span>639</span>
        </div>

        <div className="animar-contador">
          <p>Horas</p>
          <span>15336</span>
        </div>

        <div className="animar-contador">
          <p>Semanas</p>
          <span>91</span>
        </div>

        <div className="animar-contador">
          <p>Meses</p>
          <span>21</span>
        </div>
      </div>

      <h3>Segundos Juntos ❤️</h3>
      {numberWithCommas(seconds)}
    </div>
  );
};

export default Contador;

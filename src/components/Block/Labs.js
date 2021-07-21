import "./static/Labs.css";
import ExerciseIcon from "../../images/ejercicios_icon.png";
import DownloadIcon from "../../images/descargaactivicon.png";

export default function Labs() {
  return (
    <div className="bg-grey">
      <div className="container w-60">
        <div className="titles d-flex" style={{ maxWidth: "60%" }}>
          <img src={ExerciseIcon} alt="#" />
          <h2 className="icon-title">Laboratorios</h2>
        </div>
        <div style={{ marginTop: "2%" }}>
          <p>
            En esta sección encontrarás los laboratorios de tu certificado, haz
            clic en el ícono para contestar el laboratorio, recuerda que lo
            utilizaras para todos los bloques del certificado.
          </p>
          <div className="pdfs">
            <div className="document">
              {/*<a href="labs1"/> download="labs1.pdf"*/}
              <a type="button">
                <img src={DownloadIcon} alt="#" />
                <p>
                  <strong>Laboratorio 1</strong>
                </p>
              </a>
            </div>
            <div className="document">
              {/*<a href="labs1"/> download="labs1.pdf"*/}
              <a type="button">
                <img src={DownloadIcon} alt="#" />
                <p>
                  <strong>Laboratorio 2</strong>
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import "./static/Infographic.css";
import InfographicIcon from "../../images/infografia-icon.png";

export default function Infographic() {
  return (
    <div className="bg-white">
      <div className="container w-60">
        <div className="titles d-flex" style={{ maxWidth: "60%" }}>
          <img src={InfographicIcon} alt="#" />
          <h2 className="icon-title">Infografía</h2>
        </div>
        <div style={{ marginTop: "2%", paddingBottom: "50px" }}>
          <p>
            En esta sección encontrarás las infografías referentes al Bloque 1.
            ¿Qué es data science?, te invitamos a revisarlas para que sigas
            desarrollando tus conocimientos.
          </p>
          <div className="download">
            <div className="row row-i">
              {/*ANEXO*/}
              <a href type="button">
                <img src={InfographicIcon} alt="#" />
              </a>
            </div>
            <div className="row row-i">
              {/*ANEXO*/}
              <a>INFOGRAFÍA</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

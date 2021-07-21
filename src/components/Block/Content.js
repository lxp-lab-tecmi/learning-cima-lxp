import "./static/Content.css";
import Book from "../../images/contenido_icon.png";

import axios from 'axios'

export default function Content() {
  const addEvent = async (resource = "") => {
    await axios.post('https://cima-api-gateway.herokuapp.com/events/click', {
      course: 1,
      user: 1,
      resource
    }, { validateStatus: false })
  }

  return (
    <div className="bg-grey">
      <div className="container w-60">
        <div className="titles d-flex" style={{ maxWidth: "60%" }}>
          <img src={Book} alt="#" />
          <h2 className="icon-title">Contenido</h2>
        </div>
        <div className="section">
          <p>
            En este bloque, conocerás qué es la ciencia de datos, sus conceptos
            y áreas principales y los fundamentos del lenguaje de programación
            Python. También descubrirás lo que hace un científico de datos y
            cuáles son las principales herramientas que utiliza. Además,
            aprenderás sobre las dos principales bibliotecas de Python, las
            cuales son NumPy y Pandas.
          </p>
          <p>
            Actualmente, en la sociedad digital y del conocimiento en la que
            estamos inmersos los cambios son una constante, lo que obliga a las
            personas que su adaptación al entorno laboral sea lo más eficaz y
            rápida posible; y aunque, desde hace algunos años, los científicos
            de datos se perfilen como una de las profesiones con mayor
            proyección de crecimiento, no son la excepción, ya que para toda
            profesión se requiere el conocer y dominar herramientas que permitan
            llevarla a cabo de forma eficiente, por lo que Python y sus
            bibliotecas se convierten en un aliado fundamental para realizar
            tareas específicas).
          </p>
          <p>
            Por lo que las profesiones con mayor demanda serán aquellas con
            habilidades que permitan traducir grandes volúmenes de datos en
            información y que aporten valor a la sociedad, siendo una de ellas
            los científicos de datos.
          </p>
        </div>
        <div className="text-center" style={{ paddingBottom: "50px" }}>
          <div className="pdfs">
            <div className="document">
              <p>
                <strong>Tema 1: </strong>
                Introducción a data science
              </p>
              {/*<a href="tema1" download="tema1.pdf"></a>*/}
              <a onClick={() => addEvent("Tema 1: Introducción a data science")} className="btn btn-success" type="button" name="button">
                Ir al contenido
              </a>
            </div>
            <div className="document">
              <p>
                <strong>Tema 2: </strong>
                Fundamentos de programación en Python
              </p>
              {/*<a href="tema2" download="tema2.pdf"></a>*/}
              <a onClick={() => addEvent("Tema 2: Fundamentos de programación en Python")} className="btn btn-success" type="button" name="button">
                Ir al contenido
              </a>
            </div>
            <div className="document">
              <p>
                <strong>Tema 3: </strong>
                Manipulación y análisis de datos (NumPy y Pandas)
              </p>
              {/*<a href="tema3" download="tema3.pdf"></a>*/}
              <a onClick={() => addEvent("Tema 3: Manipulación y análisis de datos (NumPy y Pandas)")} className="btn btn-success" type="button" name="button">
                Ir al contenido
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

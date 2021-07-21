import "../static/Navbar.css";
import { Dropdown } from "react-bootstrap";
import logoTecmi from "../images/logotm.png";

import ProgressBar from "./ProgressBar";

export default function Navbar({ percentage, blocks }) {
  var numbersBlocks = [];
  for (var i = 1; i < blocks + 1; i++) {
    numbersBlocks.push(i);
  }

  const listBlocks = numbersBlocks.map((number) => (
    <Dropdown.Item href="#/action-{number}">Bloque {number}</Dropdown.Item>
  ));

  return (
    <div>
      <nav className="top navbar-top navbar-expand-md">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link none" href="#"></a>
          </li>
        </ul>
        <ul className="navbar-nav res">
          <li className="nav-item">
            <a href="#" className="nav-link">
              Inicio
            </a>
          </li>
          <li className="nav-item">
            <Dropdown>
              <Dropdown.Toggle variant="" id="dropdown-basic">
                Bloques
              </Dropdown.Toggle>

              <Dropdown.Menu>{listBlocks}</Dropdown.Menu>
            </Dropdown>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Salir
            </a>
          </li>
        </ul>
      </nav>
      <nav className="navbar navbar-expand-md" style={{ marginTop: "50px" }}>
        <ul id="logo" className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a href="index.php">
              <img src={logoTecmi} alt="Universidad Tecmilenio" />
            </a>
          </li>
        </ul>
        <ul id="nav-avance" className="navbar-nav" style={{ width: "33%" }}>
          <li className="nav-item">
            <h5 id="avance" className="nav-item">
              Avance
            </h5>
          </li>
          <li className="nav-item m-auto" style={{ width: "100%" }}>
            <ProgressBar percentage={percentage} />
          </li>
        </ul>
      </nav>
    </div>
  );
}

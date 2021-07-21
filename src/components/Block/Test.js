import "./static/Test.css";
import TestIcon from "../../images/test_icon.png";
import Modal from "react-modal";
import Questions from "./Questions";
import React, {useState} from "react";

import axios from 'axios';

Modal.setAppElement('#root');

export default function Test({ calification }) {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const [answers, setAnswers] = useState([])
  const [grade, setGrade] = useState(0)

  const submit = async (e) => {
    e.preventDefault()

    const {data} = await axios.post("https://cima-api-gateway.herokuapp.com/exam/grade", {
      answers,
      course: 1,
      id: 1,
      quiz: 2
    }, { validateStatus: false })

    setGrade(data.grade)

    setModalIsOpen(false)
  }

  return (
    <div>
      <div className="bg-grey" id="test">
        <div className="container w-60 text-center">
          <div className="titles d-flex" style={{ maxWidth: "60%" }}>
            <img src={TestIcon} alt="#" />
            <h2 className="icon-title">Test</h2>
          </div>
          <div className="section">
            <p>Resultado {grade || calification}</p>
            <button
              onClick={() => {
                setModalIsOpen(true);
                console.log("Modal button clicked");
              }}
              className="btn btn-success"
            >
              Tomar otra vez
            </button>
            <div
              className="text-center"
              style={{ paddingBottom: "50px" }}
            ></div>
            <Modal
              isOpen={modalIsOpen}
              onRequestClose={() => setModalIsOpen(false)}
              style={{
                overlay: {
                  position: "fixed",
                  backgroundColor: "grey",
                  zIndex: "1",
                },
                content: {
                  zIndex: "2",
                },
              }}
              preventScroll={false}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <h2>Examen</h2>
                <button onClick={() => setModalIsOpen(false)}>x</button>
              </div>
              <form>
                <Questions onChange={setAnswers} />
                <button className="btn btn-success" type="submit" onClick={submit}>
                  Terminar
                </button>
              </form>
            </Modal>
          </div>
        </div>

        <div>
          <div className="line" />
          <div className="container w-60 next">
            <a href type="button" className="btn btn-outline-success">
              Siguiente
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

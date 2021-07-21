import { Navbar, Content, VideoYoutube, InitiateButton } from "./components";
import React, { useEffect, useState } from "react";

export default function Intro() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [progress, setProgress] = useState();

  useEffect(() => {
    fetch("https://cima-api-gateway.herokuapp.com/progress/1/4")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setProgress(data);
        setIsLoaded(true);
      })
      .catch((error) => {
        console.log(error);
        setError(error);
      });
  }, []);

  if (!isLoaded) return "Loading...";
  if (error) return "Error!";

  const title = "Bienvenidos al Certificado Global de Data Science All";
  const intro =
    "Transfiere los conocimientos, habilidades y herramientas de la inteligencia de data science para la mejora de la sociedad.";

  return (
    <div className="App">
      <Navbar percentage={progress["progress"]} blocks={4} />
      <Content title={title} intro={intro} />
      <VideoYoutube embedId={"JmDKQeBgcgs"} />
      <InitiateButton number={1} />
    </div>
  );
}

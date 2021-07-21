import {
  Navbar,
  VideoYoutube,
  Content,
  Resources,
  Labs,
  Infographic,
  Test
} from "./components/Block";
import React, { useEffect, useState } from "react";


export default function Block() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [progress, setProgress] = useState();
  const [grade, setGrade] = useState();

  useEffect(() => {
    
    fetch("https://cima-api-gateway.herokuapp.com/progress/1/4")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setProgress(data);
        fetch("https://cima-api-gateway.herokuapp.com/exam/1/1")
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            console.log(data);
            setGrade(data);
            setIsLoaded(true);
          })
          .catch((error) => {
            console.log(error);
            setError(error);
          });
      })
      .catch((error) => {
        console.log(error);
        setError(error);
      });
  }, []);

  if (!isLoaded) return "Loading...";
  if (error) return "Error!";

  return (
    <div className="App">
      <Navbar percentage={progress["progress"]} blocks={4} />
      <VideoYoutube embedId={"Ylfu-8HgT04"} block={1} />
      <Content />
      <Resources />
      <Labs />
      <Infographic />
      <Test calification={grade["grade"]} />
      
    </div>
  );
}

import React, {useEffect, useState} from "react";

export default function Questions ({ onChange }){

    const [error, setError] = useState(null);
    const [loadedQuestions, setLoadedQuestions] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    const [answers, setAnswers] = useState([])

    const onChangeValue = e => {
      let dummyAnswers = answers

      const [questionId, answer] = (e.target.value).split("-")
      const questionIndex = dummyAnswers.findIndex(q => q.id == parseInt(questionId))
      if (questionIndex != -1) {
        dummyAnswers.splice(questionIndex, 1)
      }
      dummyAnswers.push({ id: parseInt(questionId), ans: parseInt(answer) })
      console.log(dummyAnswers, answers)
      
      setAnswers(dummyAnswers)
      onChange(answers)
    }
    
    const buildAnswers = (answers, questionId, answer) => {
        const options = [];
        for(let i = 0; i<answers.length; i++){
            options.push(
              <>
                <input data-correct={answer} required type="radio" value={`${questionId}-${i+1}`} name={questionId} id={`${questionId}-${i+1}`} />
                <label for={`${questionId}-${i+1}`} style={{marginLeft: "12px"}}>{answers[i]}</label>
                <br/>
              </>
            );
        }
        return options;
    }

    const buildQuestions = (questions) => {
        const quiz = [];
        let correctAnswers = [];

        questions.forEach(q => {
            // console.log(q);
            correctAnswers.push(q.answer)

            let opt = buildAnswers(q.options, q.id, q.answer);
            quiz.push(
                <fieldset>
                    {q.question}
                    <div onChange={onChangeValue}>
                      {opt}
                    </div>
                    <br></br>
                </fieldset>
            )
        });
        return quiz;
    }

    useEffect(() => {
      fetch("https://cima-api-gateway.herokuapp.com/exam/generate/1/1/2/5")
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setLoadedQuestions(data);
          console.log(loadedQuestions);
          setIsLoaded(true);
        })
        .catch((error) => {
          console.log(error);
          setError(error);
        });
    }, []);

  
    
    if (error) return "Error!";
    if (!isLoaded) return "Loading...";
    const list = buildQuestions(loadedQuestions);
    return <div>{list}</div>;
}
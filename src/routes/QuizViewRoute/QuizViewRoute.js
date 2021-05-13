import React, { useEffect, useState } from "react";
import QuestionApiService from "../../services/question-api-service";
import "./QuizView.css";

export default function QuizViewRoute(props) {
  const [questions, setQuestions] = useState([]);
  const [selected, setSelected] = useState([])
  useEffect(() => {
    const loadData = async () => {
      const loadedQs = await QuestionApiService.getQuizQuestions(props.match.params.id)
      setQuestions(
        loadedQs
      );
      setSelected(new Array(loadedQs.length).fill({}))
    };
    loadData();
  }, []);

  console.log(selected)
  function onAnswer(e, index){
      e.persist()
    setSelected(prevSelected => prevSelected.map((current, sIndex) => {
        console.log(e)
        if (index !== sIndex) return current
        else return {correct: Number(e.target.value.split(",")[0]), attempted: Number(e.target.value.split(",")[1])}
    }))
  }
  return (
   <>
    <ul className="quiz-view">
      {questions.map((question, index) => (
        <li key={question.id} className="question-view">
          {index + 1}. {question.title}
          <br />
          <form>
          {question.answers.split(",").map((answer, aIndex) => (
            <>
                <input onChange={(e) => onAnswer(e, index)} key={`answer${index}${aIndex}`} name={`question${index}`} type="radio" id={`question${index}answer${aIndex}`} value={`${question.correct_answer},${aIndex}`} />
                <label key={`label${index}${aIndex}`} htmlFor={index}> {answer}</label><br />
            </>
          ))}
          </form>
        </li>
      ))}
    </ul>
    <button className="submit" type="submit" > Submit Quiz </button>
</>
  );
}

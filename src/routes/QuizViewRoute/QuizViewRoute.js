import React, { useEffect, useState } from "react";
import QuestionApiService from "../../services/question-api-service";
import "./QuizView.css";

export default function QuizViewRoute(props) {
  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    const loadData = async () => {
      setQuestions(
        await QuestionApiService.getQuizQuestions(props.match.params.id)
      );
    };
    loadData();
  }, []);
  console.log(questions);
  return (
    <ul className="quiz-view">
      {questions.map((question, index) => (
        <li key={question.id} className="question-view">
          {index + 1}. {question.title}
          <br />
          {question.answers.split(",").map((answer) => (
            <>
              {answer} <br />{" "}
            </>
          ))}
        </li>
      ))}
    </ul>
  );
}

import React, { useContext, useEffect, useState } from "react";
import QuizView from "../../components/QuizView/QuizView";
import UserContext from "../../contexts/UserContext";
import QuestionApiService from "../../services/question-api-service";
import SqrelsService from "../../services/sqrels-api-service";
import "./QuizView.css";

export default function QuizViewRoute(props) {
  const [questions, setQuestions] = useState([]);
  const [selected, setSelected] = useState([]);
  const userContext = useContext(UserContext);
  useEffect(() => {
    const loadData = async () => {
      const loadedQs = await QuestionApiService.getQuizQuestions(
        props.match.params.id
      );
      setQuestions(loadedQs);
      setSelected(new Array(loadedQs.length).fill(-1));
    };
    loadData();
  }, []);

  async function onSubmit(e) {
    let score = selected.reduce((total, current, index) => {
        return total + questions[index].value * Number(current === questions[index].correct_answer)
    }, 0)
        let sqrel = {answers: selected, quiz_id: Number(props.match.params.id), student_id: userContext.user.id, score,  date_completed: new Date()}
        // console.log(sqrel)
        let returnedSqrel = await SqrelsService.postStudentSqrel(sqrel)
        // console.log(returnedSqrel)
        props.history.push(`/quiz-results/${returnedSqrel.id}`)
    
  }

//YOU HAVE A STUDENT ID HARDCODED IN. MAKE SURE TO CHANGE THAT WHEN YOU 
//TEST THIS ON A STUDENT ACCOUNT

  // console.log(selected);
  function onAnswer(e, index) {
    e.persist();
    setSelected((prevSelected) =>
      prevSelected.map((current, sIndex) => {
        // console.log(e);
        if (index !== sIndex) return current;
        else
          return Number(e.target.value)
      }
      )
    );
  }
  return (
    <>
    <button onClick={() => props.history.goBack()} className="back-button">Back</button>
<QuizView onAnswer={onAnswer} questions={questions} />
      <button disabled={selected.includes(-1)} className="submit" type="submit" onClick={onSubmit}>
        {" "}
        Submit Quiz{" "}
      </button>
    </>
  );
}

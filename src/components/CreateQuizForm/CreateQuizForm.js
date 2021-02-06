import React, { useEffect, useState } from "react";
import QuizApiService from "../../services/quiz-api-service";
import Button from "../Button/Button";
import { Input, Label, Textarea } from "../Form/Form";

export default function CreateQuizForm(props) {
  const [quiz, setQuiz] = useState({});
  const [questionList, setQuestionList] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const questionTemplate = {quiz_id: quiz.id, title: "", answers: new Array(4).fill({ value: "", touched: false }), correct_answers: [], value: 0}

  function handleSubmitSetupTitle(title, setup) {
    QuizApiService.postQuiz({ title, setup }).then((quiz) => {
      setQuiz(quiz);
    });
  }
    // you have to fix this to add or edit a question
   function handleAddQuestion(question, back) {
    const addedQuestion = { ...question, quizId };
    QuizApiService.postQuestion(addedQuestion).then((question) => {
      setQuestionList((prevList) => [...prevList, question]);
      setCurrentQuestionIndex((prevQuestion) => prevQuestion + 1 + +back*-2);
    });
  }
  const questionProps = {handleAddQuestion, handleGoBack, currentQuestionIndex}
  return quiz.id ? (
    <CreateQuestionForm
      {...questionList[currentQuestionIndex] || questionTemplate}
      {...questionProps}
    />
  ) : (
    <NameQuizForm handleSumit={handleSubmitSetupTitle} {...quiz} />
  );
}
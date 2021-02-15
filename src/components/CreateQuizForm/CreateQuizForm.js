import React, { useEffect, useState } from "react";
import QuizApiService from "../../services/quiz-api-service";
import Button from "../Button/Button";
import { Input, Label, Textarea } from "../Form/Form";
import CreateQuestionForm from "./CreateQuestionForm";
import NameQuizForm from "./NameQuizForm";
import '../../styles/quiz-form.css'

export default function CreateQuizForm(props) {
  const quizTemplate = {
    title: { value: "", touched: false },
    language_id: -1,
    setup: { value: "", touched: false },
  };

  const [questionList, setQuestionList] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [quiz, setQuiz] = useState(quizTemplate);

  const questionTemplate = {
    quiz_id: quiz.id,
    title: { value: "", touched: false },
    answers: new Array(4).fill({ value: "", touched: false }),
    correct_answers: [],
    value: { value: 0, touched: false },
  };

  function handleSubmitSetupTitle(title, setup) {
    QuizApiService.postQuiz({ title, setup, finished: false }).then((quiz) => {
      setQuiz(quiz);
    });
  }
  // you have to fix this to add or edit a question
  //disable new question button until parameters are met
  async function handleAddQuestion(question) {
    if (currentQuestionIndex === questionList.length) {
      const resultPJ = await QuizApiService.postQuestion(question);
      const question = await resultPJ.json();
      setQuestionList((prevList) => [...prevList, question]);
    } else {
      let questionResult = await QuizApiService.patchQuestion(question);
      questionResult = questionResult.json();
      setQuestionList((prevList) =>
        prevList.map((current, index) => {
          if (index === currentQuestionIndex) return questionResult;
          else return current;
        })
      );
    }
  }
  //make handle add qeustion fubction to differentiate if youre updating or adding a qeustion
  async function finishQuiz(question) {
    let quizResult = await QuizApiService.patchQuiz(
      { finished: true },
      quiz.id
    );
    quizResult = await quizResult.json();
    setQuiz(quizResult);
    props.history.push("/");
  }

  const questionProps = {
    finishQuiz,
    setCurrentQuestionIndex,
    handleAddQuestion,
    currentQuestionIndex,
  };
  return quiz.id ? (
    <CreateQuestionForm
      {...(questionList[currentQuestionIndex] || questionTemplate)}
      {...questionProps}
    />
  ) : (
    <NameQuizForm handleSumit={handleSubmitSetupTitle} {...quiz} />
  );
}

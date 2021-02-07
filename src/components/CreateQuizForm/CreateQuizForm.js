import React, { useEffect, useState } from "react";
import QuizApiService from "../../services/quiz-api-service";
import Button from "../Button/Button";
import { Input, Label, Textarea } from "../Form/Form";

export default function CreateQuizForm(props) {
  const [quiz, setQuiz] = useState({});
  const [questionList, setQuestionList] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const questionTemplate = {
    quiz_id: quiz.id,
    title: "",
    answers: new Array(4).fill({ value: "", touched: false }),
    correct_answers: [],
    value: 0,
  };

  function handleSubmitSetupTitle(title, setup) {
    QuizApiService.postQuiz({ title, setup, finished: false }).then((quiz) => {
      setQuiz(quiz);
    });
  }
  // you have to fix this to add or edit a question
  //disable new question button until parameters are met
  async function handleAddQuestion(question) {
    const addedQuestion = { ...question, quizId };
      if (currentQuestionIndex === questionList.length){
    const resultPJ = await QuizApiService.postQuestion(addedQuestion);
    const question = await resultPJ.json();
    setQuestionList((prevList) => [...prevList, question]);
      }
    else {
        let questionResult = await QuizApiService.patchQuestion(addedQuestion);
        questionResult = questionResult.json();
        setQuestionList(prevList => prevList.map(current, index => {
            if (index === currentQuestionIndex) return questionResult
            else return current;
        }))
    }
  }
//make handle add qeustion fubction to differentiate if youre updating or adding a qeustion
  async function finishQuiz(question) {
    let quizResult = await QuizApiService.patchQuiz(true);
    quizResult = await quizResult.json();
    setQuiz(quizResult);
    props.history.push("/");
  }

  const questionProps = {
    finishQuiz, 
    setCurrentQuestionIndex,
    handleAddQuestion,
    handleGoBack,
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

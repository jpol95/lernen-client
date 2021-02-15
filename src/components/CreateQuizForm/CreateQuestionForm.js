import React, { useEffect, useState } from "react";
import QuizApiService from "../../services/quiz-api-service";
import Button from "../Button/Button";
import { Input, Label, Textarea } from "../Form/Form";
import Question from "./Question";


export default function CreateQuestionForm(props) {
    const [title, setTitle] = useState(props.title || "");
    const [correctAnswers, setCorrectAnswers] = useState(props.correctAnswers);
    const [numChoices, setNumChoices] = useState(props.answers.length)
    const [answers, setAnswers] = useState(props.answers);
    const state = {setTitle, setAnswers, setCorrectAnswers, correctAnswers, answers, title}
    const question = {correctAnswers, answers, title}
    function handleMoveForward() {
        props.setCurrentQuestionIndex(prevQuestion => prevQuestion + 1);
        props.handleAddQuestion(question);
    }

    function handleMoveBackward(){
        props.setCurrentQuestionIndex(prevQuestion => prevQuestion + 1);
        props.handleAddQuestion(question);
    }

    
function validateTitle() {
    if (!title.value) return <div className="error">Please enter title of question</div>
}

function validateAnswers() {
    if (answers.length < 0) return <div className="error">All questions must have at least 2 answer choices</div>
    for (let answer of answers) {
        if (!answer) return <div className="error">All answers must have body</div>
    }
}

function validateCorrectAnswers() {
    if (correctAnswers.length === 0) return <div className="error">There must be at least one correct answer</div>
}

  return (
    <form onSubmit={props.handleSubmit} className="quiz-form">
      <Label htmlFor="num-Choices">How many Choices</Label>
      <Input
        defaultValue={ numChoices }
        type="number"
        onChange={(e) => setNumChoices(e.target.value)}
      />
      <Question {...state} numChoices={numChoices} qNum={props.currentQuestionIndex}/>
      {answers.touched && validateAnswers()}
      {correctAnswers.touched && validateCorrectAnswers()}
      {title.touched && validateTitle()}
      <Button disabled={!validateAnswers() && !validateCorrectAnswers() && !validateTitle()} onClick={handleMoveForward} className="next-question">Next Question {">>"}</Button>
      <Button disabled={!validateAnswers() && !validateCorrectAnswers() && !validateTitle()} onClick={handleMoveBackward} className="previous-question">{"<<"} Previous Question</Button>
      <Button onClick={() => props.finishQuiz(question)} className="finish-quiz">Finish Quiz</Button>
    </form>
  );
}
//KEEP WORKING ON IT
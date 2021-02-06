import React, { useEffect, useState } from "react";
import QuizApiService from "../../services/quiz-api-service";
import Button from "../Button/Button";
import { Input, Label, Textarea } from "../Form/Form";





export default function CreateQuestionForm(props) {
    const [title, setTitle] = useState(props.title || "");
    const [correctAnswers, setCorrectAnswers] = useState(props.correctAnswers);
    const [numChoices, setNumChoices] = useState(props.answers.length)
    const [answers, setAnswers] = useState(props.answers);
    const state = {setTitle, setAnswers, setCorrectAnswers, correctAnswers, answers, title}
    const question = {correctAnswers, answers, title}
  return (
    <form onSubmit={handleSubmit} className="quiz-form">
      <Label htmlFor="num-Choices">How many Choices</Label>
      <Input
        defaultValue={ numChoices }
        type="number"
        onChange={(e) => setNumChoices(e.target.value)}
      />
      <Question {...state} numChoices={numChoices} qNum={props.currentQuestionIndex}/>
      <Button className="next-question">Next Question {">>"}</Button>
      <Button onClick={() => props.handleAddQuestion(question, false)} className="previous-question">{"<<"} Previous Question</Button>
      <Button onClick={() => props.handleAddQuestion(question, true)} className="finish-quiz">Finish Quiz</Button>
    </form>
  );
}

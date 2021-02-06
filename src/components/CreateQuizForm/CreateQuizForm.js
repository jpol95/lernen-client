import React, { useEffect, useState } from "react";
import QuizApiService from "../../services/quiz-api-service";
import Button from "../Button/Button";
import { Input, Label, Textarea } from "../Form/Form";

function validateAnswerChoices(){

}

function Question(props) {
  const [title, setTitle] = useState(props.title || "");
  const [correctAnswers, setCorrectAnswers] = useState(
    props.correctAnswers || []
  );
  const [choiceList, setChoiceList] = useState(
    props.choiceList ||
      new Array(props.Choices).fill({ value: "", touched: false })
  );
  function choiceArray() {
    let result = [];
    for (let i = 0; i < props.numChoices; i++) {
      result.push(
        <div className="answer-choice">
          <Input
            checked={correctAnswers.includes(i)}
            onClick={() =>
              setCorrectAnswers((prevList) => {
                if (prevList.includes(e.target.value))
                  return prevList.filter((ans) => ans !== e.target.value);
                else return [...prevList, e.target.value];
              })
            }
            type="checkbox"
            value={i}
          />
          <Input
            defaultValue={choiceList[i]}
            onChange={(e) =>
              setChoiceList((choiceList) =>
                choiceList.map((current, index) => {
                  if (i !== index) return current;
                  else return { value: e.target.value, touched: true };
                })
              )
            }
            defaultValue={title}
            id={`question${props.qNum}`}
            key={props.qNum}
          />
        </div>
      );
    }
    return result;
  }
  //FIGURE OUT HOW TO DO TEXT INSIDE CHECKBOX THING
  return (
    <fieldset className="question">
      {props.qNum}.
      <Label
        htmlFor={`question${props.qNum}`}
        key={`label-title-${props.qNum}`}
      >
        Title of Question
      </Label>
      <Input
        defaultValue={props.title}
        id={`question-${props.qNum}`}
        key={`input-title-${props.qNum}`}
        onChange={(e) => setTitle(e.target.value)}
      />
      {choiceArray()}
    </fieldset>
  );
}

function CreateQuestionForm(props) {
  return (
    <form onSubmit={handleSubmit} className="quiz-form">
      <Label htmlFor="num-Choices">How many Choices</Label>
      <Input
        defaultValue={
          props.answerChoices ? props.answerChoices.split(",").length : 4
        }
        type="number"
        onChange={changeNumChoices}
      />
      <Question {...props} numChoices={numChoices} />
      <Button className="next-question">Next Question {">>"}</Button>
      <Button className="previous-question">{"<<"} Previous Question</Button>
      <Button className="finish-quiz">Finish Quiz</Button>
    </form>
  );
}

function NameQuizForm(props) {
  const [title, setTitle] = useState({ value: props.title, touched: false });
  const [setup, setSetup] = useState({ value: props.setup, touched: false });

  function validateTitle() {
    if (title.value.length === 0)
      return <div className="error">Quiz must have a title</div>;
  }

  return (
    <form onSubmit={props.handleSubmitSetupName} className="quiz-form">
      <Label htmlFor="quiz-name">Name your new quiz</Label>
      <Input
        defaultValue={title.value}
        onChange={(e) => setTitle({ value: e.target.value, touched: false })}
        type="text"
      />
      {title.touched && validateTitle()}
      <Label htmlFor="setup">Setup</Label>
      <Textarea
        defaultValue={setup.value}
        onChange={(e) => setSetup({ value: e.target.value, touched: false })}
        id="setup"
      />
      <Button
        type="submit"
        disabled={!validateTitle()}
        className="next-question"
      >
        Create Questions {">>"}
      </Button>
      <Button className="cancel-button">Cancel</Button>
    </form>
  );
}

function CreateQuizForm(props) {
  const [quiz, setQuiz] = useState({});
  const [questionList, setQuestionList] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  function handleSubmitSetupTitle(title, setup) {
    QuizApiService.postQuiz({ title, setup }).then((quiz) => {
      setQuiz(quiz);
    });
  }

  function handleAddQuestion(question) {
    const addedQuestion = { ...question, quizId };
    QuizApiService.postQuestion(addedQuestion).then((question) => {
      setQuestionList((prevList) => [...prevList, question]);
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
    });
  }
  return quiz.id ? (
    <CreateQuestionForm
      {...questionList[currentQuestion]}
      qNum={currentQuestion}
    />
  ) : (
    <NameQuizForm handleSumit={handleSubmitSetupTitle} {...quiz} />
  );
}

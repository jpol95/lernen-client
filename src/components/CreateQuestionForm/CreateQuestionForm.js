import React, { useEffect, useState } from "react";

function CreateQuestionForm(props) {
  // console.log(props)
  const [answers, setAnswers] = useState(
    {touched: false, value: props.question.answers}
  );
  const [value, setValue] = useState(1);
  const [title, setTitle] = useState({touched: false, value: props.question.title});
  const [correctAnswer, setCorrectAnswer] = useState(-1)

  console.log(correctAnswer)
  useEffect(() => {
    props.setQuestionList((questionList) => {
      // console.log(props.currentIndex)
      return questionList.map((question, index) => {
        if (props.currentIndex !== index) return question;
        return { ...question, answers: answers.value, value: value, title: title.value, correct_answer: correctAnswer };
      });
    });
  }, [answers, value, title]);

  const editAnswer = (e, i) => {
    let answersCopy = [...answers.value];
    answersCopy[i] = e.target.value;
    setAnswers({touched: true, value: answersCopy});
  };

  const editTitle = (e) => {
    setTitle({touched: true, value: e.target.value});
  };

  const editValue = (e) => {
    setValue(Number(e.target.value));
  };

  const answersError = answers.value.includes("") ? <div className="error">Please fill out all answer choices</div> : ""
  const titleError = title.value === "" ? <div className="error">Please fill out title to question </div> : ""
  return (
    <form className="create-question">
      <div className="answer">
        {" "}
        <label htmlFor="title">Title </label>{" "}
        <input
          onChange={editTitle}
          defaultValue={title.value}
          id="title"
          type="text"
        />{" "}
      </div>
      {title.touched && titleError}
      <div className="answer">
        <label htmlFor="value">Value of question </label>
        <input
          defaultValue={value}
          id="value"
          min="1"
          onChange={editValue}
          type="number"
        />
      </div>
      { answers.value.map((current, index)=> <div className="answer">
        <label htmlFor={String.fromCharCode(65 + index)}>{String.fromCharCode(65 + index)} </label>
        <input
          defaultValue={current}
          id={String.fromCharCode(65 + index)}
          onChange={(e) => editAnswer(e, index)}
          type="text"
        />
        <input onChange={(e) => setCorrectAnswer(+e.target.value)} type="radio" name="correct-answer" value={index} />
      </div>)}
      {answers.touched && answersError}
      <div className="quiz-buttons">
        <button disabled={titleError || answersError} onClick={(e) => props.moveQuestion(e, true)}> &#171; Previous Question </button>
        <button disabled={titleError || answersError} onClick={(e) => props.moveQuestion(e, false)}> Create Next Question &#187;</button>
      </div>
    </form>
  );
}

export default CreateQuestionForm;

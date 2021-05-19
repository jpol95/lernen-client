import React, { useEffect, useState } from "react";

function CreateQuestionForm(props) {
  const [answers, setAnswers] = useState(
    props.answers || new Array(4).fill("")
  );
  const [value, setValue] = useState(0);
  const [title, setTitle] = useState(props.title || "");
  const [error, setError] = useState([
    false,
    "Please fill in all required fields",
  ]);

  useEffect(() => {
    props.setQuestionList((questionList) => {
      // console.log(props.currentIndex)
      return questionList.map((question, index) => {
        if (props.currentIndex !== index) return question;
        return { answers, value, title };
      });
    });
  }, [answers, value, title]);

  const editAnswer = (e, i) => {
    let answersCopy = [...answers];
    answersCopy[i] = e.target.value;
    setAnswers(answersCopy);
  };

  const editTitle = (e) => {
    setTitle(e.target.value);
  };

  const editValue = (e) => {
    setValue(Number(e.target.value));
  };

  return (
    <form className="create-question">
      <div className="answer">
        {" "}
        <label htmlFor="title">Title </label>{" "}
        <input
          onChange={editTitle}
          defaultValue={title}
          id="title"
          type="text"
        />{" "}
      </div>
      <div className="answer">
        <label htmlFor="value">Value of question </label>
        <input
          defaultValue={value}
          id="value"
          onChange={editValue}
          type="number"
        />
      </div>
      <div className="answer">
        <label htmlFor="A">A </label>
        <input
          defaultValue={answers[0]}
          id="A"
          onChange={(e) => editAnswer(e, 0)}
          type="text"
        />
      </div>
      <div className="answer">
        <label htmlFor="B">B </label>
        <input
          defaultValue={answers[1]}
          id="B"
          onChange={(e) => editAnswer(e, 1)}
          type="text"
        />
      </div>
      <div className="answer">
        <label htmlFor="C">C </label>
        <input
          defaultValue={answers[2]}
          id="C"
          onChange={(e) => editAnswer(e, 2)}
          type="text"
        />{" "}
      </div>
      <div className="answer">
        <label htmlFor="D">D </label>
        <input
          defaultValue={answers[3]}
          id="D"
          onChange={(e) => editAnswer(e, 3)}
          type="text"
        />{" "}
      </div>
      <div className="quiz-buttons">
        <button> &#171; Previous Question </button>
        <button> Create Next Question &#187;</button>
      </div>
    </form>
  );
}

export default CreateQuestionForm;

import React from 'react';

function QuizView(props) {
    const findColor = (qIndex, aIndex) => {
        if (props.questions[qIndex].correct_answer === aIndex) return "green"
        if (props.sqrel.answers[qIndex] === aIndex) return "red"
        return ""
    }

    const findSymbol = (qIndex, aIndex) => {
      if (props.questions[qIndex].correct_answer === aIndex) return <div className="green symbol"> &#10004;</div>
      if (props.sqrel.answers[qIndex] === aIndex) return <div className="red symbol"> &#10006;</div>
      return ""
  }

    return (
        <ul className="quiz-view">
        {props.questions.map((question, index) => (
          <li key={question.id} className="question-view">
            {index + 1}. {question.title}
            <br />
            <form>
              {question.answers.split(",").map((answer, aIndex) => (
                <>
                {props.sqrel && findSymbol(index, aIndex)}
                  <input
                    className={!!props.sqrel ? "hidden": ""}
                    onChange={(e) => props.onAnswer(e, index)}
                    key={`answer${index}${aIndex}`}
                    name={`question${index}`}
                    type="radio"
                    id={`question${index}answer${aIndex}`}
                    value={aIndex}
                    disabled={!!props.selected}
                  />
                  <label className={props.sqrel ? findColor(index, aIndex) : ""} htmlFor={index}>
                    {" "}
                    {answer}
                  </label>
                  <br />
                </>
              ))}
            </form>
          </li>
        ))}
      </ul>
    );
}

export default QuizView;
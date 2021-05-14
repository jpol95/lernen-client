import React from 'react';

function QuizView(props) {
    const findColor = (aIndex) => {
        if (props.selected.correct_answer === aIndex) return "green"
        if (props.selected.attempted_answer === aIndex) return "red"
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
                  <input
                    onChange={(e) => props.onAnswer(e, index)}
                    key={`answer${index}${aIndex}`}
                    name={`question${index}`}
                    type="radio"
                    id={`question${index}answer${aIndex}`}
                    value={aIndex}
                    disabled={!!props.selected}
                  />
                  <label className={props.selected ? findColor(aIndex) : ""} htmlFor={index}>
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
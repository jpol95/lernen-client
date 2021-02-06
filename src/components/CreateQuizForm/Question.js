import React, { useEffect, useState } from "react";
import QuizApiService from "../../services/quiz-api-service";
import Button from "../Button/Button";
import { Input, Label, Textarea } from "../Form/Form";





function validateAnswerChoices(){

}

export default function Question(props) {
  function choiceArray() {
    let result = [];
    for (let i = 0; i < props.numChoices; i++) {
      result.push(
        <div className="answer-choice">
          <Input
            checked={props.correctAnswers.includes(i)}
            onClick={() =>
              props.setCorrectAnswers((prevList) => {
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
              props.setAnswers((choiceList) =>
                choiceList.map((current, index) => {
                  if (i !== index) return current;
                  else return { value: e.target.value, touched: true };
                })
              )
            }
            defaultValue={props.title}
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
        onChange={(e) => props.setTitle(e.target.value)}
      />
      {choiceArray()}
    </fieldset>
  );
}

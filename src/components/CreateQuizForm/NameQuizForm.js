import React, { useEffect, useState } from "react";
import QuizApiService from "../../services/quiz-api-service";
import Button from "../Button/Button";
import { Input, Label, Textarea } from "../Form/Form";


export default function NameQuizForm(props) {
    const [title, setTitle] = useState({ value: props.title, touched: false });
    const [setup, setSetup] = useState({ value: props.setup, touched: false });

    console.log(props)
  
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
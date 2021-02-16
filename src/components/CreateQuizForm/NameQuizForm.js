import React, { useEffect, useState } from "react";
import QuizApiService from "../../services/quiz-api-service";
import Button from "../Button/Button";
import { Input, Label, Textarea } from "../Form/Form";


export default function NameQuizForm(props) {
    const [title, setTitle] = useState({ value: props.title.value, touched: false });
    const [setup, setSetup] = useState({ value: props.setup.value, touched: false });
  
    function validateTitle() {
      if (title.value.length === 0)
        return <div className="error">Quiz must have a title</div>;
    }
  
    return (
      <form onSubmit={(e) => props.handleSubmit(e, title, setup)} className="quiz-form">
        <Label htmlFor="quiz-name">Name your new quiz</Label>
        <Input
          defaultValue={title.value}
          onChange={(e) => setTitle({ value: e.target.value, touched: true })}
          type="text"
        />
        {title.touched && validateTitle()}
        <Label htmlFor="setup">Setup</Label>
        <Textarea
          defaultValue={setup.value}
          onChange={(e) => setSetup({ value: e.target.value, touched: true })}
          id="setup"
        />
        <Label htmlFor="language">Language</Label>
        <datalist id="tags" type="text">
          
        </datalist> 
        <Button
          type="submit"
          disabled={validateTitle()}
          className="next-question"
        >
          Create Questions {">>"}
        </Button>
        <Button className="cancel-button">Cancel</Button>
      </form>
    );
  }
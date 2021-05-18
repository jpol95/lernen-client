import React, { useState } from 'react';

function CreateQuestionForm(props) {
    const [answers, setAnswers] = useState([null, null, null, null])
    const [value, setValue] = useState(0);
    const editAnswer = (e, i) => {
        setAnswers(answers => answers.map((answer, index) => {
            if (i !== index) return answer;
            return e.target.value;
        }))
    }
    
    return (
        <div className="create-question">
            <div className="answer"> <label htmlFor="title">Title </label> <input id="title" type="text" /> </div>
            <div className="answer"><label htmlFor="value">Value of question  </label><input id="value" onChange={(e) => {Number(e.target.value)}} type="number" /></div>
            <div className="answer"><label htmlFor="A">A </label><input id="A" onChange={(e) => editAnswer(0)} type="text" /></div>
            <div className="answer"><label htmlFor="B">B </label><input id="B" onChange={(e) => editAnswer(1)} type="text" /></div>
            <div className="answer"><label htmlFor="C">C </label><input id="C" onChange={(e) => editAnswer(2)} type="text" /> </div>
            <div className="answer"><label htmlFor="D">D </label><input id="D" onChange={(e) => editAnswer(3)} type="text" /> </div>
        </div>
    );
}

export default CreateQuestionForm;
import React, { useState } from 'react';
import CreateQuestionForm from '../CreateQuestionForm/CreateQuestionForm';

function CreateQuizForm(props) {
    const [setUp, setSetup] = useState("")

    return (
        <div className="create-quiz">
            SetUp: <textarea onChange={(e) => setSetup(e.target.value)} />
            <CreateQuestionForm />
            <button type="submit" > Finish Quiz </button>
            <button> &#171; Previous Question </button>
            <button> Create Next Question &#187;</button>
        </div>
    );
}

export default CreateQuizForm;
import React from 'react';
import CreateQuizForm from '../../components/CreateQuizForm/CreateQuizForm';
import './CreateQuiz.css'

function CreateQuizRoute(props){
    return <div className="create-quiz">
        <CreateQuizForm />
    </div>
}

export default CreateQuizRoute;
import React, { useEffect, useState } from 'react';
import QuestionApiService from '../../services/question-api-service';
import CreateQuestionForm from '../CreateQuestionForm/CreateQuestionForm';
// import '../../routes/CreateQuizRoute/CreateQuiz.css'

function CreateQuizForm(props) {
    const [setUp, setSetup] = useState("");
    const [questionList, setQuestionList] = useState([{}])
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        const loadData = async () => {
          const loadedQuestions = await QuestionApiService.getQuizQuestions(Number(props.match.params.quizId))
          setQuestionList(loadedQuestions)
        };
        if (props.match) loadData();
      }, []);

    const moveQuestion = async () => {
       
        setCurrentIndex(current => current + 1)
        if (currentIndex === questionList.length - 1) setQuestionList(questionList => [...questionList, {}])
        if (questionList[currentIndex].id !== undefined) await QuestionApiService.patchQuestion(questionList[currentIndex])
        else await QuestionApiService.postQuestion(questionList[currentIndex])
    }

    return (
        <div className="create-quiz">
           <label className="setup" htmlFor="setup"> SetUp: </label> <textarea id="setup" className="setup" onChange={(e) => setSetup(e.target.value)} />
            <CreateQuestionForm currentIndex={currentIndex} setQuestionList={setQuestionList} question={questionList[currentIndex]} />

            <button type="submit" > Finish Quiz </button>
            {console.log(questionList)}
        </div>
    );
}

export default CreateQuizForm;
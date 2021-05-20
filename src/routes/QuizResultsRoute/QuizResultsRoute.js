import React, { useEffect, useState } from 'react';
import QuizView from '../../components/QuizView/QuizView';
import QuestionApiService from '../../services/question-api-service';
import SqrelsService from '../../services/sqrels-api-service';
import '../QuizViewRoute/QuizView.css'

function QuizResultsRoute(props) {
    const [sqrel, setSqrel] = useState()
    const [questions, setQuestions] = useState()

    useEffect(() => {
        const loadData = async () => {
          const loadedSqrel = await SqrelsService.getSqrelById(Number(props.match.params.id))
          const loadedQuestions = await QuestionApiService.getQuizQuestions(loadedSqrel.quiz_id)
          setSqrel(loadedSqrel);
          setQuestions(loadedQuestions)
        };
        loadData();
      }, []);
      // console.log(sqrel, questions)
    return (
            <>
            <button onClick={() => props.history.goBack()}className="back-button">Back</button>
            {questions &&
            <>
            <QuizView sqrel={sqrel} questions={questions} />
            <div className="score">Score: {sqrel.score}/{questions.reduce((total, current) => total + current.value, 0)}</div>
            </>
            } 
            </>
   
    );
}

export default QuizResultsRoute;

//finish this thingy
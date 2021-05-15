import React, { useState } from 'react';
import QuizView from '../../components/QuizView/QuizView';
import QuestionApiService from '../../services/question-api-service';
import SqrelsService from '../../services/sqrels-api-service';

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
    return (
        <div>
            <QuizView sqrel={sqrel} questions={questions} />
        </div>
    );
}

export default QuizResultsRoute;

//finish this thingy
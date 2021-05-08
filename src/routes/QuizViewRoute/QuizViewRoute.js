import React, { useEffect, useState } from "react";
import QuestionApiService from "../../services/question-api-service";

export default function QuizViewRoute(props) {
    const [questions, setQuestions] = useState([])
    useEffect(() => {
        const loadData = async () => {
            setQuestions(await QuestionApiService.getQuizQuestions(props.match.params.id))
        }
        loadData()
    }, [])
    return <ul className="quiz-view">
        {questions.map(question => <li className="question-view">{question.title}</li>)}
    </ul>
}
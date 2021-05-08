import { useEffect, useState } from "react";
import QuestionApiService from "../../services/question-api-service";

export default function(props) {
    const [questions, setQuestions] = useState([])
    useEffect(() => {
        loadData = async () => {
            setQuestions(await QuestionApiService.getQuizQuestions(props.id))
        }
    }, [])
    return <ul>
        {questions.map(question => question.title)}
    </ul>
}
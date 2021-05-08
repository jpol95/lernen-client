import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function MyQuizzes(props) {
    console.log(props)
    return <>
    <ul className="myquizzes-list">
    {
    props.quizzes.map(quiz => <li className={"quiz-entry"} key={quiz.id}>{quiz.title}</li>)
    }
    </ul>
    </>
}
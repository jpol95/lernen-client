import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function MyQuizzes(props) {
    // console.log(props)
    return <>
    <ul className="myquizzes-list">
    {
    props.quizzes.map(quiz => <li className={"quiz-entry"} key={quiz.id}><Link to={`/quizview/${quiz.id}`}>{quiz.title}</Link></li>)
    }
    </ul>
    </>
}
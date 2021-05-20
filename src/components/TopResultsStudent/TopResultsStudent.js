import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function TopResultsStudent(props) {
    // console.log(props.scores)
    return <>
    <ul className={"mytopresults-list"}>
    {
    props.scores.map(score => <li className="score-entry" key={score.id}>
        {score.score}
        /{score.rating}
        /{score.date_completed}
        /<Link to={`/quiz-results/${score.id}`}>Attempt</Link>
        </li>)
    }
    </ul>
    </>
}

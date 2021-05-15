import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function TopResults(props) {
    // console.log(props)
    return <>
    <ul className={"mytopresults-list"}>
    {
    props.scores.map(score => <li className="score-entry" key={score.sqrelId}>
        {score.score}
        /{score.rating}
        /{score.date_completed}
        /<Link to={`/student/${score.student_id}`}>{score.fullname}</Link>
        </li>)
    }
    </ul>
    </>
}

//if you click the score maybe you can see what questions they got right and wrong, you would need to add that to the database
import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Link} from 'react-router-dom'
import UserContext from "../../contexts/UserContext";
import LanguageApiService from "../../services/language-api-service";
import '../../styles/db.css'
import thinking from '../../styles/thinking.png'
import quiz from '../../styles/quiz.png'
import H1 from '../../components/H1'
import QuizApiService from "../../services/quiz-api-service";
import { importQuizzes } from "../../reducers/quizzes/quizActions";
import { importScores } from "../../reducers/scores/scoreActions";
import SqrelsService from "../../services/sqrels-api-service";



function TeacherDashboardRoute(props){

const userContextObj = useContext(UserContext)
const dispatch = useDispatch();
const userId = props.match.params.id
const quizzes = useSelector(state => state.quizzes)
const scores = useSelector(state => state.scores)

console.log(userId)
const loadData = () => {
  dispatch(importQuizzes(QuizApiService.getQuiz(userId)))
  dispatch(importScores(SqrelsService.getQuizSqrels(userId)))
}
useEffect(loadData, [])
// console.log(quizzes);
// console.log(scores);
    return (
      <section className="teacher-dashboard">
        <H1>Welcome back, {userContextObj.user.name}</H1>
        <div className="dashboard-links">
          <div className="results">
           <p className="db-link-label"> My results </p> 
          <img src={thinking} />
          </div>
          <div className="quizzes">
            <p className="db-link-label"> My quizzes</p>
          <img src={quiz} />
          </div>
        </div>
        {/* <TopResults results={results}/>
        <MyQuizzes quizzes={quizzes}/> */}
      </section>
    )
}

export default TeacherDashboardRoute;

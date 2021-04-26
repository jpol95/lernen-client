import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Link} from 'react-router-dom'
import UserContext from "../../contexts/UserContext";
import LanguageApiService from "../../services/language-api-service";
import '../../styles/db.css'
import thinking from '../../styles/thinking.png'
import quiz from '../../styles/quiz.png'
import H1 from '../../components/H1'



function DashboardRoute(props){

const userContextObj = useContext(UserContext)
const languages = useSelector(state => state.languages)
const quizzes = useSelector(state => state.quizzes)
const dispatch = useDispatch();

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
        <TopResults />
        <MyQuizzes quizzes={quizzes}/>
      </section>
    )
}

export default DashboardRoute;

import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import UserContext from "../../contexts/UserContext";
import LanguageApiService from "../../services/language-api-service";
import "../../styles/db.css";
import thinking from "../../styles/thinking.png";
import quiz from "../../styles/quiz.png";
import H1 from "../../components/H1";
import QuizApiService from "../../services/quiz-api-service";
import { importQuizzes } from "../../reducers/quizzes/quizActions";
import { importScores } from "../../reducers/scores/scoreActions";
import SqrelsService from "../../services/sqrels-api-service";
import TopResultsStudent from "../../components/TopResultsStudent/TopResultsStudent";
import MyQuizzes from "../../components/MyQuizzes/MyQuizzes";
import SearchBar from "../../components/SearchBar/SearchBar";

function StudentDashboardRoute(props) {
  const userContextObj = useContext(UserContext);
  const dispatch = useDispatch();
  const userId = props.match.params.id;
  const [scores, setScores] = useState([]);
  useEffect(() => {
    const loadData = async () => {
      setScores(await SqrelsService.getStudentSqrels(userId));
      dispatch(importScores(scores));
    };
    loadData();
  }, []);

  // console.log(quizzes, scores, "hello")
  return (
    <section className="student-dashboard">
      <SearchBar history={props.history}/>
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
      <TopResultsStudent scores={scores} />
    </section>
  );
}

export default StudentDashboardRoute;

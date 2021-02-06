import React, { useContext } from "react";
import {Link} from 'react-router-dom'
import UserContext from "../../contexts/UserContext";


function DashboardRoute(props){

const user = useContext(UserContext)
    return (
      <section className="teacher-dashboard">
        <h2>Welcome back, {user.username}</h2>
        <div class="create-quiz">
        <Link to="/create-quiz" className="create-quiz-button">Create Quiz</Link>
        </div>
      </section>
    )
}

export default DashboardRoute;

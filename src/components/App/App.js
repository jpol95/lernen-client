import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "../Header/Header";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import PublicOnlyRoute from "../PublicOnlyRoute/PublicOnlyRoute";
import RegistrationRoute from "../../routes/RegistrationRoute/RegistrationRoute";
import LoginRoute from "../../routes/LoginRoute/LoginRoute";
import TeacherDashboardRoute from "../../routes/TeacherDashboardRoute/TeacherDashboardRoute";
import NotFoundRoute from "../../routes/NotFoundRoute/NotFoundRoute";
import CreateQuizRoute from "../../routes/CreateQuizRoute/CreateQuizRoute";

import "./App.css";
import Landing from "../../routes/LandingRoute/LandingRoute";
import QuizViewRoute from "../../routes/QuizViewRoute/QuizViewRoute";
import QuizResultsRoute from "../../routes/QuizResultsRoute/QuizResultsRoute";
import StudentDashboardRoute from "../../routes/StudentDashboardRoute/StudentDashboardRoute";

export default class App extends Component {
  state = { hasError: false, currentLoadedUser: 0 };

  static getDerivedStateFromError(error) {
    console.error(error);
    return { hasError: true };
  }

  render() {
    const { hasError } = this.state;
    return (
      <div className="App">
        <Header />
        <main>
          {hasError && <p>There was an error! Oh no!</p>}
          <Switch>
            <PrivateRoute path={"/quizview/:id"} component={QuizViewRoute} />
            <PrivateRoute path={"/quiz-results/:id"} component={QuizResultsRoute} />
            <PrivateRoute path={"/student/:id"} component={StudentDashboardRoute} />
            <PrivateRoute
              exact
              path={"/teacher/:id"}
              component={TeacherDashboardRoute}
            />
            <PrivateRoute
              exact
              path={"/create-quiz"}
              component={CreateQuizRoute}
            />
            <PublicOnlyRoute path={"/register"} component={RegistrationRoute} />
            <PublicOnlyRoute path={"/login"} component={LoginRoute} />
            <PublicOnlyRoute path={"/"} component={Landing} />
            <Route component={NotFoundRoute} />
          </Switch>
        </main>
      </div>
    );
  }
}

//you have to decide which route you're gonna go in terms of checking the currently loaded user

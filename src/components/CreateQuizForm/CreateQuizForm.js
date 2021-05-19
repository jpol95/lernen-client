import { faLanguage } from "@fortawesome/free-solid-svg-icons";
import React, { useContext, useEffect, useState } from "react";
import UserContext from "../../contexts/UserContext";
import { languagesObject } from "../../languages";
import QuestionApiService from "../../services/question-api-service";
import QuizApiService from "../../services/quiz-api-service";
import CreateQuestionForm from "../CreateQuestionForm/CreateQuestionForm";
// import '../../routes/CreateQuizRoute/CreateQuiz.css'

function CreateQuizForm(props) {
  const questionTemplate = { answers: ["", "", "", ""], value: 1, title: "" };
  const [setUp, setSetup] = useState("");
  const [questionList, setQuestionList] = useState([{ ...questionTemplate }]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [quiz, setQuiz] = useState(null);
  const [title, setTitle] = useState("Quiz");
  const [language, setLanguage] = useState(-1);
  const userContext = useContext(UserContext);
  const languages = Object.keys(languagesObject)
  languages.sort()

  useEffect(() => {
    const loadData = async () => {
      const loadedQuestions = await QuestionApiService.getQuizQuestions(
        Number(props.match.params.quizId)
      );
      const loadedQuiz = await QuizApiService.getQuiz(
        +props.match.params.quizId
      );
      setQuiz(loadedQuiz);
      setQuestionList(loadedQuestions);
    };
    if (props.match) loadData();
  }, []);

  const moveQuestion = async (back) => {
    setCurrentIndex((current) => current + 1 + -2 * +back);
    if (!quiz)
      await QuizApiService.postQuiz({
        title,
        language_id: faLanguage,
        teacher_id: userContext,
      });
    if (currentIndex === questionList.length - 1)
      setQuestionList((questionList) => [...questionList, questionTemplate]);
    if (questionList[currentIndex].id !== undefined)
      await QuestionApiService.patchQuestion(questionList[currentIndex]);
    else await QuestionApiService.postQuestion(questionTemplate);
  };
  console.log(questionList);
  return (
    <div className="create-quiz">
      <label className="setup" htmlFor="setup">
        {" "}
        SetUp:{" "}
      </label>{" "}
      <textarea
        id="setup"
        className="setup"
        onChange={(e) => setSetup(e.target.value)}
      />
      <label className="languages" for="languages">Languages:</label>
      <select
        onChange={(e) => setLanguage(+e.target.value)}
        name="languages"
        className="languages"
        id="languages"
      >
        <option></option>
        {console.log(languagesObject)}
        {languages.map((language) => 
          {
            return <option value={languagesObject[language]}>{language.charAt(0).toUpperCase() + language.substring(1, language.length)}</option>}
        )}
      </select>
      <CreateQuestionForm
        moveQuestion={moveQuestion}
        currentIndex={currentIndex}
        setQuestionList={setQuestionList}
        question={questionList[currentIndex]}
      />
      <button type="submit"> Finish Quiz </button>
      {console.log(questionList)}
    </div>
  );
}

export default CreateQuizForm;

//make a language input, then finish implementing the functionality of this.

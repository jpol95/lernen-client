import { faLanguage } from "@fortawesome/free-solid-svg-icons";
import React, { useContext, useEffect, useState } from "react";
import UserContext from "../../contexts/UserContext";
import { languagesObject } from "../../languages";
import QuestionApiService from "../../services/question-api-service";
import QuizApiService from "../../services/quiz-api-service";
import CreateQuestionForm from "../CreateQuestionForm/CreateQuestionForm";
// import '../../routes/CreateQuizRoute/CreateQuiz.css'

function CreateQuizForm(props) {
  const [questionTemplate, setQuestionTemplate] = useState({
    answers: ["", "", "", ""],
    value: 1,
    title: "",
  });
  const [setUp, setSetup] = useState("");
  const [questionList, setQuestionList] = useState([{ ...questionTemplate }]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [quiz, setQuiz] = useState(null);
  const [title, setTitle] = useState("Quiz");
  const [language, setLanguage] = useState(-1);
  const userContext = useContext(UserContext);
  const languages = Object.keys(languagesObject);
  languages.sort();

  useEffect(() => {
    const loadData = async () => {
      let loadedQuiz;
      if (props.match)
        loadedQuiz = await QuizApiService.getQuiz(+props.match.params.quizId);
      else
        loadedQuiz = await QuizApiService.postQuiz({
          teacher_id: userContext.user.id,
        });
      let loadedQuestions = await QuestionApiService.getQuizQuestions(
        loadedQuiz.id
      );
      let newQTemplate = { ...questionTemplate, quiz_id: loadedQuiz.id };
      if (loadedQuestions.length === 0) loadedQuestions.push(newQTemplate);
      setQuestionTemplate(newQTemplate);
      setQuestionList(loadedQuestions);
      setQuiz(loadedQuiz);
    };
    loadData();
  }, []);

  console.log(questionList)

  const moveQuestion = async (e, back, resetState) => {
    e.preventDefault()
    // console.log("Before")
    const updatedQuiz = await QuizApiService.patchQuiz(quiz.id, {
      ...quiz,
      title,
      setUp,
      language_id: language,
    });
    // console.log("After")
    if (questionList[currentIndex].id !== undefined) {
      // console.log("first")
      await QuestionApiService.patchQuestion(questionList[currentIndex]);
    } else {
      await QuestionApiService.postQuestion(questionList[currentIndex]);
    }
    if (currentIndex === questionList.length - 1) {
      setQuestionList((questionList) => [...questionList, questionTemplate]);
      resetState(questionTemplate)
    }
    resetState(questionList[currentIndex + 1 + -2 * +back] || questionTemplate)
    setCurrentIndex((current) => current + 1 + -2 * +back);
  };
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
      <label className="languages" for="languages">
        Languages:
      </label>
      <select
        onChange={(e) => setLanguage(+e.target.value)}
        name="languages"
        className="languages"
        id="languages"
      >
        <option></option>
        {/* {console.log(languagesObject)} */}
        {languages.map((language) => {
          return (
            <option key={languagesObject[language]} value={languagesObject[language]}>
              {language.charAt(0).toUpperCase() +
                language.substring(1, language.length)}
            </option>
          );
        })}
      </select>
      <CreateQuestionForm
        moveQuestion={moveQuestion}
        currentIndex={currentIndex}
        setQuestionList={setQuestionList}
        question={questionList[currentIndex]}
      />
      <button type="submit"> Finish Quiz </button>
    </div>
  );
}

export default CreateQuizForm;

//make a language input, then finish implementing the functionality of this.

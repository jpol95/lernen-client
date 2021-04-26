import { IMPORT_QUESTIONS } from "./questionTypes";

const initialState = {
  questions: [],
};

const quizReducer = (state, action) => {
  switch (action.type) {
    case IMPORT_QUIZZES:
      return {
        ...state,
        questions: action.payload,
      };
    default:
      return state;
  }
};

export default questionsReducer;

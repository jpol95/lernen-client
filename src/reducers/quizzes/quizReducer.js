import { IMPORT_QUIZZES } from "./quizTypes";

const initialState = {
  quizzes: [],
};

const quizReducer = (state = initialState, action) => {
  switch (action.type) {
    case IMPORT_QUIZZES:
      return {
        ...state,
        quizzes: action.payload,
      };
    default:
      return state;
  }
};

export default quizReducer;

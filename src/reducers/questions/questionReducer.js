import { IMPORT_QUESTIONS } from "./questionTypes";

const initialState = {
  questions: [],
};

const questionsReducer = (state, action) => {
  switch (action.type) {
    case IMPORT_QUESTIONS:
      return {
        ...state,
        questions: action.payload,
      };
    default:
      return state;
  }
};

export default questionsReducer;

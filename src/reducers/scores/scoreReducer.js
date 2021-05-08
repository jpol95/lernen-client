import { IMPORT_SCORES } from "./scoreTypes";

const initialState = {
  scores: [],
};

const scoreReducer = (state = initialState, action) => {
  switch (action.type) {
    case IMPORT_SCORES:
      return {
        ...state,
        scores: action.payload,
      };
    default:
      return state;
  }
};

export default scoreReducer;

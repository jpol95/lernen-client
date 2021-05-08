import languageReducer from './languages'
import scoreReducer from './scores/scoreReducer'
import quizReducer from './quizzes/quizReducer'
import questionsReducer from './questions/questionReducer'
import {combineReducers} from 'redux'

const allReducers = combineReducers({
    languageReducer, scoreReducer, quizReducer, questionsReducer
})

export default allReducers
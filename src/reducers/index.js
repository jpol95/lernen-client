import languageReducer from './languages'
import {combineReducers} from 'redux'

const allReducers = combineReducers({
    languages: languageReducer
})

export default allReducers
import { IMPORT_QUESTIONS } from './questionTypes'

export const importQuestions = (questions = []) => {
    return {
        type: IMPORT_QUESTIONS, 
        payload: questions
    }
}
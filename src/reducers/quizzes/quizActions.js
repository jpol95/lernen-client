import { IMPORT_QUESTIONS } from './questionTypes'

export const importQuizzes = (questions = []) => {
    return {
        type: IMPORT_QUESTIONS, 
        payload: questions
    }
}
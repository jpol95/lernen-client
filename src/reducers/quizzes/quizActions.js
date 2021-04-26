import { IMPORT_QUIZZES } from './questionTypes'

export const importQuizzes = (questions = []) => {
    return {
        type: IMPORT_QUIZZES, 
        payload: questions
    }
}
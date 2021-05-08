import { IMPORT_QUIZZES } from './quizTypes'

export const importQuizzes = (quizzes = []) => {
    return {
        type: IMPORT_QUIZZES, 
        payload: quizzes
    }
}
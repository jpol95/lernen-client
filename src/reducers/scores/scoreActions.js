import { IMPORT_SCORES } from './scoreTypes'

export const importScores = (scores = []) => {
    return {
        type: IMPORT_SCORES, 
        payload: scores
    }
}
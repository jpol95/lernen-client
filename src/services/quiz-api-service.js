import config from '../config'
import TokenService from './token-service'

const QuizApiService = {
  postQuiz(quiz) {

    return fetch(`${config.API_ENDPOINT}/quiz`,
    {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify(quiz)
    }).then(res =>
      (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
    )
  },
  patchQuiz(quiz, id) {
    return fetch(`${config.API_ENDPOINT}/quiz/${id}`,
    {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify(quiz)
    }).then(res =>
      (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
    )
  },
}

export default QuizApiService

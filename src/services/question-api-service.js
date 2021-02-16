import config from '../config'
import TokenService from './token-service'

const QuestionApiService = {
  postQuestion(question) {
    return fetch(`${config.API_ENDPOINT}/question`,
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
  patchQuiz(question) {
    return fetch(`${config.API_ENDPOINT}/question/${id}`,
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
  deleteQuestion(question) {
    return fetch(`${config.API_ENDPOINT}/question/${id}`,
    {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${TokenService.getAuthToken()}`,
      },
    })
  },
}

export default QuestionApiService

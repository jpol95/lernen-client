import config from '../config'
import TokenService from './token-service'

const QuestionApiService = {
  postQuestion(question) {
    return fetch(`${config.API_ENDPOINT}/question`,
    {
      method: 'POST',
      headers: {
        'authorization': `Bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify(quiz)
    }).then(res =>
      (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
    )
  },
  patchQuiz(question) {
    return fetch(`${config.API_ENDPOINT}/quiz/${id}`,
    {
      method: 'POST',
      headers: {
        'authorization': `Bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify(quiz)
    }).then(res =>
      (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
    )
  },
  deleteQuestion(question) {
    return fetch(`${config.API_ENDPOINT}/quiz/${id}`,
    {
      method: 'DELETE',
      headers: {
        'authorization': `Bearer ${TokenService.getAuthToken()}`,
      },
    })
  },
  refreshToken() {
    return fetch(`${config.API_ENDPOINT}/auth/token`, {
      method: 'PUT',
      headers: {
        'authorization': `Bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
}

export default QuestionApiService

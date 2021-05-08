import config from '../config'
import TokenService from './token-service'

const QuestionApiService = {
  getQuizQuestions(quizId){
    return fetch(`${config.API_ENDPOINT}/question/quiz/${quizId}`,
    {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${TokenService.getAuthToken()}`,
      },
    }).then(res =>
      (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
    )
  },
  postQuestion(question) {
    return fetch(`${config.API_ENDPOINT}/question`,
    {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify(question)
    }).then(res =>
      (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
    )
  },
  patchQuiz(question) {
    return fetch(`${config.API_ENDPOINT}/question/${question.id}`,
    {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify(question)
    }).then(res =>
      (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
    )
  },
  deleteQuestion(id) {
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

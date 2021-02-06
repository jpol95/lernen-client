import config from '../config'
import TokenService from './token-service'

const QuizApiService = {
  postQuiz(quiz) {
   
  },
  patchQuiz(quiz) {
    
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

export default QuizApiService

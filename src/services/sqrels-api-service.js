import config from '../config'
import TokenService from './token-service'

const SqrelsService = {
  getStudentSqrels(id) {
    return fetch(`${config.API_ENDPOINT}/student/${id}`)
    .then(res =>
      (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
    )
  },
  getQuizSqrels(id) {
    return fetch(`${config.API_ENDPOINT}/quiz/${id}`)
    .then(res =>
      (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
    )
  }

}

export default LanguageApiService;


//if you could be any mystical creature, which one would you be?
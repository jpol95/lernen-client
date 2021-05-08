import config from '../config'
import TokenService from './token-service'

const SqrelsService = {
  getStudentSqrels(id) {
    return fetch(`${config.API_ENDPOINT}/sqrels/student/${id}`)
    .then(res =>
      (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
    )
  },
  getQuizSqrels(id) {
    return fetch(`${config.API_ENDPOINT}/sqrels/quiz/${id}`)
    .then(res =>
      (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
    )
  }, 
  getTeacherSqrels(id) {
    return fetch(`${config.API_ENDPOINT}/sqrels/teacher/${id}`)
    .then(res =>
      (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
    )
  }

}

export default SqrelsService;


//if you could be any mystical creature, which one would you be?
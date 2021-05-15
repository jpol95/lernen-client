import config from '../config'
import TokenService from './token-service'

const SqrelsService = {
  postStudentSqrel(sqrel) {
    // console.log(sqrel)
    return fetch(`${config.API_ENDPOINT}/sqrels`,
    {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${TokenService.getAuthToken()}`,
      },
      body:  JSON.stringify(sqrel)
    }).then(res =>
      (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
    )
  },
  getStudentSqrels(id) {
    return fetch(`${config.API_ENDPOINT}/sqrels/student/${id}`)
    .then(res =>
      (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
    )
  },
  getSqrelById(id) {
    return fetch(`${config.API_ENDPOINT}/sqrels/${id}`)
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
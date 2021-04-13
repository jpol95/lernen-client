import config from '../config'
import TokenService from './token-service'

const LanguageApiService = {
  getStudentSqrels(role, id) {
    return fetch(`${config.API_ENDPOINT}/${role}/id`)
    .then(res =>
      (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
    )
  },

}

export default LanguageApiService;

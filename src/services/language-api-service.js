import config from '../config'
import TokenService from './token-service'

const LanguageApiService = {
  getAllLanguages() {
    return fetch(`${config.API_ENDPOINT}/languages`)
    .then(res =>
      (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
    )
  },

}

export default LanguageApiService;

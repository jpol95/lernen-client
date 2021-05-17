import config from '../config'
import TokenService from './token-service'

const UsersService = {
  getUsersByName(name) {
    return fetch(`${config.API_ENDPOINT}/user/name/${name}`)
    .then(res =>
      (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
    )
  },

}

export default UsersService;

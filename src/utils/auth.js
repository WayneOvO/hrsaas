import Cookies from 'js-cookie'

const TokenKey = 'IHRM_TOKEN'
const TIMESTAMP = 'IHRM_TIMESTAMP'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

export function getTimeStamp() {
  return Cookies.get(TIMESTAMP)
}

export function setTimeStamp(timeStamp) {
  return Cookies.set(TIMESTAMP, timeStamp)
}

import request from '@/utils/request.js'

export function login(data) {
  return request({
    url: '/sys/login',
    method: 'POST',
    data
  })
}

export function getInfo(token) {}

export function logout() {}

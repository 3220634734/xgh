import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/log?user='+JSON.stringify(data),
    method: 'get'
  })
}

export function getInfo(token) {
  return request({
    url: '/token?token='+token,
    method: 'get'
  })
}

export function logout() {
  return request({
    url: '/logout',
    method: 'post'
  })
}

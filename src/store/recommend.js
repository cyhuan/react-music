// import request from './request'
import request from '../services/request'


export function getTopBanners() {
  return request({
    url: '/banner'
  })
}
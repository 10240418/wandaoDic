import { request} from "../utils/request.js";
//获取标签
export function  getTag(data) {
  return request({
    url: '/api/commit/tag',
    method: 'get',
    data: data


  })
}
//新增类别
export function  addTag(data) {
  return request({
    url: '/api/commit/tag',
    method: 'post',
    data: data


  })
}
export function  addCategory(data) {
  return request({
    url: '/api/commit/category',
    method: 'post',
    data: data


  })
}

//获取类别
export function getCategory(data) {
  return request({
    url: '/api/commit/category',
    method: 'get',
    data: data
  })
}
//获取度量类型
export function getBase_conversion(data) {
  return request({
    url: '/api/commit/base_conversion',
    method: 'get',
    data: data
  })
}
//新增度量类型
export function addBase_conversion(data) {
  return request({
    url: '/api/commit/base_conversion',
    method: 'post',
    data: data
  })
}
export function addType(data){
  return request({
      uri:'/api/commit/base_conversion',
    method:'post',
      data:data
  })

}
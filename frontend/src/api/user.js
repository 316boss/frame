import axios from '@/libs/api.request'
import qs from 'qs'
export const login = ({ userName, password }) => {
  const data = {
    username: userName,
    password: password
  }

  return axios.request({
    url: 'user/login',
    auth: {
      username: 'awbeci',
      password: 'awbeci-secret'
    },
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic YXdiZWNpOmF3YmVjaS1zZWNyZXQ=',
      'Accept': 'application/json'
    },
    data: qs.stringify(data),
    // data: data,
    method: 'post'
  })
}

export const getUserInfo = (token) => {
  return axios.request({
    url: 'user/getUserInfo',
    params: {
      access_token: token
    },
    method: 'get'
  })
}

export const logout = (token) => {
  return axios.request({
    url: 'user/logout',
    method: 'post'
  })
}

export const getUnreadCount = () => {
  return axios.request({
    url: 'message/count',
    method: 'get'
  })
}

export const getMessage = () => {
  return axios.request({
    url: 'message/init',
    method: 'get'
  })
}

export const getContentByMsgId = msg_id => {
  return axios.request({
    url: 'message/content',
    method: 'get',
    params: {
      msg_id
    }
  })
}

export const hasRead = msg_id => {
  return axios.request({
    url: 'message/has_read',
    method: 'post',
    data: {
      msg_id
    }
  })
}

export const removeReaded = msg_id => {
  return axios.request({
    url: 'message/remove_readed',
    method: 'post',
    data: {
      msg_id
    }
  })
}

export const restoreTrash = msg_id => {
  return axios.request({
    url: 'message/restore',
    method: 'post',
    data: {
      msg_id
    }
  })
}

export const getUserList = (start, size) => {
  return axios.request({
    url: 'user/list',
    method: 'get',
    params: {
      start,
      size
    }
  })
}

export const getUserCount = () => {
  return axios.request({
    url: 'user/count',
    method: 'get'
  })
}

export const listPrivileges = () => {
  return axios.request({
    url: 'user/privileges',
    method: 'get'
  })
}

export const addUser = (name, password, privilege) => {
  return axios.request({
    url: 'user/add',
    method: 'get',
    params: {
      name, password, privilege
    }
  })
}

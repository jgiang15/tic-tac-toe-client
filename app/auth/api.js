const store = require('../store.js')
const config = require('../config')

const signUp = function (data) {
  console.log(config.apiUrl)
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-up',
    data
  })
}

const signIn = function (data) {
  console.log(config.apiUrl)
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-in',
    data
  })
}

const changePassword = function (data) {
  console.log(config.apiUrl)
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/change-password',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data
  })
}

const signOut = function (data) {
  console.log(config.apiUrl)
  return $.ajax({
    method: 'Delete',
    url: config.apiUrl + '/sign-out',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut
}

// const store = require('../store.js')

const onSignUpSuccess = function () {
  $('#auth-display').html('<p> Signed Up Successfully</p>')
  $('form').trigger('reset')
}
const onSignUpFailure = function () {
  $('#auth-display').html('<p>Sign Up Failed</p>')
}

const onSignInSuccess = function () {
  $('#auth-display').html('<p> Signed In Successfully</p>')
  $('form').trigger('reset')
}
const onSignInFailure = function () {
  $('#auth-display').html('<p>Sign In Failed</p>')
}

const onSignOutSuccess = function () {
  $('#auth-display').html('<p>Signed Out Successfully</p>')
  $('form').trigger('reset')
}
const onSignOutFailure = function () {
  $('#auth-display').html('<p>Sign Out Failed</p>')
}

const onChangePasswordSuccess = function () {
  $('#auth-display').html('<p>Password Changed Successfully</p>')
  $('form').trigger('reset')
}
const onChangePasswordFailure = function () {
  $('#auth-display').html('<p>Password Change Failed</p>')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignOutSuccess,
  onSignOutFailure
}

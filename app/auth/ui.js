// const store = require('../store.js')

const onSignUpSuccess = function () {
  $('#auth-display').html('<p>User Signed Up Successfully</p>')
  $('form').trigger('reset')
}
const onSignUpFailure = function () {
  $('#auth-display').html('<p>Sign Up Failed</p>')
}

const onSignInSuccess = function () {
  $('#auth-display').html('<p>User Signed In Successfully</p>')
  $('form').trigger('reset')
}
const onSignInFailure = function () {
  $('#auth-display').html('<p>Sign In Failed</p>')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure
}

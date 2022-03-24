// const store = require('../store.js')

const onSignUpSuccess = function () {
  $('#auth-display').html('<p>Sign Up SuccessFul</p>')
}
const onSignUpFailure = function () {
  $('#auth-display').html('<p>Sign Up Failed</p>')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure
}

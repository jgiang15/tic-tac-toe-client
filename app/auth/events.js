const authUi = require('./ui.js')
const authApi = require('./api.js')
const getFormFields = require('../../lib/get-form-fields.js')

const onSignUp = function (event) {
  event.preventDefault()
  console.log('i am here')

  // get the data from the form
  const form = event.target
  const data = getFormFields(form)
  console.log(data)

  authApi.signUp(data)
    .then(() => authUi.onSignUpSuccess())
    .catch(() => authUi.onSignUpFailure())
}

const onSignIn = function (event) {
  event.preventDefault()
  console.log('i am here')

  // get the data from the form
  const form = event.target
  const data = getFormFields(form)
  console.log(data)

  authApi.signIn(data)
    .then((response) => authUi.onSignInSuccess(response))
    .catch(() => authUi.onSignInFailure())
}

module.exports = {
  onSignUp,
  onSignIn
}

const authUi = require('./ui.js')
const authApi = require('./api.js')
const getFormFields = require('../../lib/get-form-fields.js')
const gameApi = require('../game/api.js')
const store = require('../store.js')

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
    .then(() => gameApi.newGame())
    .then((response) => { store.game = response.game })
    .catch(() => authUi.onSignInFailure())
}

const onChangePassword = function (event) {
  event.preventDefault()

  // get data from form
  const form = event.target
  const data = getFormFields(form)
  console.log(data)

  authApi.changePassword(data)
    .then((response) => authUi.onChangePasswordSuccess(response))
    .catch(() => authUi.onChangePasswordFailure())
}

const onSignOut = function () {
  authApi.signOut()
    .then(() => authUi.onSignOutSuccess())
    .catch(() => authUi.onSignOutFailure())
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut
}

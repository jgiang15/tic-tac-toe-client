const gameUi = ('./ui.js')
const gameApi = ('./api.js')
const getFormFields = ('../../lib/get-form-fields.js')

const onSignUp = function (event) {
  event.preventDefault()
  console.log('i am here')

  // get the data from the form
  const form = event.target
  const data = getFormFields(form)
  console.log(data)

  gameApi.signUp(data)
    .then(() => gameUi.onSignUpSuccess)
    .catch(() => gameUi.onSingUpFailure)
}

module.exports = {
  onSignUp
}

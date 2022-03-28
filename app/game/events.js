const gameApi = require('./api.js')
const gameUi = require('./ui.js')
// const getFormFields = require('../../lib/get-form-fields.js')

// const gameBoard = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']

const onNewGame = function (event) {
  //   const form = event.target
  //   const data = getFormFields(form)
  //   console.log(data)

  gameApi.newGame()
    .then(() => gameUi.onNewGameSuccess())
    .catch(() => gameUi.onNewGameFailure())
}

module.exports = {
  onNewGame
}

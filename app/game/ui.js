const store = require('../store.js')

const onNewGameSuccess = function (response) {
  // $('#game-display').html('<p>New Game Created</p>')
  $('#board').show()
  store.game = response.game
}

const onNewGameFailure = function () {
  $('#game-display').html('<p>Failed To Create Game</p>')
}

const onUpdateSuccess = function (response) {
  // $('#game-display').html('<p>Box Clicked Successfully</p>')
  store.game = response.game
//   console.log(store.game)
}

module.exports = {
  onNewGameSuccess,
  onNewGameFailure,
  onUpdateSuccess
}

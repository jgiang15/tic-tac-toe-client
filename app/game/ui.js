const onNewGameSuccess = function () {
  $('#game-display').html('<p>New Game Created</p>')
  $('#board').show()
}

const onNewGameFailure = function () {
  $('#game-display').html('<p>Failed To Create Game</p>')
}

module.exports = {
  onNewGameSuccess,
  onNewGameFailure
}

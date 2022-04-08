const config = require('../config')
const store = require('../store.js')

const newGame = function (data) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/games',
    // url: 'https://tic-tac-toe-api-development.herokuapp.com/games',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data
  })
}

const updateGame = function (index, value, gameOver) {
  // parameter index value gameover
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/games/' + store.game._id,

    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: {
      game: {
        cell: {
          index: index,
          value: value
        },
        over: gameOver
      }
    }
  })
}

module.exports = {
  newGame,
  updateGame
}

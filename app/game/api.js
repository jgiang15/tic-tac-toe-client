// const config = require('../config')

const newGame = function (data) {
//   console.log(config.apiUrl)
  return $.ajax({
    method: 'POST',
    // url: config.apiUrl + '/games'
    url: 'https://tic-tac-toe-api-development.herokuapp.com/games'
  })
}

module.exports = {
  newGame
}

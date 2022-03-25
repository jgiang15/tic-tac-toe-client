const config = require('../config')

const newGame = function (data) {
  console.log(config.apiUrl)
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/games'
  })
}

module.exports = {
  newGame
}

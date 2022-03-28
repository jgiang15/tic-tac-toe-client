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

const xTurn = 'x'
const circle = 'circle'

const cellElements = document.querySelectorAll('.cell')
let circleTurn

cellElements.forEach(cell => {
  cell.addEventListener('click', handleClick, { once: true })
})

function handleClick (event) {
  const cell = event.target
  const currentTurn = circleTurn ? circle : xTurn
  placeMark(cell, currentTurn)
}

function placeMark (cell, currentTurn) {
  cell.classList.add(currentTurn)
}
module.exports = {
  onNewGame
}

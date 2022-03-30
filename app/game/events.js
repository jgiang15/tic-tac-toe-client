const gameApi = require('./api.js')
const gameUi = require('./ui.js')
const store = require('../store.js')
// const getFormFields = require('../../lib/get-form-fields.js')

const onNewGame = function (event) {
  //   const form = event.target
  //   const data = getFormFields(form)
  //   console.log(data)

  gameApi.newGame()
    .then(() => gameUi.onNewGameSuccess())
    .catch(() => gameUi.onNewGameFailure())
}

// const xTurn = 'x'
// const circle = 'o'
// let circleTurn
let currentTurn = 'X'
// const over = false

const playerMove = function (event) {
  const cellIndex = event.target.getAttribute('data-cell-index')

  // cellIndex.forEach(cell => {
  //   cell.addEventListener('click', onClick, { once: true })
  // })
  // console.log('hello')
  // const cell = event.target
  //   const clickedCell = event.target
  const gameArray = store.game.cells
  //   const gameValue = store.game.cells.value

  console.log($(event.target).html())
  if ($(event.target).html() === '') {
    $(event.target).html(currentTurn)
    // store.game.cell.value = currentTurn
    gameArray[cellIndex] = currentTurn
    // store.game.cells.values = cellIndex
    // store.game.cell.index = cellIndex
    // gameValue.game.cells.value = currentTurn
  }
  console.log(gameArray)
  console.log(cellIndex)

  gameApi
    .updateGame(cellIndex, currentTurn, false)
    .then((response) => gameUi.onUpdateSuccess(response))
    //   function placeMark (cell, currentTurn) {
    //     cell.classList.add(currentTurn)
    //   }

  if (currentTurn === 'X') {
    currentTurn = 'O'
  } else {
    currentTurn = 'X'
  }
}
module.exports = {
  onNewGame,
  playerMove
}

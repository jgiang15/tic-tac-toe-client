const gameApi = require('./api.js')
const gameUi = require('./ui.js')
const store = require('../store.js')
// const getFormFields = require('../../lib/get-form-fields.js')

const onNewGame = function (event) {
  //   const form = event.target
  //   const data = getFormFields(form)
  //   console.log(data)

  $('.cell').on('click', playerMove)
  $('.cell').html('')
  $('#game-display').html(' ')

  currentTurn = 'X'

  gameApi.newGame()
    .then((response) => gameUi.onNewGameSuccess(response))
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

  const b0 = gameArray[0]
  const b1 = gameArray[1]
  const b2 = gameArray[2]
  const b3 = gameArray[3]
  const b4 = gameArray[4]
  const b5 = gameArray[5]
  const b6 = gameArray[6]
  const b7 = gameArray[7]
  const b8 = gameArray[8]

  if (b0 === 'X' && b1 === 'X' && b2 === 'X') {
    // console.log('Player X Wins')
    $('#game-display').html('<p>Player X Wins!</p>')
    $('.cell').off()
  } else if (b3 === 'X' && b4 === 'X' && b5 === 'X') {
    // console.log('Player X Wins')
    $('#game-display').html('<p>Player X Wins!</p>')
    $('.cell').off()
  } else if (b6 === 'X' && b7 === 'X' && b8 === 'X') {
    // console.log('Player X Wins')
    $('#game-display').html('<p>Player X Wins!</p>')
    $('.cell').off()
  } else if (b0 === 'X' && b4 === 'X' && b8 === 'X') {
    // console.log('Player X Wins')
    $('#game-display').html('<p>Player X Wins!</p>')
    $('.cell').off()
  } else if (b2 === 'X' && b4 === 'X' && b6 === 'X') {
    // console.log('Player X Wins')
    $('#game-display').html('<p>Player X Wins!</p>')
    $('.cell').off()
  } else if (b0 === 'X' && b3 === 'X' && b6 === 'X') {
    // console.log('Player X Wins')
    $('#game-display').html('<p>Player X Wins!</p>')
    $('.cell').off()
  } else if (b1 === 'X' && b4 === 'X' && b7 === 'X') {
    // console.log('Player X Wins')
    $('#game-display').html('<p>Player X Wins!</p>')
    $('.cell').off()
  } else if (b2 === 'X' && b5 === 'X' && b8 === 'X') {
    // console.log('Player X Wins')
    $('#game-display').html('<p>Player X Wins!</p>')
    $('.cell').off()
  } else if (b0 === 'O' && b1 === 'O' && b2 === 'O') {
    // console.log('Player O Wins')
    $('#game-display').html('<p>Player O Wins!</p>')
    $('.cell').off()
  } else if (b3 === 'O' && b4 === 'O' && b5 === 'O') {
    // console.log('Player O Wins')
    $('#game-display').html('<p>Player O Wins!</p>')
    $('.cell').off()
  } else if (b6 === 'O' && b7 === 'O' && b8 === 'O') {
    // console.log('Player O Wins')
    $('#game-display').html('<p>Player O Wins!</p>')
    $('.cell').off()
  } else if (b0 === '0' && b4 === 'O' && b8 === 'O') {
    // console.log('Player O Wins')
    $('#game-display').html('<p>Player O Wins!</p>')
    $('.cell').off()
  } else if (b2 === 'O' && b4 === 'O' && b6 === 'O') {
    // console.log('Player O Wins')
    $('#game-display').html('<p>Player O Wins!</p>')
    $('.cell').off()
  } else if (b0 === 'O' && b3 === 'O' && b6 === 'O') {
    // console.log('Player O Wins')
    $('#game-display').html('<p>Player O Wins!</p>')
    $('.cell').off()
  } else if (b1 === 'O' && b4 === 'O' && b7 === 'O') {
    // console.log('Player O Wins')
    $('#game-display').html('<p>Player O Wins!</p>')
    $('.cell').off()
  } else if (b2 === 'O' && b5 === 'O' && b8 === 'O') {
    // console.log('Player O Wins')
    $('#game-display').html('<p>Player O Wins!</p>')
    $('.cell').off()
  } else if (!store.game.cells.includes('')) {
    $('#game-display').html('<p>Its a TIE!</p>')
  } else {}

  // for (let i = 0; i < gameArray.length; i++) {
  //   if (gameArray.includes('X' || 'O')) {
  //     $('#game-display').html('<p>Its a Tie</p>')
  //   } else {}
  // }
}
module.exports = {
  onNewGame,
  playerMove
}

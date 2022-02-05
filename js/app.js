/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/
let board, turn, winner, playerX, playerO


/*------------------------ Cached Element References ------------------------*/
const sqZero = document.getElementById("sq0")
const sqOne = document.getElementById("sq1")
const sqTwo = document.getElementById("sq2")
const sqThree = document.getElementById("sq3")
const sqFour = document.getElementById("sq4")
const sqFive = document.getElementById("sq5")
const sqSix = document.getElementById("sq6")
const sqSeven = document.getElementById("sq7")
const sqEight = document.getElementById("sq8")
const gameStat


/*----------------------------- Event Listeners -----------------------------*/



/*-------------------------------- Functions --------------------------------*/
init() {
// 3.2.1) Initialize the board array to 9 nulls to represent empty squares. The 9 elements will "map" to each square. Index 0 represents the top-left square. Index 1 represents the top-middle square. So on, continuing through the entire board until Index 8 maps to the bottom-right square.
  let board = [null, null, null, null, null, null, null, null]
// 3.2.2) Initialize whose turn it is to 1 (player 'X'). Player 'O' will be represented by -1. Initialize the winner variable to null. This represents that there is no winner or tie yet. The winner variable will hold the player value (1 or -1) if there's a winner. The winner will hold a 'T' if there's a tie.
  let playerX = 1
  let playerO = -1 
  let winner = null
}

render() {

}
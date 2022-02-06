/*-------------------------------- Constants --------------------------------*/
const winningCombos = [
  [0,1,2], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6], [3,4,5], [6,7,8]
]



/*---------------------------- Variables (state) ----------------------------*/
let board, turn, winner, playerX, playerO


/*------------------------ Cached Element References ------------------------*/
const squares = document.querySelectorAll(".square")
console.log(squares)
const gameStat = null

/*----------------------------- Event Listeners -----------------------------*/
squares.forEach(square => square.addEventListener("click", handleClick))

/*-------------------------------- Functions --------------------------------*/
init() 

function init() {
  // 3.2.1) Initialize the board array to 9 nulls to represent empty squares. The 9 elements will "map" to each square. Index 0 represents the top-left square. Index 1 represents the top-middle square. So on, continuing through the entire board until Index 8 maps to the bottom-right square.
  board = [
    null, null, null, 
    null, null, null, 
    null, null, null]
  // 3.2.2) Initialize whose turn it is to 1 (player 'X'). Player 'O' will be represented by -1. Initialize the winner variable to null. This represents that there is no winner or tie yet. The winner variable will hold the player value (1 or -1) if there's a winner. The winner will hold a 'T' if there's a tie.
  turn = 1
  playerX = 1
  playerO = -1 
  winner = null

}

function handleClick(evt) {
  const index = evt.target.id.replace('sq', '')
  board[index] = turn
  console.log(board)
}


// render() 

// 3.3.1) Loop over the board array (which represents the squares on the page), and for each iteration: 3.3.1.1) Use the index of the iteration to access the square in the squares array that corresponds with the current cell being iterated over in the board array

// board.forEach(function(square){
//   board[0] = square [0]
// })

// if(winner === 1){
//   return "X wins!"
// } else if (winner === -1) {
//   return "O wins!"
// } else if (winner === "T"){
//   return "There's a tie!"
// }

// getWinner ()
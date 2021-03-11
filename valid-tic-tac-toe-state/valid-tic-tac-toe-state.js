var validTicTacToe = function(board) {
    
const winningPositions = [
  //left to right
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  //top to bottom
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  //diagonals
  [0, 4, 8],
  [2, 4, 6],
];

let xCount = 0;
let oCount = 0;
let xPositions = [];
let oPositions = [];
    
let tttString = board.join('');
 
    for (let i = 0; i < tttString.length; i++) {
        let thisT = tttString[i]; 
        if (thisT === 'X') {
            xPositions.push(i);
            xCount++;
        } else if (thisT === 'O') {
            oCount++;
            oPositions.push(i);
        }
    }
    
    let diff = xCount - oCount;
    
    if (diff > 1 || diff < 0) {
        return false;
    }
    
    let xWins = winningPositions.some((e) => e.every(f => xPositions.includes(f)));
    let oWins = winningPositions.some((e) => e.every(f => oPositions.includes(f)));
    
    if (xWins && oWins) {
        return false;
    } else if (xWins && diff === 0 || oWins && diff === 1) {
        return false;
    } else {
        return true;
    }
};
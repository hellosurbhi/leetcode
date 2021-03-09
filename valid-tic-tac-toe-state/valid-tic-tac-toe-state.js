/**
 * @param {string[]} board
 * @return {boolean}
 */
var validTicTacToe = function(board) {
      console.log('board: ', board)
    
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
]

let xCount = 0;
let yCount = 0;
let xPositions = [];
let yPositions = [];
    
let tttString = board.join('')
console.log('tttString: ', tttString)
    

    for (let i = 0; i < tttString.length; i++) {
        let thisT = tttString[i] 
        if (thisT === 'X') {
            xPositions.push(i)
            xCount++
        } else if (thisT === 'O') {
            yCount++
            yPositions.push(i)
        }
        
    }
    
    console.log('xCount: ', xCount)
    console.log('yCount: ', yCount)
    console.log('xPositions: ', xPositions)
    console.log('yPositions', yPositions)
    
    let diff = xCount - yCount
    
    console.log('diff: ', diff)
    
    if (diff > 1 || diff < 0) {
        console.log('inside if', diff !== 1 || diff !== 0)
        return false 
    }
    
    let xWins = winningPositions.some((e) => e.every(f => xPositions.includes(f)))
    let yWins = winningPositions.some((e) => e.every(f => yPositions.includes(f)))
    
    console.log('first param', xWins)            
    console.log('second param', yWins)
    console.log('conditional', xWins ^ yWins)
            
    
    if (xWins && yWins) {
        console.log('inside second if')
        return false
    } else if (xWins && diff === 0 || yWins && diff === 1) {
        return false
    } else {
                console.log('inside second else')
        return true
    }

        
        //winningPositions.some((e) => e.every(f => xPositions.includes(f)))
        
        
        //let checker = (arr, target) => target.every(v => arr.includes(v));
        //array.some((element) => element % 2 === 0)
    
};


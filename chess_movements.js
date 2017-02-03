let PIECE = require('./Piece');

let BOARD = require('./config/tests/boards');

let PIECECOLOR = require("./config/pieceColor");

let PIECEDATA = require('./config/pieceData');

let i = 0;
let j = 0;

let mapThroughAllPieces = function (board, color) {
  let outputJSON = {};
  board.map(function(rowBased) {
    if(typeof rowBased != 'undefined' && rowBased != null) {
      rowBased.map(function(columnBased) {
        if(typeof columnBased != 'undefined' && columnBased != null) {
          if(PIECECOLOR.getColor(columnBased) === color) {
            // console.log("Piece at (" + i + ', ' + j + ') : ' + columnBased);
            let pieceInfo = PIECEDATA[columnBased];
            outputJSON[columnBased] = piece.getPossibleMovements(columnBased,i,j);
            // console.log("\b");
          }
        }
        j++;
      });
    }
    i++;
    j=0;
  });
  // console.log("outputJSON", outputJSON);
  return outputJSON;
}

// if no value is sent as parameter to getBoard()
// it would return a board by randomly selecting within the pool of boards
// let board = BOARD.getBoard();

let board = BOARD.getBoard(2);
console.log("THIS IS THE BOARD");
console.log("\b");
console.log(board);
console.log("\b");
let piece = new PIECE(board);

// This is where we can specify the player (White/Black)
console.log(mapThroughAllPieces(board, "White"));

// Whites: All UpperCase

// Blacks: All LowerCase

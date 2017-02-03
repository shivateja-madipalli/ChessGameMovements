let ALLPIECES = require('./config/AllPieces');
let PIECEDATA = require('./config/pieceData');
let TOOLSBOX = require('./config/toolsBox');

let board = null;

let allPieces = null;

let toolsBox = new TOOLSBOX();

/*
  This is where the whole exection starts
*/
function Piece(current_board) {
  // pieceType = piece_type;
  board = current_board;
  allPieces = new ALLPIECES(board);
  // console.log("board", board);
  // ALLPIECES.initializeBoard(board);

  return {
      getPossibleMovements : function(pieceType, curX, curY, color) {

       pieceTypeName = toolsBox.getElementName(pieceType);

       if(pieceTypeName == "Rook") {
         return allPieces.RookMovements(pieceType, curX, curY);
       }

       else if(pieceTypeName == "Bishop") {
         return allPieces.BishopMovements(pieceType, curX, curY);
       }

       else if(pieceTypeName == "King") {
         return allPieces.KingMovements(pieceType, curX, curY);
       }

       else if(pieceTypeName == "Queen") {
         return allPieces.QueenMovements(pieceType, curX, curY);;
       }

       else if(pieceTypeName == "Knight") {
         return allPieces.KnightMovements(pieceType, curX, curY);
       }

       else if(pieceTypeName == "Pawn") {
         return allPieces.PawnMovements(pieceType, curX, curY);;
       }
     }
  }

};

exports = module.exports = Piece;

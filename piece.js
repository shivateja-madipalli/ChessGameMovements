let ALLPIECES = require('./config/AllPieces');
let PIECEDATA = require('./config/pieceData');
let TOOLSBOX = require('./config/toolsBox');

var board = null;

function Piece(current_board) {
  // pieceType = piece_type;
  board = current_board;
  // console.log("board", board);
  ALLPIECES.initializeBoard(board);
}

/*
  This is where the whole exection starts
*/

Piece.prototype.getPossibleMovements = function(pieceType, curX, curY, color) {

  pieceTypeName = TOOLSBOX.getElementName(pieceType);

  if(pieceTypeName == "Rook") {
    return ALLPIECES.RookMovements(pieceType, curX, curY);
  }

  else if(pieceTypeName == "Bishop") {
    return ALLPIECES.BishopMovements(pieceType, curX, curY);
  }

  else if(pieceTypeName == "King") {
    return ALLPIECES.KingMovements(pieceType, curX, curY);
  }

  else if(pieceTypeName == "Queen") {
    return ALLPIECES.QueenMovements(pieceType, curX, curY);;
  }

  else if(pieceTypeName == "Knight") {
    return ALLPIECES.KnightMovements(pieceType, curX, curY);
  }

  else if(pieceTypeName == "Pawn") {
    return ALLPIECES.PawnMovements(pieceType, curX, curY);;
  }
};

module.exports = Piece;

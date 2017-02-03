let globalBoard = null;
let PIECECOLOR = require("./pieceColor");
let PIECEDATA = require('./pieceData');

let TOOLSBOX = require('./toolsBox');

let PieceColor = new PIECECOLOR();
let toolsBox = new TOOLSBOX();

function allPieces(board) {
  globalBoard = board;
  return {
      initializeBoard: function initializeBoard(board) {
        globalBoard = board;
      },

      // This method returns All Rook Movements with the rules applied
      RookMovements: function RookMovements(rook, curX, curY) {
        // console.log("Rook Movements called");
        // Rook has 4 directional movements
        // console.log(toolsBox.getElementName(pieceType));
        boardSetup = globalBoard;
        let rookColor = PieceColor.getColor(rook);
        let opponentColor = PieceColor.getOpponentColor(rookColor);
        // first visiting all x-1, y .... x-8, y
        let output = [];
        let result = '';
        for(var i=curX-1;i>-1;i--) {
          if(typeof boardSetup[i][curY] === 'undefined' || boardSetup[i][curY] === null) {
            // result +=  CONSTANTS.Arrow + '(' i + ', ' + curY + ')';
            result += this.createPath(i,curY);
          }
          else {
            let pieceColor = PieceColor.getColor(boardSetup[i][curY]);
            let pieceType = boardSetup[i][curY];
            if(pieceColor === opponentColor) {
              // result += '-> ' + 'capture ' + pieceColor + ' ' +toolsBox.getElementName(pieceType);
              result += this.createCaptureMessage(pieceColor, toolsBox.getElementName(pieceType), i, curY);
            }
            else {
              // result += '-> ' + 'hit the same color piece ';
              result += this.createHitSameColorMessage(pieceColor, toolsBox.getElementName(pieceType), i, curY);
            }
            break;
          }
          if(i == 0) {
            // result += '-> ' + 'hit the end ';
            result += this.createHitEndMessage();
          }
        }
        if(result) {
          output.push(result);
        }
        result = '';
        for(var i=curX+1;i<8;i++) {
          if(typeof boardSetup[i][curY] === 'undefined'|| boardSetup[i][curY] === null) {
            // result += i + ', ' + curY + ' -> ';
            result += this.createPath(i,curY);
          }
          else {
            let pieceColor = PieceColor.getColor(boardSetup[i][curY]);
            let pieceType = boardSetup[i][curY];
            if(pieceColor === opponentColor) {
              // result += 'capture ' + pieceColor + ' ' +toolsBox.getElementName(pieceType);
              result += this.createCaptureMessage(pieceColor, toolsBox.getElementName(pieceType), i, curY);
            }
            else {
              // result += 'hit the same color piece ';
              result += this.createHitSameColorMessage(pieceColor, toolsBox.getElementName(pieceType), i, curY);
            }
            break;
          }
          if(i == 7) {
            // result += 'hit the end ';
            result += this.createHitEndMessage();
          }
        }
        if(result) {
          output.push(result);
        }

        result = '';
        for(var i=curY-1;i>-1;i--) {
          if(typeof boardSetup[curX][i] === 'undefined' || boardSetup[curX][i] === null) {
            // result += curX + ', ' + i + ' -> ';
            result += this.createPath(curX,i);
          }
          else {
            let pieceColor = PieceColor.getColor(boardSetup[curX][i]);
            let pieceType = boardSetup[curX][i];
            if(pieceColor === opponentColor) {
              // result += 'capture ' + pieceColor + ' ' +toolsBox.getElementName(pieceType);
              result += this.createCaptureMessage(pieceColor, toolsBox.getElementName(pieceType), curX, i);
            }
            else {
              // result += 'hit the same color piece ';
              result += this.createHitSameColorMessage(pieceColor, toolsBox.getElementName(pieceType), curX, i);
            }
            break;
          }
          if(i == 0) {
            // result += 'hit the end ';
            result += this.createHitEndMessage();
          }
        }
        if(result) {
          output.push(result);
        }

        result = '';
        for(var i=curY+1;i<8;i++) {
          if(typeof boardSetup[curX][i] === 'undefined' || boardSetup[curX][i] === null) {
            // result += curX + ', ' + i + ' -> ';
            result += this.createPath(curX,i);
          }
          else {
            let pieceColor = PieceColor.getColor(boardSetup[curX][i]);
            let pieceType = boardSetup[curX][i];
            if(pieceColor === opponentColor) {
              // result += 'capture ' + pieceColor + ' ' +toolsBox.getElementName(pieceType);
              result += this.createCaptureMessage(pieceColor, toolsBox.getElementName(pieceType), curX, i);
            }
            else {
              // result += 'hit the same color piece ';
              result += this.createHitSameColorMessage(pieceColor, toolsBox.getElementName(pieceType), curX, i);
            }
            break;
          }
          if(i == 7) {
            // result += 'hit the end ';
            result += this.createHitEndMessage();
          }
        }
        if(result) {
          output.push(result);
        }
        return output;
      },

      // This method returns All Bishop Movements with the rules applied
      BishopMovements: function BishopMovements(bishop, curX, curY) {
        // Bishop has 4 directional movements

        // console.log(toolsBox.getElementName(pieceType));
        let bishopColor = PieceColor.getColor(bishop);
        let opponentColor = PieceColor.getOpponentColor(bishopColor);

        boardSetup = globalBoard;

        let output = [];
        let result = '';
        let i=0;
        let j=0;

        // curX+1, curY-1;
        result = '';
        i=curX+1;
        j=curY-1;
        while(i<8 && j>-1) {
          if(typeof boardSetup[i][j] === 'undefined' || boardSetup[i][j] === null) {
            // result += i + ', ' + j + ' -> ';
            result += this.createPath(i,j);
          }
          else {
            let pieceColor = PieceColor.getColor(boardSetup[i][j]);
            let pieceType = boardSetup[i][j];
            if(pieceColor === opponentColor) {
              // result += 'capture ' + pieceColor + ' ' + toolsBox.getElementName(pieceType);
              result += this.createCaptureMessage(pieceColor, toolsBox.getElementName(pieceType), i, j);
            }
            else {
              // result += 'hit the same color piece ';
              result += this.createHitSameColorMessage(pieceColor, toolsBox.getElementName(pieceType), i, curY);
            }
            break;
          }
          if(i == 7 || j == 0) {
            // result += 'hit the end ';
            result += this.createHitEndMessage();
          }
          i=i+1;
          j=j-1;
        }
        // console.log("X+1, Y-1", result);
        if(result) {
          output.push(result);
        }

        // curX-1, curY+1;
        result = '';
        i=curX-1;
        j=curY+1;
        while(i>-1 && j<8) {
          if(typeof boardSetup[i][j] === 'undefined' || boardSetup[i][j] === null) {
            // result += i + ', ' + j + ' -> ';
            result += this.createPath(i,j);
          }
          else {
            let pieceColor = PieceColor.getColor(boardSetup[i][j]);
            let pieceType = boardSetup[i][j];
            if(pieceColor === opponentColor) {
              // result += 'capture ' + pieceColor + ' ' + toolsBox.getElementName(pieceType);
              result += this.createCaptureMessage(pieceColor, toolsBox.getElementName(pieceType), i, j);
            }
            else {
              // result += 'hit the same color piece ';
              result += this.createHitSameColorMessage(pieceColor, toolsBox.getElementName(pieceType), i, curY);
            }
            break;
          }
          if(i == 0 || j == 7) {
            // result += 'hit the end ';
            result += this.createHitEndMessage();
          }
          i=i-1;
          j=j+1;
        }
        // console.log("X-1, Y+1", result);
        if(result) {
          output.push(result);
        }

        // curX-1, curY-1;
        result = '';
        i=curX-1;
        j=curY-1;
        while(i>-1 && j>-1) {
          if(typeof boardSetup[i][j] === 'undefined' || boardSetup[i][j] === null) {
            // result += i + ', ' + j + ' -> ';
            result += this.createPath(i,j);
          }
          else {
            let pieceColor = PieceColor.getColor(boardSetup[i][j]);
            let pieceType = boardSetup[i][j];
            if(pieceColor === opponentColor) {
              // result += 'capture ' + pieceColor + ' ' + toolsBox.getElementName(pieceType);
              result += this.createCaptureMessage(pieceColor, toolsBox.getElementName(pieceType), i, j);
            }
            else {
              // result += 'hit the same color piece ';
              result += this.createHitSameColorMessage(pieceColor, toolsBox.getElementName(pieceType), i, curY);
            }
            break;
          }
          if(i == 0 || j == 0) {
            // result += 'hit the end ';
            result += this.createHitEndMessage();
          }
          i=i-1;
          j=j-1;
        }
        // console.log("X-1, Y-1", result);
        if(result) {
          output.push(result);
        }

        // curX+1, curY+1;
        result = '';
        i=curX+1;
        j=curY+1;
        while(i<8 && j<8) {
          if(typeof boardSetup[i][j] === 'undefined' || boardSetup[i][j] === null) {
            // result += i + ', ' + j + ' -> ';
            result += this.createPath(i,j);
          }
          else {
            let pieceColor = PieceColor.getColor(boardSetup[i][j]);
            let pieceType = boardSetup[i][j];
            if(pieceColor === opponentColor) {
              // result += 'capture ' + pieceColor + ' ' + toolsBox.getElementName(pieceType);
              result += this.createCaptureMessage(pieceColor, toolsBox.getElementName(pieceType), i, j);
            }
            else {
              // result += 'hit the same color piece ';
              result += this.createHitSameColorMessage(pieceColor, toolsBox.getElementName(pieceType), i, curY);
            }
            break;
          }
          if(i == 7 || j == 7) {
            // result += 'hit the end ';
            result += this.createHitEndMessage();
          }
          i=i+1;
          j=j+1;
        }
        // console.log("X+1, Y+1", result);
        if(result) {
          output.push(result);
        }
        return output;
      },

      // This method returns All Queen(Rook+Bishop) Movements with the rules applied
      QueenMovements: function QueenMovements(pieceType, curX, curY) {
        // console.log(toolsBox.getElementName(pieceType));
        let output = this.RookMovements(pieceType, curX, curY);
        output.concat(this.BishopMovements(pieceType, curX, curY));
        return output;
      },

      // This method returns All King Movements with the rules applied
      KingMovements: function KingMovements(king, curX, curY) {
        // console.log(toolsBox.getElementName(pieceType));

        let kingColor = PieceColor.getColor(king);
        let opponentColor = PieceColor.getOpponentColor(kingColor);

        boardSetup = globalBoard;


        let output = [];
        let result = null;
        result = '';
        // (i-1, j)
        // console.log("curX-1", curX-1);
        if(curX-1 != -1) {
          if(typeof boardSetup[curX-1][curY] === 'undefined' || boardSetup[curX-1][curY] === null) {
            // result += (curX-1) + ', ' + curY;
            result += this.createPath(curX-1,curY);
          }
          else {
            let pieceColor = PieceColor.getColor(boardSetup[curX-1][curY]);
            let pieceType = boardSetup[curX-1][curY];
            if(pieceColor === opponentColor) {
              // result += 'capture ' + pieceColor + ' ' + toolsBox.getElementName(pieceType);
              result += this.createCaptureMessage(pieceColor, toolsBox.getElementName(pieceType), (curX-1), curY);
            }
            else {
              // result += 'hit the same color piece ';
              result += this.createHitSameColorMessage(pieceColor, toolsBox.getElementName(pieceType), (curX-1), curY);
            }
          }
        }
        else {
          result += this.createHitEndMessage();
        }
        output.push(result);

        // (i-1, j-1)
        result = '';
        if(curX-1 != -1 && curY-1 != -1) {
          if(typeof boardSetup[curX-1][curY-1] === 'undefined' || boardSetup[curX-1][curY-1] === null) {
            // result += (curX-1) + ', ' + (curY-1);
            result += this.createPath(curX-1,curY-1);
          }
          else {
            let pieceColor = PieceColor.getColor(boardSetup[curX-1][curY-1]);
            let pieceType = boardSetup[curX-1][curY-1];
            if(pieceColor === opponentColor) {
              // result += 'capture ' + pieceColor + ' ' + toolsBox.getElementName(pieceType);
              result += this.createCaptureMessage(pieceColor, toolsBox.getElementName(pieceType), (curX-1), (curY-1));
            }
            else {
              // result += 'hit the same color piece ';
              result += this.createHitSameColorMessage(pieceColor, toolsBox.getElementName(pieceType), (curX-1), (curY-1));
            }
          }
          // console.log("curX-1 != -1 && curY-1 != -1", result);
        }
        else {
          result += this.createHitEndMessage();
        }
        output.push(result);

        // (i, j-1)
        result = '';
        if(curY-1 != -1) {
          if(typeof boardSetup[curX][curY-1] === 'undefined' || boardSetup[curX][curY-1] === null) {
            // result += (curX) + ', ' + (curY-1);
            result += this.createPath(curX,curY-1);
          }
          else {
            let pieceColor = PieceColor.getColor(boardSetup[curX][curY-1]);
            let pieceType = boardSetup[curX][curY-1];
            if(pieceColor === opponentColor) {
              // result += 'capture ' + pieceColor + ' ' + toolsBox.getElementName(pieceType);
              result += this.createCaptureMessage(pieceColor, toolsBox.getElementName(pieceType), (curX), (curY-1));
            }
            else {
              // result += 'hit the same color piece ';
              result += this.createHitSameColorMessage(pieceColor, toolsBox.getElementName(pieceType), (curX), (curY-1));
            }
          }
          // console.log("curY-1 != -1", result);
        }
        else {
          result += this.createHitEndMessage();
        }
        output.push(result);

        // (i+1, j-1)
        result = '';
        if(curX+1 != 8 && curY-1 != -1) {
          if(typeof boardSetup[curX+1][curY-1] === 'undefined' || boardSetup[curX+1][curY-1] === null) {
            // result += (curX+1) + ', ' + (curY-1);
            result += this.createPath(curX+1,curY-1);
          }
          else {
            let pieceColor = PieceColor.getColor(boardSetup[curX+1][curY-1]);
            let pieceType = boardSetup[curX+1][curY-1];
            if(pieceColor === opponentColor) {
              // result += 'capture ' + pieceColor + ' ' + toolsBox.getElementName(pieceType);
              result += this.createCaptureMessage(pieceColor, toolsBox.getElementName(pieceType), (curX+1), (curY-1));
            }
            else {
              // result += 'hit the same color piece ';
              result += this.createHitSameColorMessage(pieceColor, toolsBox.getElementName(pieceType), (curX+1), (curY-1));
            }
          }
          // console.log("curX+1 != 8 && curY-1 != -1", result);
        }
        else {
          result += this.createHitEndMessage();
        }
        output.push(result);

        // (i+1, j)
        result = '';
        if(curX+1 != 8) {
          if(typeof boardSetup[curX+1][curY] === 'undefined' || boardSetup[curX+1][curY] === null) {
            // result += (curX+1) + ', ' + curY;
            result += this.createPath(curX+1,curY);
          }
          else {
            let pieceColor = PieceColor.getColor(boardSetup[curX+1][curY]);
            let pieceType = boardSetup[curX+1][curY];
            if(pieceColor === opponentColor) {
              // result += 'capture ' + pieceColor + ' ' + toolsBox.getElementName(pieceType);
              result += this.createCaptureMessage(pieceColor, toolsBox.getElementName(pieceType), (curX+1), (curY));
            }
            else {
              // result += 'hit the same color piece ';
              result += this.createHitSameColorMessage(pieceColor, toolsBox.getElementName(pieceType), (curX+1), (curY));
            }
          }
          // console.log("curX+1 != 8", result);
        }
        else {
          result += this.createHitEndMessage();
        }
        output.push(result);

        // (i+1, j+1)
        result = '';
        if(curX+1 != 8 && curY+1 != 8) {
          if(typeof boardSetup[curX+1][curY+1] === 'undefined' || boardSetup[curX+1][curY+1] === null) {
            // result += (curX+1) + ', ' + (curY+1);
            result += this.createPath(curX+1,curY+1);
          }
          else {
            let pieceColor = PieceColor.getColor(boardSetup[curX+1][curY+1]);
            let pieceType = boardSetup[curX+1][curY+1];
            if(pieceColor === opponentColor) {
              // result += 'capture ' + pieceColor + ' ' + toolsBox.getElementName(pieceType);
              result += this.createCaptureMessage(pieceColor, toolsBox.getElementName(pieceType), (curX+1), (curY+1));
            }
            else {
              // result += 'hit the same color piece ';
              result += this.createHitSameColorMessage(pieceColor, toolsBox.getElementName(pieceType), (curX+1), (curY+1));
            }
          }
          // console.log("curX+1 != 8 && curY+1 != 8", result);
        }
        else {
          result += this.createHitEndMessage();
        }
        output.push(result);


        // (i, j+1)
        result = '';
        if(curY+1 != 8) {
          if(typeof boardSetup[curX][curY+1] === 'undefined' || boardSetup[curX][curY+1] === null) {
            // result += curX + ', ' + (curY+1);
            result += this.createPath(curX,curY+1);
          }
          else {
            let pieceColor = PieceColor.getColor(boardSetup[curX][curY+1]);
            let pieceType = boardSetup[curX][curY+1];
            if(pieceColor === opponentColor) {
              // result += 'capture ' + pieceColor + ' ' + toolsBox.getElementName(pieceType);
              result += this.createCaptureMessage(pieceColor, toolsBox.getElementName(pieceType), (curX), (curY+1));
            }
            else {
              // result += 'hit the same color piece ';
              result += this.createHitSameColorMessage(pieceColor, toolsBox.getElementName(pieceType), (curX), (curY+1));
            }
          }
          // console.log("curY+1 != 8", result);
        }
        else {
          result += this.createHitEndMessage();
        }
        output.push(result);


        // (i-1, j+1)
        result = '';
        if(curX-1 != -1 && curY+1 != 8) {
          if(typeof boardSetup[curX-1][curY+1] === 'undefined' || boardSetup[curX-1][curY+1] === null) {
            // result += (curX-1) + ', ' + (curY+1);
            result += this.createPath(curX-1,curY+1);
          }
          else {
            let pieceColor = PieceColor.getColor(boardSetup[curX-1][curY+1]);
            let pieceType = boardSetup[curX-1][curY+1];
            if(pieceColor === opponentColor) {
              // result += 'capture ' + pieceColor + ' ' + toolsBox.getElementName(pieceType);
              result += this.createCaptureMessage(pieceColor, toolsBox.getElementName(pieceType), (curX-1), (curY+1));
            }
            else {
              // result += 'hit the same color piece ';
              result += this.createHitSameColorMessage(pieceColor, toolsBox.getElementName(pieceType), (curX-1), (curY+1));
            }
          }
          // console.log("curX-1 != -1 && curY+1 != 8", result);
        }
        else {
          result += this.createHitEndMessage();
        }
        output.push(result);
        return output;
      },

      // This method returns All Knight Movements with the rules applied
      KnightMovements: function KnightMovements(knight, curX, curY) {
        // console.log(toolsBox.getElementName(pieceType));

        let knightColor = PieceColor.getColor(knight);
        let opponentColor = PieceColor.getOpponentColor(knightColor);

        boardSetup = globalBoard;
        let output = [];
        let result = null;

        // i-2, j-1
        result = '';
        if(curX-2 > -1 && curY-1 > -1) {
          if(typeof boardSetup[curX-2][curY-1] === 'undefined' || boardSetup[curX-2][curY-1] === null) {
            // result += (curX-2) + ', ' + (curY-1);
            result += this.createPath(curX-2,curY-1);
          }
          else {
            let pieceColor = PieceColor.getColor(boardSetup[curX-2][curY-1]);
            let pieceType = boardSetup[curX-2][curY-1];
            if(pieceColor === opponentColor) {
              // result += 'capture ' + pieceColor + ' ' + toolsBox.getElementName(pieceType);
              result += this.createCaptureMessage(pieceColor, toolsBox.getElementName(pieceType), (curX-2), (curY-1));
            }
            else {
              // result += 'hit the same color piece ';
              result += this.createHitSameColorMessage(pieceColor, toolsBox.getElementName(pieceType), (curX-2), (curY-1));
            }
          }
        }
        else {
          result += this.createHitEndMessage();
        }
        output.push(result);

        // i-2, j+1
        result = '';
        if(curX-2 > -1 && curY+1 < 8) {
          if(typeof boardSetup[curX-2][curY+1] === 'undefined' || boardSetup[curX-2][curY+1] === null) {
            // result += (curX-2) + ', ' + (curY+1);
            result += this.createPath(curX-2,curY+1);
          }
          else {
            let pieceColor = PieceColor.getColor(boardSetup[curX-2][curY+1]);
            let pieceType = boardSetup[curX-2][curY+1];
            if(pieceColor === opponentColor) {
              // result += 'capture ' + pieceColor + ' ' + toolsBox.getElementName(pieceType);
              result += this.createCaptureMessage(pieceColor, toolsBox.getElementName(pieceType), (curX-2), (curY+1));
            }
            else {
              // result += 'hit the same color piece ';
              result += this.createHitSameColorMessage(pieceColor, toolsBox.getElementName(pieceType), (curX-2), (curY+1));
            }
          }
        }
        else {
          result += this.createHitEndMessage();
        }
        output.push(result);

        // i+1, j-2
        result = '';
        if(curX+1 < 8 && curY-2 > -1) {
          if(typeof boardSetup[curX+1][curY-2] === 'undefined' || boardSetup[curX+1][curY-2] === null) {
            // result += (curX+1) + ', ' + (curY-2);
            result += this.createPath(curX+1,curY-2);
          }
          else {
            let pieceColor = PieceColor.getColor(boardSetup[curX+1][curY-2]);
            let pieceType = boardSetup[curX+1][curY-2];
            if(pieceColor === opponentColor) {
              // result += 'capture ' + pieceColor + ' ' + toolsBox.getElementName(pieceType);
              result += this.createCaptureMessage(pieceColor, toolsBox.getElementName(pieceType), (curX+1), (curY-2));
            }
            else {
              // result += 'hit the same color piece ';
              result += this.createHitSameColorMessage(pieceColor, toolsBox.getElementName(pieceType), (curX+1), (curY-2));
            }
          }
        }
        else {
          result += this.createHitEndMessage();
        }
        output.push(result);

        // i-1, j-2
        result = '';
        if(curX-1 > -1 && curY-2 > -1) {
          if(typeof boardSetup[curX-1][curY-2] === 'undefined' || boardSetup[curX-1][curY-2] === null) {
            // result += (curX-1) + ', ' + (curY-2);
            result += this.createPath(curX-1,curY-2);
          }
          else {
            let pieceColor = PieceColor.getColor(boardSetup[curX-1][curY-2]);
            let pieceType = boardSetup[curX-1][curY-2];
            if(pieceColor === opponentColor) {
              // result += 'capture ' + pieceColor + ' ' + toolsBox.getElementName(pieceType);
              result += this.createCaptureMessage(pieceColor, toolsBox.getElementName(pieceType), (curX-1), (curY-2));
            }
            else {
              // result += 'hit the same color piece ';
              result += this.createHitSameColorMessage(pieceColor, toolsBox.getElementName(pieceType), (curX-1), (curY-2));
            }
          }
        }
        else {
          result += this.createHitEndMessage();
        }
        output.push(result);

        // i+2, j-1
        result = '';
        if(curX+2 < 8 && curY-1 > -1) {
          if(typeof boardSetup[curX+2][curY-1] === 'undefined' || boardSetup[curX+2][curY-1] === null) {
            // result += (curX+2) + ', ' + (curY-1);
            result += this.createPath(curX+2,curY-1);
          }
          else {
            let pieceColor = PieceColor.getColor(boardSetup[curX+2][curY-1]);
            let pieceType = boardSetup[curX+2][curY-1];
            if(pieceColor === opponentColor) {
              // result += 'capture ' + pieceColor + ' ' + toolsBox.getElementName(pieceType);
              result += this.createCaptureMessage(pieceColor, toolsBox.getElementName(pieceType), (curX+2), (curY-1));
            }
            else {
              // result += 'hit the same color piece ';
              result += this.createHitSameColorMessage(pieceColor, toolsBox.getElementName(pieceType), (curX+2), (curY-1));
            }
          }
        }
        else {
          result += this.createHitEndMessage();
        }
        output.push(result);

        // i+2, j+1
        result = '';
        if(curX+2 < 8 && curY+1 < 8) {
          if(typeof boardSetup[curX+2][curY+1] === 'undefined' || boardSetup[curX+2][curY+1] === null) {
            // result += (curX+2) + ', ' + (curY+1);
            result += this.createPath(curX+2,curY+1);
          }
          else {
            let pieceColor = PieceColor.getColor(boardSetup[curX+2][curY+1]);
            let pieceType = boardSetup[curX+2][curY+1];
            if(pieceColor === opponentColor) {
              // result += 'capture ' + pieceColor + ' ' + toolsBox.getElementName(pieceType);
              result += this.createCaptureMessage(pieceColor, toolsBox.getElementName(pieceType), (curX+2), (curY+1));
            }
            else {
              // result += 'hit the same color piece ';
              result += this.createHitSameColorMessage(pieceColor, toolsBox.getElementName(pieceType), (curX+2), (curY+1));
            }
          }
        }
        else {
          result += this.createHitEndMessage();
        }
        output.push(result);

        // i+1, j+2
        result = '';
        if(curX+1 < 8 && curY+2 < 8) {
          if(typeof boardSetup[curX+1][curY+2] === 'undefined' || boardSetup[curX+1][curY+2] === null) {
            // result += (curX+1) + ', ' + (curY+2);
            result += this.createPath(curX+1,curY+2);
          }
          else {
            let pieceColor = PieceColor.getColor(boardSetup[curX+1][curY+2]);
            let pieceType = boardSetup[curX+1][curY+2];
            if(pieceColor === opponentColor) {
              // result += 'capture ' + pieceColor + ' ' + toolsBox.getElementName(pieceType);
              result += this.createCaptureMessage(pieceColor, toolsBox.getElementName(pieceType), (curX+1), (curY+2));
            }
            else {
              // result += 'hit the same color piece ';
              result += this.createHitSameColorMessage(pieceColor, toolsBox.getElementName(pieceType), (curX+1), (curY+2));
            }
          }
        }
        else {
          result += this.createHitEndMessage();
        }
        output.push(result);

        // i-1, j+2
        result = '';
        if(curX-1 > -1 && curY+2 < 8) {
          if(typeof boardSetup[curX-1][curY+2] === 'undefined' || boardSetup[curX-1][curY+2] === null) {
            // result += (curX-1) + ', ' + (curY+2);
            result += this.createPath(curX-1,curY+2);
          }
          else {
            let pieceColor = PieceColor.getColor(boardSetup[curX-1][curY+2]);
            let pieceType = boardSetup[curX-1][curY+2];
            if(pieceColor === opponentColor) {
              // result += 'capture ' + pieceColor + ' ' + toolsBox.getElementName(pieceType);
              result += this.createCaptureMessage(pieceColor, toolsBox.getElementName(pieceType), (curX-1), (curY+2));
            }
            else {
              // result += 'hit the same color piece ';
              result += this.createHitSameColorMessage(pieceColor, toolsBox.getElementName(pieceType), (curX-1), (curY+2));
            }
          }
        }
        else {
          result += this.createHitEndMessage();
        }
        output.push(result);

        return output;

      },

      // This method returns All Pawn Movements with the rules applied
      PawnMovements: function PawnMovements(pawn, curX, curY) {
        // console.log(PIECEDATA[pawn]);
        let pawnColor = PieceColor.getColor(pawn);
        let opponentColor = PieceColor.getOpponentColor(pawnColor);
        boardSetup = globalBoard;
        let defaultRow = PieceColor.getPawnDefaultLocation(pawnColor);
        let output = [];

        if(curX === defaultRow) {
          let result = null;
          if(pawnColor === "White") {
            // 0 -> 1 -> 2 -> 3 -> ... -> 7
            result = '';
            if(typeof boardSetup[curX+1][curY] === 'undefined' || boardSetup[curX+1][curY] === null) {
              // result = '-> ' + (curX+1) + ', ' + curY;
              result += this.createPath(curX+1,curY);
              if(typeof boardSetup[curX+2][curY] === 'undefined' || boardSetup[curX+2][curY] === null) {
                // result += '-> ' + (curX+2) + ', ' + curY;
                result += this.createPath(curX+2,curY);
              }
            }
            if(result) {
              output.push(result);
            }
            output.concat(this.PawnCapturer(pawnColor, opponentColor, curX, curY));
          }
          else {
            // 7 -> 6 -> 5 -> 4 -> ... -> 0
            result = '';
            if(typeof boardSetup[curX-1][curY] === 'undefined' || boardSetup[curX-1][curY] === null) {
              // result = '-> ' + (curX-1) + ', ' + curY;
              result += this.createPath(curX-1,curY);
              if(typeof boardSetup[curX-2][curY] === 'undefined' || boardSetup[curX-2][curY] === null) {
                // result += '-> ' + (curX-2) + ', ' + curY;
                result += this.createPath(curX-2,curY);
              }
            }
            if(result) {
              output.push(result);
            }
            output = output.concat(this.PawnCapturer(pawnColor, opponentColor, curX, curY));
          }
        }
        else {
          let result = null;
          if(pawnColor === "White") {
            // 0 -> 1 -> 2 -> 3 -> ... -> 7
            result = '';
            // i+1
            if(curX+1 < 8) {
              if(typeof boardSetup[curX+1][curY] === 'undefined' || boardSetup[curX+1][curY] === null) {
                // result = '-> ' + (curX+1) + ', ' + curY;
                result += this.createPath(curX+1,curY);
              }
            }
            if(result) {
              output.push(result);
            }
            output = output.concat(this.PawnCapturer(pawnColor, opponentColor, curX, curY));
          }
          else {
            // 7 -> 6 -> 5 -> 4 -> ... -> 0
            result = '';
            // i-1
            if(curX-1 > -1) {
              if(typeof boardSetup[curX-1][curY] === 'undefined' || boardSetup[curX-1][curY] === null) {
                // result = '-> ' + (curX-1) + ', ' + curY;
                result += this.createPath(curX-1,curY);
              }
            }
            if(result) {
              output.push(result);
            }
            let captureData = this.PawnCapturer(pawnColor, opponentColor, curX, curY);
            output = output.concat(captureData);
          }
        }
        return output;
      },

      // This method returns All Pawn Captures as Pawn has different rules for capturing
      PawnCapturer : function PawnCapturer(color, opponentColor, curX, curY) {
        boardSetup = globalBoard;
        let output = [];
        if(color === "White") {
          // i+1, j-1
          result = '';
          if(curX+1 < 8 && curY-1 > -1) {
            if(typeof boardSetup[curX+1][curY-1] !== 'undefined' && boardSetup[curX+1][curY-1] !== null) {
              let pieceType = boardSetup[curX+1][curY-1];
              // console.log("pieceType", pieceType);
              let pieceColor = PieceColor.getColor(pieceType);
              if(pieceColor === opponentColor) {
                // result = '->' + 'capture ' + pieceColor + ' ' + toolsBox.getElementName(pieceType);
                result += this.createCaptureMessage(pieceColor, toolsBox.getElementName(pieceType), curX+1, curY-1);
              }
            }
          }
          if(result) {
            output.push(result);
          }
          // i+1, j+1
          result = '';
          if(curX+1 < 8 && curY+1 < 8) {
            if(typeof boardSetup[curX+1][curY+1] !== 'undefined' && boardSetup[curX+1][curY+1] !== null) {
              let pieceType = boardSetup[curX+1][curY+1];
              let pieceColor = PieceColor.getColor(pieceType);
              if(pieceColor === opponentColor) {
                // result = '-> ' + 'capture ' + pieceColor + ' ' + toolsBox.getElementName(pieceType);
                result += this.createCaptureMessage(pieceColor, toolsBox.getElementName(pieceType), curX+1, curY+1);
              }
            }
          }
          if(result) {
            output.push(result);
          }
        }
        else {
          // i-1, j-1
          // console.log("INSIDE PAWN CAPTURER, BLACK");
          // console.log("curX", curX);
          // console.log("curY", curY);
          result = '';
          if(curX-1 > -1 && curY-1 > -1) {
            if(typeof boardSetup[curX-1][curY-1] !== 'undefined' && boardSetup[curX-1][curY-1] !== null) {
              let pieceType = boardSetup[curX-1][curY-1];
              let pieceColor = PieceColor.getColor(pieceType);
              if(pieceColor === opponentColor) {
                // result = '->' + 'capture ' + pieceColor + ' ' + toolsBox.getElementName(pieceType);
                result += this.createCaptureMessage(pieceColor, toolsBox.getElementName(pieceType), curX-1, curY-1);
              }
            }
          }
          if(result) {
            // console.log("*******result inside PAWN CAPTURER BLACK", result);
            output.push(result);
          }
          // i-1, j+1
          result = '';
          if(curX-1 > -1 && curY+1 < 8) {
            if(typeof boardSetup[curX-1][curY+1] !== 'undefined' && boardSetup[curX-1][curY+1] !== null) {
              let pieceType = boardSetup[curX-1][curY+1];
              let pieceColor = PieceColor.getColor(pieceType);
              if(pieceColor === opponentColor) {
                // result = '-> ' + 'capture ' + pieceColor + ' ' + toolsBox.getElementName(pieceType);
                result += this.createCaptureMessage(pieceColor, toolsBox.getElementName(pieceType), curX-1, curY+1);
              }
            }
          }
          if(result) {
            output.push(result);
          }
        }
        // console.log("RETURN OBJ", output);
        return output;
      },

      createPath: function createPath(x, y) {
        return ("-> " + "("+x+","+y+")");
      },

      createCaptureMessage: function createPath(pieceColor, pieceInfo, x, y) {
        return ("-> "+"Captured " + pieceColor + " colored " + pieceInfo +" at "+" ("+x+","+y+") ");
      },

      createHitSameColorMessage: function createHitSameColorMessage(pieceColor, pieceInfo, x, y) {
        return ("-> " + "Hit " + pieceColor + " colored " + pieceInfo + ", at " + "("+x+","+y+") ");
      },

      createHitEndMessage: function createHitSameColorMessage() {
        return ("-> " + "Hit End");
      }
  }
};

exports = module.exports = allPieces;

exports = module.exports = {
  getColor : function getColor(pieceData) {
    if(pieceData == pieceData.toUpperCase()) {
      // pieceData is upper case
      // i.e., it is White
      return "White";
    }
    if(pieceData == pieceData.toLowerCase()) {
      // pieceData is lower case
      // i.e., it is Black
      return "Black";
    }
  },

  getOpponentColor: function getOpponentColor(color) {
    if(color === "White") {
      return "Black";
    }
    else {
      return "White";
    }
  },

  getPawnDefaultLocation: function getPawnDefaultLocation(color) {
    if(color === "White") {
      return 1;
    }
    else {
      return 6;
    }
  }
}

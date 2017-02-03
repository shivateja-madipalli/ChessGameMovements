let PIECEDATA = require('./pieceData');

function toolsBox() {
  return {
    getElementName : function getElementName(element) {
      // console.log(element.substring(0, element.length - 1));
      return PIECEDATA[element.substring(0, element.length - 1)];
    }
  }
}

exports = module.exports = toolsBox;

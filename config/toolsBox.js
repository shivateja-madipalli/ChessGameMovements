let PIECEDATA = require('./pieceData');

exports = module.exports = {
  getElementName : function getElementName(element) {
    // console.log(element.substring(0, element.length - 1));
    return PIECEDATA[element.substring(0, element.length - 1)];
  }
}

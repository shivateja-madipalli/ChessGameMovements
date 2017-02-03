function Boards() {
  return {
    getBoard: function(val) {
      let boards = [];

      let board = [];
      let row = ['R1','KN1','B1','Q0','K0','B2','KN2','R2'];
      board.push(row);
      row = ['P1','P2','P3',null,null,'P6','P7','P8'];
      board.push(row);
      row = [];
      board.push(row);
      row = [];
      board.push(row);
      row = [null, null,null,'P4', 'P5', null, null, null];
      board.push(row);
      row = [null, null,null, null, null, 'p6', 'p7', null];
      board.push(row);
      row = ['p1','p2','p3','p4','p5',null,null,'p8'];
      board.push(row);
      row = ['r1','kn1','b1','q0','k0','b2','kn2','r2'];
      board.push(row);

      boards.push(board);

      board = [];
      row = ['R1',null,'B1','Q0','K0',null ,'KN2','R2'];
      board.push(row);
      row = ['P1','P2','P3',null,null,'P6','P7','P8'];
      board.push(row);
      row = [];
      board.push(row);
      row = [null, null,'b1', null, 'B2', 'p6', 'p7', null];
      board.push(row);
      row = [null, null,'KN1','P4', 'P5', null, 'kn2', null];
      board.push(row);
      row = [null, null,'p3', null, null, 'p6', 'p7', null];
      board.push(row);
      row = ['p1','p2',null,'p4','p5',null,null,'p8'];
      board.push(row);
      row = ['r1','kn1',null,'q0','k0','b2',null,'r2'];
      board.push(row);
      boards.push(board);

      board = [];
      row = ['R1',null,'B1','Q0','K0',null ,null,null];
      board.push(row);
      row = ['P1','P2','P3',null,null,'P6','P7','P8'];
      board.push(row);
      row = [];
      board.push(row);
      row = ['KN2', 'R2','b1', null, 'B2', 'p6', 'p7', null];
      board.push(row);
      row = [null, null, null,'P4', 'P5', null, 'kn2', null];
      board.push(row);
      row = [null, 'r1','p3', null, null, 'p6', null, null];
      board.push(row);
      row = ['p1','p2',null,'p4','p5',null,null,'p8'];
      board.push(row);
      row = [null,'kn1',null,'q0',null,'b2','k0','r2'];
      board.push(row);
      boards.push(board);

      board = [];
      row = ['R1',null,'B1','Q0','K0',null ,null,null];
      board.push(row);
      row = ['P1',null,'P3','p6',null,'P6','P7','P8'];
      board.push(row);
      row = ['p1','p2',null,'p4','p5',null,null,'p8'];
      board.push(row);
      row = ['KN2', 'R2','b1', null, null, 'p6', 'p7', null];
      board.push(row);
      row = [null, null, null,'P4', 'P5', 'P2', 'kn2', null];
      board.push(row);
      row = [null, 'r1','p3', null, 'k0', null, null, null];
      board.push(row);
      row = ['KN2', null,'b1', null, 'B2', null, 'p7', null];
      board.push(row);
      row = [null,'kn1',null,'q0',null,'b2',null,'r2'];
      board.push(row);
      boards.push(board);

      board = [];
      row = ['R1',null,'B1','Q0','K0',null ,null,null];
      board.push(row);
      row = ['P1','P2','P3',null,null,'P6','P7','P8'];
      board.push(row);
      row = ['KN2', 'R2',null, null, 'B2', 'p6', 'p7', null];
      board.push(row);
      row = [null, null, null,'p3', null, null, 'r2', null];
      board.push(row);
      row = [null, null, null,'P4', 'P5', null, 'kn2', 'kn1'];
      board.push(row);
      row = [null, 'r1',null , null, null, 'p6', null, null];
      board.push(row);
      row = ['p1','p2',null,null, null,null,null,'p8'];
      board.push(row);
      row = [null,,null,'q0',null,'b2','k0',null];
      board.push(row);
      boards.push(board);

      if(val) {
        return boards[val];
      }

      return boards[Math.floor(Math.random() * boards.length)];
    }
  }
};

exports = module.exports = Boards;

// row = ['P','P','P','P','P','P','P','P'];
//
// row = ['p','p','p','p','p','p','p','p'];

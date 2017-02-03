# ChessGameMovements
#### This JS Application give all Movements of chess Pieces in a given board
=====

* A Chess game will be 8x8 Matrix with Blacks and Whites keys
* This is how a sample Board looks like,

```javascript
[ [ 'R1', null, 'B1', 'Q0', 'K0', null, null, null ],
  [ 'P1', 'P2', 'P3', null, null, 'P6', 'P7', 'P8' ],
  [],
  [ 'KN2', 'R2', 'b1', null, 'B2', 'p6', 'p7', null ],
  [ null, null, null, 'P4', 'P5', null, 'kn2', null ],
  [ null, 'r1', 'p3', null, null, 'p6', null, null ],
  [ 'p1', 'p2', null, 'p4', 'p5', null, null, 'p8' ],
  [ null, 'kn1', null, 'q0', null, 'b2', 'k0', 'r2' ] ]
```
  
#### Assumptions

* All Uppercase Letters are Whites and Lowercase Letters are Blacks
* The numbering starts from 1 -> 8 (Left -> Right)
* Chess Game Pieces
  * R1/R2/r1/r2 => Rook
  * B1/B2/b1/b2 => Bishop
  * KN1/KN2/kn1/kn2 => Knight
  * Q0/q0 => Queen
  * K0/k0 => King
  * P1/p1 - P8/p8 => Pawn
* En Passant is not considered
* Castling is not considered

#### Execution
* Run ```node chess_movements.js``` in command line
* The Types of Boards can be choosen by passing required index in
```javascript
let board = BOARD.getBoard(2);
```
* 5 Boards are currently available in ```/config/tests/boards.js```
* Type of player is defined with Color and it can be passed by calling required color
```javascript
mapThroughAllPieces(board, "White");
```

#### Output

```javascript
 R1:
   [ '-> Hit White colored Pawn, at (1,0) ',
     '-> (0,1)-> Hit White colored Bishop, at (0,2) ' ],
  B1:
   [ '-> Hit White colored Pawn, at (1,2) ',
     '-> (1,3)-> (2,4)-> Captured Black colored Pawn at  (3,5) ' ],
  Q0:
   [ '-> (1,3)-> (2,3)-> (3,3)-> Hit White colored Pawn, at (4,3) ',
     '-> Hit White colored Bishop, at (0,2) ',
     '-> Hit White colored King, at (0,4) ' ],
  K0:
   [ '-> Hit End',
     '-> Hit End',
     '-> Hit White colored Queen, at (0,3) ',
     '-> (1,3)',
     '-> (1,4)',
     '-> Hit White colored Pawn, at (1,5) ',
     '-> (0,5)',
     '-> Hit End' ],
```

* The above output will be shown in the console and there are certain terminologies used to easily explain.

#### Terminology

```
Q0:
   [ '-> (1,3)-> (2,3)-> (3,3)-> Hit White colored Pawn, at (4,3) ',
     '-> Hit White colored Bishop, at (0,2) ',
     '-> Hit White colored King, at (0,4) ' ]
```

#### Keenly observe the above indicated Board design and follow the below pointers

* ```'-> (1,3)-> (2,3)-> (3,3)-> Hit White colored Pawn, at (4,3) '```

The above means the White colored Queen (Uppercase Q) is moving from its current position (->) to (1,3) then to (2,3) then (3,3) and then git same colored Pawn which is located at (4,3)
 

* ``` '-> Hit White colored Bishop, at (0,2)' ```

The above means, the Queen had hit a white colored Bishop which is located at (0,2).

* ``` '-> Hit End' ```

The above means, the piece hit the wall i.e., hit the boundary of the chess board.

=====

### Enhancements:

* The above design is currently been called from Command line, it can have a webpage to easily add/change the chess piece locations.
* En passant and Castling rules need to be applied
* An Interface to move the keys and change the player with timer would be a good option
* Auto creation of board to test the application

========

Shivateja(Shiv) Madipalli
  

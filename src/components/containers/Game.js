import React, { Component } from 'react';
import Board from '../presentational/Board';
import { Bishop, King, Knight, Pawn, Queen, Rook } from './Pieces';


class Game extends Component {
    state = { 
        boardState: [
            [new Rook('p1'), new Knight('p1'), new Bishop('p1'), new King('p1'), new Queen('p1'), new Bishop('p1'), new Knight('p1'), new Rook('p1')],
            [new Pawn('p1'), new Pawn('p1'), new Pawn('p1'), new Pawn('p1'), new Pawn('p1'), new Pawn('p1'), new Pawn('p1'), new Pawn('p1')],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [new Pawn('p2'), new Pawn('p2'), new Pawn('p2'), new Pawn('p2'), new Pawn('p2'), new Pawn('p2'), new Pawn('p2'), new Pawn('p2')],
            [new Rook('p2'), new Knight('p2'), new Bishop('p2'), new King('p2'), new Queen('p2'), new Bishop('p2'), new Knight('p2'), new Rook('p2')]
        ],
    }
    render() { 
        return ( 
            <Board boardState={this.state.boardState} />
         );
    }
}
 
export default Game;
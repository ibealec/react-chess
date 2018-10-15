import React, { Component } from 'react';
import bPawn from '../../../assets/icons/pawn-black.svg'
import wPawn from '../../../assets/icons/pawn-white.svg'

class Pawn extends Component {
    state = {}
    constructor(props) {
        super(props);
        if(props.player==='p1') {
            this.image = bPawn;
        }
        else {
            this.image = wPawn
        }
        this.state.row = props.row;
        this.state.col = props.col;
    }

    checkPossibleMoves = (pieceRow, pieceCol, boardState) => {
        if(boardState.pieceIndex) {

        }
        else {
            return false;
        }
    }

    render() { 
        return ( <div></div> );
    }
}
 
export default Pawn;
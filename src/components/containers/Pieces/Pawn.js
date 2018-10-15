import React, { Component } from 'react';
import bPawn from '../../../assets/icons/pawn-black.svg'
import wPawn from '../../../assets/icons/pawn-white.svg'

class Pawn extends Component {
    constructor(props) {
        super(props);
        if(props==='p1') {
            this.image = bPawn;
        }
        else {
            this.image = wPawn
        }
    }

    render() { 
        return ( <div></div> );
    }
}
 
export default Pawn;
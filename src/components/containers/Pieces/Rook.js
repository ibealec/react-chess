import React, { Component } from 'react';
import bRook from '../../../assets/icons/rook-black.svg'
import wRook from '../../../assets/icons/rook-white.svg'
class Rook extends Component {
    state = {}
    constructor(props) {
        super(props);
        if(props.player==='p1') {
            this.image = bRook;
        }
        else {
            this.image = wRook;
        }
        this.state.row = props.row;
        this.state.col = props.col;
    }
    render() { 
        return ( <div></div> );
    }
}
 
export default Rook;
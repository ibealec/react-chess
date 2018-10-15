import React, { Component } from 'react';
import bRook from '../../../assets/icons/rook-black.svg'
import wRook from '../../../assets/icons/rook-white.svg'
class Rook extends Component {
    constructor(props) {
        super(props);
        if(props==='p1') {
            this.image = bRook;
        }
        else {
            this.image = wRook;
        }
    }
    render() { 
        return ( <div></div> );
    }
}
 
export default Rook;
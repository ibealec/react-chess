import React, { Component } from 'react';
import bKnight from '../../../assets/icons/knight-black.svg'
import wKnight from '../../../assets/icons/knight-white.svg'
class Knight extends Component {
    state = {}
    constructor(props) {
        super(props);
        if(props==='p1') {
            this.image = bKnight;
        }
        else {
            this.image = wKnight;
        }
        this.state.row = props.row;
        this.state.col = props.col;
    }
    render() { 
        return ( <div></div> );
    }
}
 
export default Knight;
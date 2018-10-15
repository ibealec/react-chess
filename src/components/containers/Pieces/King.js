import React, { Component } from 'react';
import bKing from '../../../assets/icons/king-black.svg'
import wKing from '../../../assets/icons/king-white.svg'
class King extends Component {
    state = {}
    constructor(props) {
        super(props);
        if(props==='p1') {
            this.image = bKing;
        }
        else {
            this.image = wKing;
        }
        this.state.row = props.row;
        this.state.col = props.col;
    }
    render() { 
        return ( <div></div> );
    }
}
 
export default King;
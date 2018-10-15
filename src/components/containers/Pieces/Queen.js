import React, { Component } from 'react';
import bQueen from '../../../assets/icons/king-black.svg'
import wQueen from '../../../assets/icons/king-white.svg'
class Queen extends Component {
    state = {}
    constructor(props) {
        super(props);
        if(props==='p1') {
            this.image = bQueen;
        }
        else {
            this.image = wQueen;
        }
        this.state.row = props.row;
        this.state.col = props.col;
    }
    render() { 
        return ( <div></div> );
    }
}
 
export default Queen;
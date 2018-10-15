import React, { Component } from 'react';
import bBishop from '../../../assets/icons/bishop-black.svg'
import wBishop from '../../../assets/icons/bishop-white.svg'
class Bishop extends Component {
    state = {}
    constructor(props) {
        super(props);
        if(props==='p1') {
            this.image = bBishop;
        }
        else {
            this.image = wBishop;
        }
        this.state.row = props.row;
        this.state.col = props.col;
    }
    render() { 
        return ( <div></div> );
    }
}
 
export default Bishop;
import React, { Component } from 'react';
import bQueen from '../../../assets/icons/king-black.svg'
import wQueen from '../../../assets/icons/king-white.svg'
class Queen extends Component {
    constructor(props) {
        super(props);
        if(props==='p1') {
            this.image = bQueen;
        }
        else {
            this.image = wQueen;
        }
    }
    render() { 
        return ( <div></div> );
    }
}
 
export default Queen;
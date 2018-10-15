import React, { Component } from 'react';
import bKing from '../../../assets/icons/king-black.svg'
import wKing from '../../../assets/icons/king-white.svg'
class King extends Component {
    constructor(props) {
        super(props);
        if(props==='p1') {
            this.image = bKing;
        }
        else {
            this.image = wKing;
        }
    }
    render() { 
        return ( <div></div> );
    }
}
 
export default King;
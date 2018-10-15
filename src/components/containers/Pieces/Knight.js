import React, { Component } from 'react';
import bKnight from '../../../assets/icons/knight-black.svg'
import wKnight from '../../../assets/icons/knight-white.svg'
class Knight extends Component {
    
    constructor(props) {
        super(props);
        if(props==='p1') {
            this.image = bKnight;
        }
        else {
            this.image = wKnight;
        }
    }
    render() { 
        return ( <div></div> );
    }
}
 
export default Knight;
import React from 'react';
import './Square.css';

const Square = (props) => {
    return ( 
        <div className={`square square-${props.color}`}>
            <img className="piece" src={props.image} alt={props.image}/>
            
        </div>
    );
}

export default Square;
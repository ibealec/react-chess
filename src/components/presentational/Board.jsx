import React from 'react';
import Square from './Square';
import './Board.css';

const Board = (props) => {
    console.log(props)
    return ( 
        <div className="board-container">
            <div className="board">
            {
                props.boardState.map((row, i) => {
                    return (
                        <div key={i.toString()} className="row">
                        {
                            row.map((squareContents, ii) => {
                            return (
                                <Square key={i.toString()+ii.toString()} 
                                color={(ii%2 === 0 && i%2 === 0) || (ii%2 === 1 && i%2 === 1) ? 'white': 'black'} 
                                image={squareContents != null ? squareContents.image: ''}
                                />
                            )
                            })
                        }
                        </div>
                    )
                })
            }
            </div>
        </div>
    );
}

export default Board;
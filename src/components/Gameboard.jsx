import PropTypes from "prop-types";
import React from "react";

Gameboard.propTypes = {
    onSelectSquare: PropTypes.func.isRequired,
    turns: PropTypes.array.isRequired,
};

const initialGameboard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

export default function Gameboard({ onSelectSquare, turns }) {
    let gameboard = initialGameboard;
    if (turns) {
        turns.map((turn) => {
            gameboard[turn.square.row][turn.square.col] = turn.player;
        });
    }
    return (
        <ol id="game-board">
            {gameboard.map((row, rowIndex) => (
                <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol, colIndex) => (
                            <li key={colIndex}>
                                <button
                                    onClick={() =>
                                        onSelectSquare(rowIndex, colIndex)
                                    }
                                >
                                    {playerSymbol}
                                </button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>
    );
}

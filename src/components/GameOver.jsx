import React from "react";
import PropTypes from "prop-types";

GameOver.propTypes = {
    winner: PropTypes.string,
    onRestart: PropTypes.func.isRequired,
};

export default function GameOver({ winner, onRestart }) {
    return (
        <div id="game-over">
            <h2>Game Over!</h2>
            {winner && <p>{winner} won!</p>}
            {!winner && <p>It's a draw!</p>}
            <p>
                <button onClick={() => onRestart()}>Rematch!</button>
            </p>
        </div>
    );
}

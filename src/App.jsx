import React, { useState } from "react";
import Gameboard from "./components/Gameboard";
import Log from "./components/Log";
import Player from "./components/Player";

function App() {
    const [activePlayer, setActivePlayer] = useState("X");
    const [gameTurns, setGameTurns] = useState([]);

    const handleSelectSquare = (row, col) => {
        setActivePlayer((currentPlayer) => (currentPlayer === "X" ? "O" : "X"));

        setGameTurns((prevTurns) => {
            let player = "X";
            if (prevTurns.length > 0 && prevTurns[0].player === "X") {
                player = "O";
            }
            const updatedTurns = [
                {
                    square: { row: row, col: col },
                    player: player,
                },
                ...prevTurns,
            ];
            return updatedTurns;
        });
    };

    return (
        <main>
            <div id="game-container">
                <ol id="players" className="highlight-player">
                    <Player
                        name="Player 1"
                        symbol="X"
                        isActive={activePlayer === "X"}
                    ></Player>
                    <Player
                        name="Player 2"
                        symbol="O"
                        isActive={activePlayer === "O"}
                    ></Player>
                </ol>
                <Gameboard
                    onSelectSquare={handleSelectSquare}
                    activePlayer={activePlayer}
                    turns={gameTurns}
                ></Gameboard>
            </div>
            <Log turns={gameTurns}></Log>
        </main>
    );
}

export default App;

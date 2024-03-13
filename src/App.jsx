import React, { useState } from "react";
import Gameboard from "./components/Gameboard";
import Log from "./components/Log";
import Player from "./components/Player";

function deriveActivePlayer(gameTurns) {
    let player = "X";
    if (gameTurns.length > 0 && gameTurns[0].player === "X") {
        player = "O";
    }
    return player;
}

function App() {
    const [gameTurns, setGameTurns] = useState([]);

    const activePlayer = deriveActivePlayer(gameTurns);

    const handleSelectSquare = (row, col) => {
        setGameTurns((prevTurns) => {
            const player = deriveActivePlayer(prevTurns);

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

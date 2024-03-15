import React, { useState } from "react";
import Gameboard from "./components/Gameboard";
import Log from "./components/Log";
import Player from "./components/Player";
import GameOver from "./components/GameOver";
import { WINNING_COMBINATIONS } from "./winning-combinations";

const initialGameboard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

function deriveActivePlayer(gameTurns) {
    let player = "X";
    if (gameTurns.length > 0 && gameTurns[0].player === "X") {
        player = "O";
    }
    return player;
}

function getWinner(gameboard) {
    for (const combination of WINNING_COMBINATIONS) {
        const firstSquareSymbol =
            gameboard[combination[0].row][combination[0].column];
        const secondSquareSymbol =
            gameboard[combination[1].row][combination[1].column];
        const thirdSquareSymbol =
            gameboard[combination[2].row][combination[2].column];
        if (firstSquareSymbol) {
            if (
                firstSquareSymbol === secondSquareSymbol &&
                secondSquareSymbol === thirdSquareSymbol
            ) {
                return firstSquareSymbol;
            }
        }
    }
    return null;
}

function App() {
    const [gameTurns, setGameTurns] = useState([]);

    const activePlayer = deriveActivePlayer(gameTurns);

    let gameboard = [...initialGameboard.map((array) => [...array])];
    if (gameTurns) {
        gameTurns.map((turn) => {
            gameboard[turn.square.row][turn.square.col] = turn.player;
        });
    }

    const winner = getWinner(gameboard);
    const draw = gameTurns.length === 9 && !winner;

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

    function handleRestart() {
        setGameTurns([]);
    }

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
                {(winner || draw) && (
                    <GameOver
                        winner={winner}
                        onRestart={handleRestart}
                    ></GameOver>
                )}
                <Gameboard
                    onSelectSquare={handleSelectSquare}
                    activePlayer={activePlayer}
                    gameboard={gameboard}
                ></Gameboard>
            </div>
            <Log turns={gameTurns}></Log>
        </main>
    );
}

export default App;

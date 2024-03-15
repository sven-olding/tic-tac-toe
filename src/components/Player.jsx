import PropTypes from "prop-types";
import { React, useState } from "react";

Player.propTypes = {
    name: PropTypes.string.isRequired,
    symbol: PropTypes.string.isRequired,
    isActive: PropTypes.bool,
    onPlayerNameChange: PropTypes.func.isRequired,
};

export default function Player({ name, symbol, isActive, onPlayerNameChange }) {
    const [editMode, setEditMode] = useState(false);
    const [playerName, setPlayerName] = useState(name);

    const handleToggleEditMode = () => {
        setEditMode((editing) => !editing);
        if (editMode) {
            onPlayerNameChange(symbol, playerName);
        }
    };

    const handlePlayerNameChange = (event) => {
        setPlayerName(event.target.value);
    };

    let playerNameComponent = <span className="player-name">{playerName}</span>;
    if (editMode) {
        playerNameComponent = (
            <input
                type="text"
                required
                placeholder="Player name..."
                value={playerName}
                onChange={handlePlayerNameChange}
            />
        );
    }

    return (
        <li className={isActive ? "active" : undefined}>
            <span className="player">
                {playerNameComponent}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleToggleEditMode}>
                {editMode ? "Save" : "Edit"}
            </button>
        </li>
    );
}

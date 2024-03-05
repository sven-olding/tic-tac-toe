import { React, useState } from "react";
import PropTypes from "prop-types";

Player.propTypes = {
    name: PropTypes.string.isRequired,
    symbol: PropTypes.string.isRequired,
};

export default function Player({ name, symbol }) {
    const [editMode, setEditMode] = useState(false);
    const [playerName, setPlayerName] = useState(name);

    const handleToggleEditMode = () => {
        setEditMode((editing) => !editing);
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
        <li>
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

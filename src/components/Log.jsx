import PropTypes from "prop-types";
import React from "react";

Log.propTypes = {
    turns: PropTypes.array.isRequired,
};

export default function Log({ turns }) {
    return (
        <ol id="log">
            {turns &&
                turns.map((turn, turnIndex) => (
                    <li key={turnIndex}>
                        ({turn.player}) {turn.playerName} selected{" "}
                        {turn.square.row},{turn.square.col}
                    </li>
                ))}
        </ol>
    );
}

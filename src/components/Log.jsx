import PropTypes from "prop-types";
import React from "react";

Log.propTypes = {
    turns: PropTypes.array.isRequired,
};

export default function Log({ turns }) {
    return (
        <ol id="log">
            {turns.map((turn, turnIndex) => (
                <li key={turnIndex}></li>
            ))}
        </ol>
    );
}

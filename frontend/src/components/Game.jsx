import React from "react";
import "../styles/Game.css"

function Game({ game, onDelete }) {
    const formattedDate = new Date(game.created_at).toLocaleDateString("en-US")

    return (
        <div className="game-container">
            <p className="game-title">{game.title}</p>
            <p className="game-platform">{game.platform}</p>
            <p className="game-content">{game.description}</p>
            <p className="game-date">{formattedDate}</p>
            <button className="delete-button" onClick={() => onDelete(game.id)}>
                Delete
            </button>
        </div>
    );
}

export default Game

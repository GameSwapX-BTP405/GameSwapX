import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Game.css"

function Game({ game, onDelete }) {
    const navigate = useNavigate();
    const formattedDate = new Date(game.created_at).toLocaleDateString("en-US")

    const handleAddToCart = () => {
        // Optionally, you can add cart logic here before navigation
        navigate("/");
    };

    return (
        <div className="game-container">
            <p className="game-title">{game.title}</p>
            <p className="game-platform">{game.platform}</p>
            <p className="game-content">{game.description}</p>
            <p className="game-date">{formattedDate}</p>
            <button className="delete-button" onClick={() => onDelete(game.id)}>
                Delete
            </button>
            <button className="cart-button" onClick={handleAddToCart}>
                Add to Cart
            </button>
        </div>
    );
}

export default Game

import { useState, useEffect } from "react";
import api from "../api";
import Game from "../components/Game";
import Navbar from "../components/Navbar";
import "../styles/Home.css";
import bg from '../assets/images/hero-bg.jpg';

function Home() {
    const [games, setGames] = useState([]);
    const [description, setDescription] = useState("");
    const [platform, setPlatform] = useState("");
    const [title, setTitle] = useState("");

    useEffect(() => {
        getGames();
    }, []);

    const getGames = () => {
        api
            .get("/api/games/")
            .then((res) => res.data)
            .then((data) => {
                setGames(data);
                console.log(data);
            })
            .catch((err) => alert(err));
    };

    const deleteGame = (id) => {
        api
            .delete(`/api/games/delete/${id}/`)
            .then((res) => {
                if (res.status === 204) alert("Game deleted!");
                else alert("Failed to delete Game.");
                getGames();
            })
            .catch((error) => alert(error));
    };

    const createGame = (e) => {
        e.preventDefault();
        api
            .post("/api/games/", { description, platform, title })
            .then((res) => {
                if (res.status === 201) alert("Game created!");
                else alert("Failed to make game.");
                getGames();
            })
            .catch((err) => alert(err));
    };

    return (
        <div className="hero_area">
            <Navbar />
            <div className="bg-box">
            <img src={bg} alt=""/>
            <h1 className="hero-title">GameSwapX</h1>
            </div>
            <div>
                <h2>Games</h2>
                {games.map((game) => (
                    <Game game={game} onDelete={deleteGame} key={game.id} />
                ))}
            </div>
            <h2>Add a Game</h2>
            <form onSubmit={createGame}>
                <label htmlFor="title">Title:</label>
                <br />
                <input
                    type="text"
                    id="title"
                    name="title"
                    required
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                />
                <label htmlFor="platform">Platform:</label>
                <br />
                <select
                    id="platform"
                    name="platform"
                    required
                    onChange={(e) => setPlatform(e.target.value)}
                    value={platform}
                >
                    <option value="">--Select Platform--</option>
                    <option value="PS5">PlayStation 5</option>
                    <option value="XBX">Xbox Series X</option>
                    <option value="NSW">Nintendo Switch</option>
                    <option value="PC">PC</option>
                </select>
                <br />
                <br />
                <label htmlFor="description">Description:</label>
                <br />
                <textarea
                    id="description"
                    name="description"
                    required
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                ></textarea>
                <br />
                <input type="submit" value="Submit"></input>
            </form>
        </div>
    );
}

export default Home;

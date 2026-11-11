import { Navigate } from "react-router";
import "./game.css";

export default function Game() {
    // if the user is not logged in, send them back to login
    if (!localStorage.getItem("token")) {
        return <Navigate to="/" />;
    }

    return (
        <div className="game">
            <h1>Platformer</h1>
            <button>Play</button>
        </div>
    );
}

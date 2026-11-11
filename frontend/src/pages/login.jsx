import { useState } from "react";
import { Link, useNavigate } from "react-router";
import axios from "axios";
import "./login.css";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post("http://localhost:5001/api/auth/login", {
                email: email,
                password: password
            });

            localStorage.setItem("token", res.data.token);
            localStorage.setItem("name", res.data.name);

            navigate("/game");
        }
        catch (error) {
            if (error.response) {
                setMessage(error.response.data.message);
            } else {
                setMessage("Cannot connect to server");
            }
        }
    };

    return (
        <div className="login">
            <h1>You are on the Login Page!</h1>
            <h2>Please Sign In</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required
                    value={email} onChange={(e) => setEmail(e.target.value)} />

                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required
                    value={password} onChange={(e) => setPassword(e.target.value)} />

                <button type="submit">Login</button>
            </form>
            <p className="message">{message}</p>
            <p>
                Don't have an account? <Link to="/signup">Signup</Link>
            </p>
        </div>
    );
}

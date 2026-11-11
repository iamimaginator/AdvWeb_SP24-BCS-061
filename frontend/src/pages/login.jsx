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
        <div className="login-container">
            <div className="login-card">
                <h1 className="login-title">Welcome Back</h1>
                <p className="login-subtitle">Please sign in to your account</p>

                <form className="login-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" placeholder="Enter your email" required
                            value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" placeholder="Enter your password" required
                            value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>

                    <button type="submit" className="login-btn">Login</button>
                </form>

                {message && <p className="message">{message}</p>}

                <p className="login-footer">
                    Don't have an account? <Link to="/signup">Signup</Link>
                </p>
            </div>
        </div>
    );
}

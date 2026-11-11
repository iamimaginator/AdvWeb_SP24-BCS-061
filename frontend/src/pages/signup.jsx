import { useState } from "react";
import { Link, useNavigate } from "react-router";
import axios from "axios";
import "./signup.css";

export default function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post("http://localhost:5001/api/auth/signup", {
                name: name,
                email: email,
                password: password
            });

            alert("Account created! Please login.");
            navigate("/");
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
        <div className="signup-container">
            <div className="signup-card">
                <h1 className="signup-title">Create Account</h1>
                <p className="signup-subtitle">Sign up to get started</p>

                <form className="signup-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" placeholder="Enter your name" required
                            value={name} onChange={(e) => setName(e.target.value)} />
                    </div>

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

                    <button type="submit" className="signup-btn">Signup</button>
                </form>

                {message && <p className="message">{message}</p>}

                <p className="signup-footer">
                    Already have an account? <Link to="/">Login</Link>
                </p>
            </div>
        </div>
    );
}

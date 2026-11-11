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
        <div className="signup">
            <h1>Create Account</h1>
            <form className="signup-form" onSubmit={handleSubmit}>
                <input type="text" placeholder="Name" name="name" required
                    value={name} onChange={(e) => setName(e.target.value)} />
                <input type="email" placeholder="Email" name="email" required
                    value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Password" name="password" required
                    value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit">Signup</button>
            </form>
            <p className="message">{message}</p>
            <p>
                Already have an account? <Link to="/">Login</Link>
            </p>
        </div>
    );
}

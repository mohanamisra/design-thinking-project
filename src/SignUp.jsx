import { useState } from "react";
import { auth } from "./firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {Link} from "react-router-dom";

function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            setMessage("Account created successfully!");
            setEmail("");
            setPassword("");
        } catch (err) {
            setMessage(`${err.message}`);
        }
    };

    return (
        <div className="signup-container" style={{ padding: "2rem", textAlign: "center" }}>
            <h2>Create an Account</h2>

            <form
                onSubmit={handleSignup}
                style={{ display: "flex", flexDirection: "column", gap: "1rem", width: "300px", margin: "auto" }}
            >
                <input
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <input
                    type="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

                <button type="submit">Sign Up</button>
            </form>

            {message && <p style={{ marginTop: "1rem" }}>{message}</p>}
            <p style={{ marginTop: "1rem" }}>
                Already have an account? <Link to="/signin">Sign In</Link>
            </p>
        </div>
    );
}

export default Signup;

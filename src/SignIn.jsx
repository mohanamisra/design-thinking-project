import { useState } from "react";
import { auth } from "./firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import {Link} from "react-router-dom";

function Signin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleSignin = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            setMessage(`Welcome back, ${user.email}!`);
            setEmail("");
            setPassword("");
        } catch (err) {
            setMessage(`${err.message}`);
        }
    };

    return (
        <div className="signin-container" style={{ padding: "2rem", textAlign: "center" }}>
            <h2>Sign In</h2>

            <form
                onSubmit={handleSignin}
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                    width: "300px",
                    margin: "auto",
                }}
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

                <button type="submit">Sign In</button>
            </form>

            {message && <p style={{ marginTop: "1rem" }}>{message}</p>}
            <p style={{ marginTop: "1rem" }}>
                Don’t have an account? <Link to="/signup">Sign Up</Link>
            </p>

        </div>
    );
}

export default Signin;

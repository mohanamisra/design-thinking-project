import { useState } from "react";
import "./App.css";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer";


function Contact() {
    const [feedback, setFeedback] = useState("");
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...");

        try {
            const res = await fetch("http://localhost:5000/api/feedback", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, feedback }),
            });

            if (res.ok) {
                setStatus("✅ Feedback sent successfully!");
                setFeedback("");
                setEmail("");
            } else {
                setStatus("❌ Failed to send feedback. Please try again.");
            }
        } catch (err) {
            setStatus(`❌ Error: ${err.message}`);
        }
    };

    return (
        <div className="contact-container">
            <Navbar />
            <h2>Feedback for MIT-RA</h2>
            <p className="text">We’d love to hear your thoughts or suggestions about the chatbot.</p>

            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem", marginTop: "1rem" }}>
                <input
                    type="email"
                    placeholder="Your email (optional)"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="input"
                />
                <textarea
                    placeholder="Type your feedback here..."
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                    rows={6}
                    className="textarea"
                    required
                />
                <button type="submit" className="cta">Send Feedback</button>
            </form>

            {status && <p className="status-text" style={{ marginTop: "1rem" }}>{status}</p>}
            <Footer />
        </div>
    );
}

export default Contact;

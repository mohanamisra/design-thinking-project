import React, { StrictMode, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import App from "./App.jsx";
import Signup from "./SignUp.jsx";
import Signin from "./SignIn.jsx";
import { auth } from "./firebase.js";
import { onAuthStateChanged } from "firebase/auth";
import Mitra from "./Mitra.jsx";
import About from "./About.jsx";
import Contact from "./Contact.jsx";

function Root() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => unsubscribe();
    }, []);

    if (loading) return <p>Loading...</p>;

    return (
        <BrowserRouter>
            <Routes>
                {/* Protected Home Route */}
                <Route
                    path="/"
                    element={user ? <App /> : <Navigate to="/signin" replace />}
                />

                {/* Public Routes */}
                <Route
                    path="/signup"
                    element={!user ? <Signup /> : <Navigate to="/" replace />}
                />
                <Route
                    path="/signin"
                    element={!user ? <Signin /> : <Navigate to="/" replace />}
                />
                <Route path="/mitra" element={<Mitra />} />
                <Route path="/about" element={<About />} />

                <Route path="*" element={<Navigate to="/" replace />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </BrowserRouter>
    );
}

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Root />
    </StrictMode>
);

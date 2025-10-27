import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "./firebase";
import { useNavigate } from "react-router-dom";
import "./App.css"; // keep using your global styles

function Navbar() {
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await signOut(auth);
            alert("You have been logged out successfully.");
            navigate("/signin");
        } catch (error) {
            console.error("Logout failed:", error.message);
        }
    };

    return (
        <nav className="navbar">
            <div className="nav-logo">MIT-RA</div>
            <ul className="nav-links">
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/mitra">MIT-RA</Link></li>
                <li>
                    <button className="logout-btn" onClick={handleLogout}>
                        Log Out
                    </button>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;

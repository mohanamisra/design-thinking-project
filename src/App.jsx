import './App.css'
import SignUp from './SignUp'
import SignIn from './SignIn'
import { signOut } from "firebase/auth";
import { auth } from "./firebase";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Footer from "./components/Footer";



function App() {
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await signOut(auth);
            alert("You have been logged out successfully.");
            navigate("/signin"); // redirect to Sign In page
        } catch (error) {
            console.error("Logout failed:", error.message);
        }
    };


    return (
        <div className="app-container">
            <header className="header">
                <Navbar />                <img
                    src="./src/assets/hero.jpg"
                    alt="Hero banner"
                    className="hero-image"
                />
                <div className="site-title">
                    <h1>Meet MIT-RA</h1>
                    <h2>The college friend you deserve</h2>
                </div>
            </header>

            <main className="content">
                <h3>About MIT-RA</h3>
                <p>
                    MIT-RA stands for the Manipal Institute of Technology Resource Assistant. More informally, MIT-RA's sole purpose in its life of 0's and 1's is to be your 'mitra', or that one friend who has the answers to all your questions. Have you ever wondered if a certain class has been cancelled and no one told you? Or who is that guy organising the workshop you're being asked to attend? Or when exactly is your exam that got rescheduled at the last minute? Try asking MIT-RA anything that you want to and she will try her best to help you out!.
                </p>
            </main>

            <section className="note">
                <h3>Ask MIT-RA, or Help MIT-RA!</h3>
                <p>
                    The MIT-RA bot is currently in development, and may not have answers to all your questions just yet. If you have urgent questions to ask or would like to submit questions and answers to train MIT-RA on, please reach out to our team via the contact button in the navbar.
                </p>
                <p>
                    Hope you have a great time with MIT-RA!
                </p>
                <button className="cta"><Link to="/mitra" className="button-link">Go To MIT-RA</Link></button>
            </section>
            <Footer />
        </div>
    )
}

export default App

import './App.css'

function App() {
    return (
        <div className="app-container">
            <header className="header">
                <nav className="navbar">
                    <div className="nav-logo">Design Thinking</div>
                    <ul className="nav-links">
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </nav>
                <img
                    src="https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=1920&q=80"
                    alt="Hero banner"
                    className="hero-image"
                />
                <h1 className="site-title">Design Thinking Project</h1>
            </header>

            <section className="hero">
                <h2>Empathize. Define. Ideate. Prototype. Test.</h2>
                <p>
                    A journey into creative problem solving and human-centered design.
                </p>
                <button className="cta">Learn More</button>
            </section>

            <main className="content">
                <h3>About the Project</h3>
                <p>
                    This project explores the principles of design thinking — putting the
                    user first to craft better digital experiences. We focus on
                    understanding real-world challenges and iterating towards innovative
                    solutions.
                </p>
            </main>

            <footer className="footer">
                <p>© {new Date().getFullYear()} Design Thinking Project. All rights reserved.</p>
            </footer>
        </div>
    )
}

export default App

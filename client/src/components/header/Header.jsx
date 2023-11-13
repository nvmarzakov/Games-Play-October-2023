import { Link } from "react-router-dom"

export default function Header() {
    return (
        <header>
            <h1><Link className="home" to="/">GamesPlay</Link></h1>
            <nav>
                <Link to="/catalogue">All games</Link>
                <div id="user">
                    <Link to="/games/create">Create Game</Link>
                    <Link to="/Logout">Logout</Link>
                </div>
                <div id="guest">
                    <Link to="/Login">Login</Link>
                    <Link to="/Register">Register</Link>
                </div>
            </nav>
        </header>
    );
}
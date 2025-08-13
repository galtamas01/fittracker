import { NavLink } from "react-router-dom"

export default function Navbar() {
    return <nav>
            <a to="/" className="navbar-title">Fit <span>Tracker</span></a>
            <ul>
                <li>
                    <NavLink to="/" className={({ isActive }) => "nav-link" + (isActive ? " active" : "") }>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/workout" className={({ isActive }) => "nav-link" + (isActive ? " active" : "") }>Workout Logs</NavLink>
                </li>
                <li>
                    <NavLink to="/food-diary" className={({ isActive }) => "nav-link" + (isActive ? " active" : "") }>Food Diary</NavLink>
                </li>
                <li>
                    <NavLink to="/goals-stats" className={({ isActive }) => "nav-link" + (isActive ? " active" : "") }>Goals & Stats</NavLink>
                </li>
            </ul>
        </nav>
}
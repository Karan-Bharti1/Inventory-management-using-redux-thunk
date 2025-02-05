import { NavLink } from "react-router-dom";

const Header=()=>{
    return(
        <header className="bg-dark text-light py-3">
        <div className="container">
            <h1>Inventory Manager</h1>
<nav>
    <ul className="nav">
        <NavLink to="/" className="nav-link">Add New Inventory</NavLink>
        <NavLink to="/inventory" className="nav-link">Inventory</NavLink>
        <NavLink to="/removedItems" className="nav-link">Removed</NavLink>
        <NavLink to="/remainingItems" className="nav-link">Remaining</NavLink>
    </ul>
</nav>
        </div>
        </header>
    )
}
export default Header;
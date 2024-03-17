import { NavLink } from "react-router-dom";


export default function Navbar () {



    return (<>
   <nav className="navbar  navbar-dark bg-dark text-light justify-content-start">
    <NavLink to="/" className="nav-link mx-3 me-5 btn btn-outline-success p-3">Ana Sayfa</NavLink>
    <NavLink to="/fetch-categories" className="nav-link me-3 btn btn-outline-success p-2">Fetch</NavLink>
    <NavLink to="/axios-categories" className="nav-link me-3 btn btn-outline-success p-2">Axios</NavLink>
    <NavLink to="/rtkq-categories" className="nav-link me-3 btn btn-outline-success p-2">RTK-Q</NavLink>
   </nav>

    </>)
};

import * as React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="bg-primary">
            <Link className="btn btn-outline-info m-2" to={"/"}>Home</Link>
            <Link className="btn btn-outline-info m-2" to={"/api/users"}>View Users</Link>
            <Link className="btn btn-outline-info m-2" to={"/auth/login"}>Login</Link>
            <Link className="btn btn-outline-info m-2" to={"/api/donate"}>Donate</Link>
        </div>
    )
}

export default Navbar;
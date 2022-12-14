import * as React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="bg-warning border-bottom shadow">
            <Link className="btn btn-outline-info btn-light my-2 mx-1" to={"/"}>Home</Link>
            <Link className="btn btn-outline-info btn-light my-2 mx-1" to={"/portfolio"}>Portfolio</Link>
            <Link className="btn btn-outline-info btn-light my-2 mx-1" to={"/resume"}>Resume</Link>
            <Link className="btn btn-outline-info btn-light my-2 mx-1" to={"/contact"}>Contact</Link>
        </div>
    )
}

export default Navbar;
import React from "react";
import { Link } from "react-router-dom";

export function NavBar() {
    return (
        <div>
            <Link to="/posts">Posts</Link>
            <Link to="/users">Users</Link>
        </div>
    )
}
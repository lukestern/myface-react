import React from "react";
import { Link } from "react-router-dom";
import './Styles/NavBar.scss'

export function NavBar() {
    return (
        <div className="nav-container">
            <nav className="nav-bar">
                MyFace
                <div className="nav-options">
                    <Link className="nav-link" to="/users/1">Home</Link>
                    <Link className="nav-link" to="/posts">Posts</Link>
                    <Link className="nav-link" to="/users">Users</Link>
                </div>
                <Link className="nav-link" to="/posts/create">+ New Post</Link>
            </nav>
        </div>
    )
}
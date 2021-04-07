import React from "react";
import { Link } from "react-router-dom";
import "./TopMenu.css";

function TopMenu() {
    return (
        <div className="topMenu">
            <div className="topMenu_container">
                <img id="topMenu_logo" src={process.env.PUBLIC_URL + "/logo192.png"}></img>
                <div className="topMenu_menu">
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/movie">Movies</Link>
                    <Link to="/about">Series</Link>
                    <Link to="/about">News</Link>
                    <Link to="/about">My List</Link>
                </div>
                <div className="topMenu_etc">
                    <span>Search</span>
                    <span>Alarm</span>
                    <span>Login</span>
                </div>
            </div>
        </div>
    );
}


export default TopMenu;
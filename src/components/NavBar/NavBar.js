import React from "react";
import "./NavBar.css";

class NavBar extends React.Component {
    render (){
        return(
            <nav className="navbar">
                <h1>Score: {this.props.Count}</h1>
            </nav>
        );
    }
}

export default NavBar;
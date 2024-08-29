import React, { Component } from "react";
import { createRoot } from "react-dom/client";

class Menu extends Component {
    render() {
        const { table } = this.props
        return (
            <ul>
                <li><a href='/'>Główna</a></li>
                <li><a href='/blog'>Blog</a></li>
                <li><a href='/cennik'>Cennik</a></li>
                <li><a href='/kontakt'>Kontakt</a></li>

            </ul>
        )
    }
}

export default Menu;
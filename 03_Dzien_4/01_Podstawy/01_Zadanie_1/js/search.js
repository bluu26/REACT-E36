import React, { Component } from "react";
import { createRoot } from "react-dom/client";



class Search extends Component {
    render() {
        return (
            <div>
                <input type="text" />
                <button>Szukaj</button>
            </div>
        )
    }
}

export default Search;
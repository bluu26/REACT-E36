import React, { Component } from "react";
import { createRoot } from "react-dom/client";

class LikeBox extends Component {
    render() {
        return (
            <div>
                <p>100 likes</p>
                <button>Lubie to</button>
            </div>
        )
    }
}

export default LikeBox;
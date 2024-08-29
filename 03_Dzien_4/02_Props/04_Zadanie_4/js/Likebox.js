import React, { Component } from "react";
import { createRoot } from "react-dom/client";

class LikeBox extends Component {
    render() {
        const { likes } = this.props;
        return (
            <div>
                <p>{ likes } likes</p>
                <button>Lubie to</button>
            </div>
        )
    }
}

export default LikeBox;
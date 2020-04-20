import React from "react";
import "./info.css"

function MyInfoComponent() {
    return (
        <div id="info">
            <h1 class="title">Vlada</h1>
            <p>*here is more info about me*</p>
            <h4 class="title">Places I want to visit:</h4>
            <ul>
                <li>Seoul</li>
                <li>Tokyo</li>
                <li>New Zealand</li>
            </ul>
        </div>
    );
}

export default MyInfoComponent;
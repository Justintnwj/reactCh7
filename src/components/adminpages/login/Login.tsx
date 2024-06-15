import React from "react";
import carImage from "../../../assets/backgroundcar.svg"

export default function Login() {
    return (
        <div className="loginPage">
            <img src={carImage} />

            <div className="loginForm">
                <div className="rectangleAdmin">
                    
                </div>
                <h2>
                    Welcome
                </h2>
                <h3 className="font">
                    Email
                </h3>
                <input type="text" className="email" id="passengers" />
                <h3 className="font">
                    Password
                </h3>
                <input type="text" className="password" id="passengers" />
                <button className="buttonLogin" id="searchButton">
                    <strong>Sign In</strong>
                </button>
            </div>
        </div>
    );
}

import React from "react";
import car from "../../../assets/fi_truck.svg"
import dashboard from "../../../assets/fi_home.svg"
import burger from "../../../assets/burger.svg"

export default function LandingPage() {
    return (
        <div className="landingPage">
            <div className="navbarAdmin">
                <div className="rectangleAdminMini">
                </div>
                <div className="navbarMenu dashboard">
                    <img src={dashboard} />
                    <h3>
                        Dashboard
                    </h3>
                </div>
                <div className="navbarMenu cars">
                    <img src={car} />
                    <h3>
                        Cars
                    </h3>
                </div>
            </div>
            <div className="headerAdmin">
                <div className="rectangleAdmin">

                </div>
                <div className="burgerIcon">
                    <img src={burger} />
                </div>
                <form className="d-flex" role="search">
                    <input type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
                <div className="currentUser">

                </div>
            </div>
        </div>
    );
}

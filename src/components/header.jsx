import React, { useState } from "react";


function Header() {

    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">Boutiqaat</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Log In <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Wishlist</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Register</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Men</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Kwuit
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <a className="dropdown-item" href="#">Egypt</a>
                                <a className="dropdown-item" href="#">India</a>
                                <a className="dropdown-item" href="#">USA</a>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">العربيه</a>
                        </li>
                    </ul>
                </div>
            </nav>
            {/* Categories Links */}
            <div className="categories">
                <a href="#">
                    TV
                </a>
                <a href="#">
                    Celebrities
                </a>
                <a href="#">
                    MakeUp
                </a>
                <a href="#">
                    TV
                </a>
                <a href="#">
                    Celebrities
                </a>
                <a href="#">
                    MakeUp
                </a>
                <a href="#">
                    TV
                </a>
                <a href="#">
                    Celebrities
                </a>
                <a href="#">
                    MakeUp
                </a>
                <a href="#">
                    TV
                </a>
                <a href="#">
                    Celebrities
                </a>
                <a href="#">
                    MakeUp
                </a>
            </div>
        </header>
    );
}

export default Header;

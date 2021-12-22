import { Link } from "react-router-dom";

export const MenuDesplegable = () => {

    return (
        <div className="d-block d-xl-none">
            <div className="menuMovil goldText">
                <div className="row g-0 fs-3 pt-3">
                    <div className="col-12 text-center">
                        <button id="menuTogle"  className="btn text-white tShadow fs-3" type="button" data-bs-toggle="collapse" data-bs-target="#menu" aria-label="menu button" aria-expanded="false" aria-controls="menu">
                            <i className="fas fa-bars"></i>
                        </button>
                    </div>
                </div>
            </div>
            <div className="collapse linksMenu" id="menu">
                <div className="col-12 pr-5">
                    <ul className="list-unstyled text-center">
                        <li>
                            <Link className="goldText text-decoration-none py-2" to="/">
                                HOME
                            </Link>
                        </li>
                        <li>
                            <Link className="goldText text-decoration-none py-2" to="/about-us">
                                ABOUT US
                            </Link>
                        </li>
                        <li>
                            <Link className="goldText text-decoration-none py-2" to="/betting-software">
                                BETTING SOFTWARE
                            </Link>
                        </li>
                        <li>
                            <Link className="goldText text-decoration-none py-2 text-uppercase" to="/software-features">
                                Software Features
                            </Link>
                        </li>
                        <li>
                            <Link className="goldText text-decoration-none py-2" to="/benefits">
                                BENEFITS
                            </Link>
                        </li>
                        <li>
                            <Link className="goldText text-decoration-none py-2" to="/promotions">
                                PROMOS
                            </Link>
                        </li>
                        <li>
                            <Link className="goldText text-decoration-none py-2" to="/products">
                                PRODUCTS
                            </Link>
                        </li>
                        <li>
                            <Link className="goldText text-decoration-none py-2" to={{pathname: "https://www.vipperhead.ag/blog/"}} target="_blank">
                                BLOG
                            </Link>
                        </li>
                        <li>
                            <Link className="goldText text-decoration-none py-2" to="/contact">
                                CONTACT US
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
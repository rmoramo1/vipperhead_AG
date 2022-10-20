import { Link } from "react-router-dom";
/*img */


export const MenuHover = () => {
    function hover() {
        document.getElementById("linksMenuHover").style.width = "30%";
        document.getElementById("linksMenuHover").style.opacity = "1";
    }
    function leave() {
        document.getElementById("linksMenuHover").style.opacity = "0";
        document.getElementById("linksMenuHover").style.width = "0%";
    }
    return (
        <div>
            <div className="menu goldText d-none d-xl-block">
                <div className="col-12 fs-4 pt-3">
                    <div className="row g-0 g-0">
                        <div className="col-3 d-none d-lg-block"></div>
                        <div className="col-10 col-lg-7 text-nowrap text-center fs-5">

                        </div>
                        <div className="col-2">
                            <button className="btn-menu-hover text-white tShadow fs-3" aria-label="button for display menu" type="button" onMouseEnter={hover}>
                                <i className="fas fa-bars"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="linksMenuHover" id="linksMenuHover" onMouseLeave={leave}>
                <div className="col-12">
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
                                BOOKIE SOFTWARE
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
                            <Link className="goldText text-decoration-none py-2" to={{ pathname: "https://www.vipperhead.ag/blog/" }} target="_blank">
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
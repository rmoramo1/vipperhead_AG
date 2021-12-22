import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
/*componentes*/
import { MenuDesplegable } from "../componentes/menuTogle";
import { MenuHover } from "../componentes/menuHover";

export const Sitemap = () => {
    return (
        <div className="container-fluid p-0 bgBlack text-center">
            <Helmet>
                <title>VIP Per Head Sitemap</title>
                <link rel="canonical" href="https://www.vipperhead.ag/sitemap/" />
                <meta name="description" content="VIP Per Head is a full software solution that offers  industry leading services, from software to customer sevice.Want to know more? Come on in!"></meta>
            </Helmet>
            <MenuDesplegable />
            <div className="sliderFaqs">
                <div className="titleSliderBene goldText col-12 text-center textEspecial pt-5">
                    SITEMAP
                </div>
                <MenuHover />
            </div>
            <div className="container mb-5 bg-dark p-5">
                <div className="row g-0">
                    <div className="col-12 col-xl-4">
                        <div className="col-12 fs-3 borderRight text-uppercase">
                            <Link className="goldTitle" to="/">HOME</Link>
                        </div>
                    </div>
                    <div className="col-12 col-xl-4">
                        <div className="col-12 fs-3 borderRight text-uppercase">
                            <Link className="goldTitle" to="/about">ABOUT US</Link>
                        </div>
                    </div>
                    <div className="col-12 col-xl-4">
                        <div className="col-12 fs-3 text-uppercase text-start">
                            <Link className="goldTitle" to="/bettingSoftware">betting Software</Link>
                            <ul className="goldText list-unstyled fs-5 pt-5 lh-lg">
                                <li>
                                    Sports Betting
                                </li>
                                <li>
                                    Live Betting
                                </li>
                                <li>
                                    Mobile Betting
                                </li>
                                <li>
                                    Horses and racebook
                                </li>
                                <li>
                                    Casino
                                </li>
                                <li>
                                    Live Casino
                                </li>
                                <li>Pools</li>
                                <li>Squares</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row g-0">
                    <div className="col-12 col-xl-4">
                        <div className="col-12 fs-3  text-uppercase text-start">
                            <div className="col-12 borderRight">
                                <Link className="goldTitle" to="/benefits">benefits</Link>
                            </div>
                            <ul className="goldText list-unstyled fs-5 pt-5 lh-lg">
                                <li>VIP per Head</li>
                                <li>Squares</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-12 col-xl-4">
                        <div className="col-12 fs-3 borderRight text-uppercase">
                            <Link className="goldTitle" to="/softwareFeatures">Software Features</Link>
                        </div>
                    </div>
                    <div className="col-12 col-xl-4">
                        <div className="col-12 fs-3 text-uppercase">
                            <Link className="goldTitle" to="/about">ABOUT US</Link>
                        </div>
                    </div>
                </div>
                <div className="row g-0">
                    <div className="col-12 col-xl-4">
                        <div className="col-12 fs-3  text-uppercase text-start">
                            <div className="col-12 borderRight">
                                <Link className="goldTitle" to="/blog">blog</Link>
                            </div>
                            <ul className="goldText list-unstyled fs-5 pt-5 lh-lg">
                                <li>Categories</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-12 col-xl-4">
                        <div className="col-12 fs-3 borderRight text-uppercase">
                            <Link className="goldTitle" to="/contact">contact us</Link>
                        </div>
                    </div>
                    <div className="col-12 col-xl-4">
                        <div className="col-12 fs-3 text-uppercase">
                            <Link className="goldTitle" to="/glossary">glossary</Link>
                        </div>
                    </div>
                </div>
                <div className="row g-0">
                    <div className="col-12 col-xl-4">
                        <div className="col-12 fs-3  text-uppercase text-start">
                            <div className="col-12 borderRight">
                                <Link className="goldTitle" to="/faqs">faqs</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="spanGold"></div>

        </div>
    );
};

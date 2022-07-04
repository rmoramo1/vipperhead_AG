/*componentes*/
import { JoinUsLittle } from "../componentes/joinUsLittle";
import { MenuDesplegable } from "../componentes/menuTogle";
import { MenuHover } from "../componentes/menuHover";
import { JoinSpan } from "../componentes/joinSpan";
import { Helmet } from "react-helmet";
/*img*/
import promo1 from "../assets/img/products/epos.jpg";
import promo2 from "../assets/img/products/sportbooks.jpg";
import promo4 from "../assets/img/products/casino.jpg";
import api from "../assets/img/products/api.JPG";

import skinBasic1 from "../assets/img/skin_galery/basic.webp";
import skinPremium1 from "../assets/img/skin_galery/premium1.webp";
import skinPremium2 from "../assets/img/skin_galery/premium2.webp";
import skinStandard1 from "../assets/img/skin_galery/standard1.webp";
import skinStandard2 from "../assets/img/skin_galery/standard2.webp";
import skinStandard3 from "../assets/img/skin_galery/standard3.webp";
import skinStandard4 from "../assets/img/skin_galery/standard4.webp";
import { HashLink } from 'react-router-hash-link';

function Products() {
    return (
        <div className="container-fluid p-0">
            <Helmet>
                <title>Sports betting, Casino and Sportsbook software</title>
                <HashLink rel="canonical" href="https://www.vipperhead.ag/products" />
                <meta name="description" content="Our developers have expertly created a sports betting, casino and sportsbook software ready to be installed on your website and entertain your visitors."></meta>
            </Helmet>
            <MenuDesplegable />
            <div className="sliderProducts">
                <div className="titleSlider titleProducts textEspecial">
                    Everything you need to run a bookie business is right here
                </div>
                <MenuHover />
            </div>
            <div className="spanGold"></div>
            <JoinUsLittle />
            <div className="col-12 bgBlack py-5" id="productsTop" name="productsTop">
                <div className="col-12 text-center text-white">
                    <h1>VIP Per Head Products</h1>
                </div>
                <div className="container text-center text-white fs-4 py-5" data-aos="flip-left" data-aos-duration="2000">
                    <p>
                        Our developers offer a wide variety of designs to supply your need. They fulfill practical solutions for those who have physical control, such as restaurants and sports bars, to be able to meet the most demanding customers.
                    </p>
                </div>
                <div className="container-fluid text-white" id="eposTop" name="eposTop">
                    <div className="row g-0 purple" data-aos="fade-left" data-aos-duration="2000" >
                        <div className="col-12 col-xl-4 p-5">
                            <div className="col-12 goldText fs-1">
                                EPOS
                            </div>
                            <div className="col-12">
                                EPOS stands for Electronic Point Of Sale. This is an essential technology designed for businesses that manage customers virtually and in person. This combination of software and hardware will ensure you can safely administrate your business.
                            </div>
                        </div>
                        <div className="col-12 col-xl-4 m-xl-auto ">
                            <img src={promo1} className="img-fluid maxH" alt="promo"></img>
                        </div>
                    </div>
                    <div id="SPORTSBOOK" name="SPORTSBOOK"></div>
                    <div className="row g-0" data-aos="fade-right" data-aos-duration="2000">
                        <div className="col-12 col-xl-4 py-2 px-5">
                            <div className="col-12 goldText fs-2">
                                SPORTSBOOK SOFTWARE
                            </div>
                            <div className="col-12">
                                Our developers have expertly created a sportsbook software ready to be installed on your website and entertain your visitors. You will never be short of sharp lines and betting options.<br />
                                Check out our promotions and start building your own business today!
                            </div>
                            <div className="col-12 mt-3 text-center">
                                <HashLink className="btn bgGold" to="/promotions#top_promo" rel="noopener noreferrer" aria-label="link to facebook">Promotions</HashLink>
                            </div>
                        </div>
                        <div className="col-12 col-xl-4 m-xl-auto ">
                            <img src={promo2} className="img-fluid maxH" alt="promo"></img>
                        </div>
                    </div>
                    <div id="API" name="API"></div>
                    <div className="row g-0 purple" data-aos="fade-right" data-aos-duration="2000">
                        <div className="col-12 col-xl-4 p-5">
                            <div className="col-12 goldText fs-1">
                                SPORTS API
                            </div>
                            <div className="col-12">
                                Currently, VIPPERHEAD uses in its premium and standard skin the information provided by sportstats365 through its powerful sports API.
                            </div>
                            <div className="col-12 mt-5 text-center">
                                <HashLink smooth className="btn bgGold" to={{ pathname: "https://sportsstats365.com/" }} rel="noopener noreferrer" target={"_blank"} aria-label="link to facebook">Sports Stats 365</HashLink>
                            </div>
                        </div>
                        <div className="col-12 col-xl-4 m-xl-auto ">
                            <img src={api} className="img-fluid maxH" alt="promo"></img>
                        </div>
                    </div>
                    <div id="SKINSPREMIUM" name="SKINSPREMIUM"></div>
                    <div className="row g-0" data-aos="fade-left" data-aos-duration="2000" >
                        <div className="col-12 col-xl-4 py-2 px-5">
                            <div className="col-12 goldText fs-2">
                                SKINS PREMIUM
                            </div>
                            <div className="col-12">
                                The best designer has created premium skins. We have a wide variety for you to decide which one suits your brand best.<br/><br/>
                                With only a few changes to your Website's code, you can request visual elements for a particular skin.<br/><br/>
                                You can choose between our basic and standard skins, and you will be sure that your site will look amazing.
                            </div>
                        </div>
                        <div className="col-12 col-xl-4 m-xl-auto ">
                            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src={skinPremium1} className="img_product" alt="skin basic" />
                                    </div>
                                    <div className="carousel-item">
                                        <img src={skinPremium2} className="img_product" alt="skin basic" />
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div id="SKINStandart" name="SKINStandart"></div>
                    <div className="row g-0 purple" data-aos="fade-right" data-aos-duration="2000" >
                        <div className="col-12 col-xl-4 p-5">
                            <div className="col-12 goldText fs-1">
                                STANDARD SKIN
                            </div>
                            <div className="col-12">
                                VIP Per Head Basic Skins
                            </div>
                        </div>
                        <div className="col-12 col-xl-4 m-xl-auto ">
                            <div id="standard" className="carousel slide" data-bs-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src={skinStandard1} className="img_product" alt="skin basic" />
                                    </div>
                                    <div className="carousel-item">
                                        <img src={skinStandard2} className="img_product" alt="skin basic" />
                                    </div>
                                    <div className="carousel-item">
                                        <img src={skinStandard3} className="img_product" alt="skin basic" />
                                    </div>
                                    <div className="carousel-item">
                                        <img src={skinStandard4} className="img_product" alt="skin basic" />
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#standard" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#standard" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div id="SKINSVIP" name="SKINSVIP"></div>
                    <div className="row g-0" data-aos="fade-left" data-aos-duration="2000" >
                        <div className="col-12 col-xl-4 p-5">
                            <div className="col-12 goldText fs-1">
                                BASIC SKIN
                            </div>
                            <div className="col-12">
                                VIP Per Head Basic Skins
                            </div>
                        </div>
                        <div className="col-12 col-xl-4 m-xl-auto overflow-hidden">
                            <img src={skinBasic1} className="img-fluid maxH" alt="skin basic" />
                            {/* <div id="basic" className="carousel slide" data-bs-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src={skinBasic1} className="img_product" alt="skin basic" />
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#basic" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#basic" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div> */}
                        </div>
                    </div>
                    <div id="CASINOWEBSITES" name="CASINOWEBSITES"></div>
                    <div className="row g-0 purple" data-aos="fade-right" data-aos-duration="2000" >
                        <div className="col-12 col-xl-4 p-5">
                            <div className="col-12 goldText fs-1">
                                CASINO WEBSITES
                            </div>
                            <div className="col-12">
                                We are affiliated with the best casino games. Ready for you to add to your website.
                                Your customers will have loads of fun playing on these fantastic casinos.
                            </div>
                        </div>
                        <div className="col-12 col-xl-4 m-xl-auto ">
                            <img src={promo4} className="img-fluid maxH" alt="promo"></img>
                        </div>
                    </div>
                </div>
                <div className="container goldText mt-5 text-center">
                    <JoinSpan />
                </div>
            </div>
            <div className="spanGold"></div>

        </div>
    );
};
export default Products;
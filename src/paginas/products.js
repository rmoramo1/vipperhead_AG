/*componentes*/
import { JoinUsLittle } from "../componentes/joinUsLittle";
import { MenuDesplegable } from "../componentes/menuTogle";
import { MenuHover } from "../componentes/menuHover";
import { JoinSpan } from "../componentes/joinSpan";
import { Helmet } from "react-helmet";
/*img*/
import promo1 from "../assets/img/products/epos.jpg";
import promo2 from "../assets/img/products/sportbooks.jpg";
import promo3 from "../assets/img/products/skinpremium.jpg";
import promo4 from "../assets/img/products/casino.jpg";
import promo5 from "../assets/img/products/skinVip.jpg";
export const Products = () => {
    return (
        <div className="container-fluid p-0">
            <Helmet>
                <title>Sports betting, Casino and Sportsbook software</title>
                <link rel="canonical" href="https://www.vipperhead.ag/products" />
                <meta name="description" content="Our developers have expertly created a sports betting, casino and sportsbook software ready to be installed on your website and entertain your visitors."></meta>
            </Helmet>
            <MenuDesplegable />
            <div className="sliderProducts">
                <div className="titleSlider textEspecial goldTitle">
                    PRODUCTS
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
                                EPOS stands for Electronic Point Of Sale. This is an essential technology designed for businesses that manage customers virtually and in person. This combination of software and hardware will ensure you can safely administrate your busines
                            </div>
                        </div>
                        <div className="col-12 col-xl-8 p-3 d-flex justify-content-center align-items-center">
                            <img src={promo1} className="img-fluid maxH" alt="promo"></img>
                        </div>
                    </div>
                    <div id="SPORTSBOOK" name="SPORTSBOOK"></div>
                    <div className="row g-0" data-aos="fade-right" data-aos-duration="2000">
                        <div className="col-12 col-xl-4 p-5">
                            <div className="col-12 goldText fs-1">
                                SPORTSBOOK
                            </div>
                            <div className="col-12">
                                Our developers have expertly created a sportsbook software ready to be installed on your website and entertain your visitors. You will never be short of sharp lines and betting options.
                            </div>
                        </div>
                        <div className="col-12 col-xl-8 p-3 d-flex justify-content-center align-items-center">
                            <img src={promo2} className="img-fluid maxH" alt="promo"></img>
                        </div>
                    </div>
                    <div id="SKINSPREMIUM" name="SKINSPREMIUM"></div>
                    <div className="row g-0 purple" data-aos="fade-left" data-aos-duration="2000" >
                        <div className="col-12 col-xl-4 p-5">
                            <div className="col-12 goldText fs-1">
                                SKINS PREMIUM
                            </div>
                            <div className="col-12">
                                The best designer has created premium skins. We have a wide variety for you to decide which one suits your brand best.
                            </div>
                        </div>
                        <div className="col-12 col-xl-8 p-3 d-flex justify-content-center align-items-center">
                            <img src={promo3} className="img-fluid maxH" alt="promo"></img>
                        </div>
                    </div>
                    <div id="SKINSVIP" name="SKINSVIP"></div>
                    <div className="row g-0" data-aos="fade-left" data-aos-duration="2000" >
                        <div className="col-12 col-xl-4 p-5">
                            <div className="col-12 goldText fs-1">
                                SKINS
                            </div>
                            <div className="col-12">
                                Vip Per Head skins gallery
                            </div>
                        </div>
                        <div className="col-12 col-xl-8 p-3 d-flex justify-content-center align-items-center">
                            <img src={promo5} className="img-fluid maxH" alt="promo"></img>
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
                        <div className="col-12 col-xl-8 p-3 d-flex justify-content-center align-items-center">
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

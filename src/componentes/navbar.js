import { Link } from "react-router-dom";

// import logo from "../assets/img/logoRounded.png"
import logo from "../assets/img/logoSquare.png"
import bandera from "../assets/img/esp.jpg"
import banderaENG from "../assets/img/eng.png"
import bitcoin from "../assets/img/payMethod/bitcoin.png"
import etherium from "../assets/img/payMethod/etherium.png"
import bankWire from "../assets/img/payMethod/Bank-Wire-online-casinos.jpg"
import netteller from "../assets/img/payMethod/netteller.png"
import skrill from "../assets/img/payMethod/skrill.png"
import moneyGram from "../assets/img/payMethod/moneyGram.png"
import moneyOrders from "../assets/img/payMethod/moneyOrders.jpg"
import paypal from "../assets/img/payMethod/paypal.png"
import westenunion from "../assets/img/payMethod/westenunion.png"

export const Navbar = () => {
    return (
        <div>
            <div className="degBlackPurple text-center navBarSite d-flex align-items-center h-100">
                <div className="container-fluid p-0">
                    <div className="row g-0">
                        <div className="col-sm-4">
                            <div className="col-12 col-sm-3">
                                <Link to="/">
                                    <img className="logoRedondoXS" src={logo} alt="logo"></img>
                                </Link>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="col-12 py-3">
                                <div className="row">
                                    <div className="col-6 g-0 p-0 ">
                                        <a href="tel:+18889923891">
                                            <div className="col-12 goldText">1-888-992-3891</div>
                                            <div className="col-12 text-center">
                                                <img className="bandera" src={banderaENG}></img>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="col-6 g-0 p-0">
                                        <a href="tel:+018000990754">
                                            <div className="col-12 goldText">01-800-099-0754</div>
                                            <div className="col-12 text-white">
                                                <div className="row">
                                                    <div className="col-12 text-center">
                                                        <img className="bandera" src={bandera}></img>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4 d-flex align-content-center justify-content-center">
                            <div className="row g-0 w-100">
                                <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center">
                                    <Link to={{ pathname: "https://vipperhead.mx/" }} rel="noopener noreferrer" className="btn gregBlack goldText" target={"_blank"}>
                                        Versión en Español
                                        {/* <img className="bandera" src={bandera} alt="logo"></img> */}
                                    </Link>
                                </div>
                                <div className="col-12 col-lg-6 d-flex align-items-center goldText">
                                    <div className="row g-0 w-100">
                                        <div className="col-1 "></div>
                                        <div className="col-2">
                                            <button className="btn fw-bold goldText" data-bs-toggle="modal" data-bs-target="#paymentModal">
                                                <i className="fas fa-money-bill-wave"></i>
                                            </button>
                                        </div>
                                        <div className="col-2 fs-4 text-center">
                                            <Link to={{ pathname: "https://www.facebook.com/Vipperhead-105367985078530" }} rel="noopener noreferrer" target={"_blank"} aria-label="link to facebook">
                                                <i className="fab fa-facebook-f"></i>
                                            </Link>
                                        </div>
                                        <div className="col-2 fs-4 text-center">
                                            <Link to={{ pathname: "https://twitter.com/PerheadVip" }} rel="noopener noreferrer" target={"_blank"} aria-label="link to linkedin">
                                                <i className="fab fa-twitter"></i>
                                            </Link>
                                        </div>
                                        <div className="col-2 fs-4 text-center">
                                            <Link to={{ pathname: "https://www.youtube.com/channel/UCvi6hyCvaQ7mFNM1ylAilZQ" }} rel="noopener noreferrer" target={"_blank"} aria-label="link to microphone podcast">
                                                <i className="fab fa-youtube"></i>
                                            </Link>
                                        </div>
                                        <div className="col-2 fs-4 text-center">
                                            <Link to={{ pathname: "https://www.instagram.com/vipperhead.ag/" }} rel="noopener noreferrer" target={"_blank"} aria-label="instagram">
                                                <i className="fab fa-instagram"></i>
                                            </Link>
                                        </div>
                                        {/* <div className="col-2 fs-4">
                                                                        <Link to="/" aria-label="link to microphone podcast">
                                                                            <i className="fas fa-microphone"></i>
                                                                        </Link>
                                                                    </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="paymentModal" tabIndex="-1" aria-labelledby="paymentModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content bgBeige">
                        <div id="payment" className="col-12">
                            <div className="col-12 p-5 pb-0">
                                <div className="btnClose">
                                    <button type="button" className="btn fs-3" data-bs-dismiss="modal" aria-label="Close"><i className="far fa-times-circle"></i> </button>
                                </div>
                                <div className="col-12 fs-2">
                                    AVALAIBLE <br /> PAYMENT OPTIONS
                                </div>
                                <div className="">
                                    <p> Convenient and easy payment methods.</p>
                                    <p> Whether it's bitcoin or major payment providers.</p>
                                    <p> You can pay your way.</p>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="d-flex">
                                    <div className="p-2 flex-fill">
                                        <img className="img-fluid payImg" src={bitcoin} alt="logo de bitcoin"></img>
                                    </div>
                                    <div className="p-2 flex-fill">
                                        <img className="img-fluid payImg" src={etherium} alt="logo de etherium"></img>
                                    </div>
                                    <div className="p-2 flex-fill">
                                        <img className="img-fluid payImg" src={skrill} alt="logo de skrill"></img>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="d-flex">
                                    <div className="p-2 flex-fill">
                                        <img className="img-fluid payImg" src={bankWire} alt="logo de bankWire"></img>
                                    </div>
                                    <div className="p-2 flex-fill">
                                        <img className="img-fluid payImg" src={netteller} alt="logo de netteller"></img>
                                    </div>
                                    <div className="p-2 flex-fill">
                                        <img className="img-fluid payImg" src={moneyOrders} alt="logo de moneyOrders"></img>
                                    </div>

                                </div>
                            </div>
                            <div className="col-12">
                                <div className="d-flex">
                                    <div className="p-2 flex-fill">
                                        <img className="img-fluid payImg" src={moneyGram} alt="logo de moneyGram"></img>
                                    </div>

                                    <div className="p-2 flex-fill">
                                        <img className="img-fluid payImg" src={paypal} alt="logo de paypal"></img>
                                    </div>
                                    <div className="p-2 flex-fill">
                                        <img className="img-fluid payImg" src={westenunion} alt="logo de westenunion"></img>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="spanGold"></div>
        </div>
    );
};
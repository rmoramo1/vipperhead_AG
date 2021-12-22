import { Link } from "react-router-dom";

import logo from "../assets/img/logoRounded.png"
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
                <div className="container-fluid">
                    <div className="col-12 col-lg-4 text-center d-block d-lg-none">
                        <Link to="/">
                            <img className="logoRedondoXS" src={logo} alt="logo"></img>
                        </Link>
                    </div>
                    <div className="row">
                        <div className="col-12 col-lg-4 py-3">
                            <div className="row">
                                <div className="col-6 g-0 p-0 ">
                                    <a href="tel:+18889923891">
                                        <div className="col-12 goldText">1-888-992-3891</div>
                                        <div className="col-12 text-white">
                                            <div className="row">
                                                <span className="float-left col-12 text-center">Free on ENG</span>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-6 g-0 p-0">
                                    <a href="tel:+018000990754">
                                        <div className="col-12 goldText">01-800-099-0754</div>
                                        <div className="col-12 text-white">
                                            <div className="row">
                                                <span className="float-left col-12 text-center">Free on ESP</span>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-4 py-3 text-center d-none d-lg-block">
                            <Link to="/">
                                <img className="logoRedondo" src={logo} alt="logo"></img>
                            </Link>
                        </div>
                        <div className="col-12 col-lg-4 d-flex align-items-center goldText">
                            <div className="row">
                                <div className="col-12">
                                    <div className="row">
                                        <div className="col-6">
                                            <button className="btn fw-bold goldText" data-bs-toggle="modal" data-bs-target="#paymentModal">
                                                PAYMENT METHODS
                                            </button>
                                        </div>
                                        <div className="col-2 fs-4">
                                            <Link to={{pathname: "https://www.facebook.com/Vipperhead-105367985078530"}} rel="noopener noreferrer" target={"_blank"} aria-label="link to facebook">
                                                <i className="fab fa-facebook-f"></i>
                                            </Link>
                                        </div>
                                        <div className="col-2 fs-4">
                                            <Link to={{pathname: "https://twitter.com/PerheadVip"}} rel="noopener noreferrer" target={"_blank"} aria-label="link to linkedin">
                                                    <i className="fab fa-twitter"></i>
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
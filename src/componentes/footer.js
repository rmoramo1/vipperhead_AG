import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import React, { useState } from 'react';
import { send } from 'emailjs-com';
/* img */
import logo from "../assets/img/logoRounded.webp";

export const Footer = () => {
    const [toSend, setToSend] = useState({
        email: '',
        message: '',
    });
    let tabSports = () => {
        setTimeout(function () {

            let idsHidden1 = document.getElementById('movileBetting');
            idsHidden1.classList.remove('active', 'show');

            let idsHidden2 = document.getElementById('horses');
            idsHidden2.classList.remove('active', 'show');

            let idsHidden3 = document.getElementById('onlineCasino');
            idsHidden3.classList.remove('active', 'show');

            let idsHidden4 = document.getElementById('liveCasino');
            idsHidden4.classList.remove('active', 'show');

            let ids = document.getElementById('liveBetting');
            ids.classList.remove('active', 'show');

            let idsHidden = document.getElementById('sportsBet');
            idsHidden.classList.add('active', 'show');
        }, 500);
    }

    let liveBetting = () => {
        setTimeout(function () {
            let idsHidden1 = document.getElementById('movileBetting');
            idsHidden1.classList.remove('active', 'show');

            let idsHidden2 = document.getElementById('horses');
            idsHidden2.classList.remove('active', 'show');

            let idsHidden3 = document.getElementById('onlineCasino');
            idsHidden3.classList.remove('active', 'show');

            let idsHidden4 = document.getElementById('liveBetting');
            idsHidden4.classList.remove('active', 'show');

            let idsHidden = document.getElementById('sportsBet');
            idsHidden.classList.remove('active', 'show');

            let ids = document.getElementById('liveBetting');
            ids.classList.add('active', 'show');
        }, 500);
    }

    let movileBetting = () => {
        setTimeout(function () {

            let idsHidden = document.getElementById('sportsBet');
            idsHidden.classList.remove('active', 'show');

            let idsHidden1 = document.getElementById('liveBetting');
            idsHidden1.classList.remove('active', 'show');

            let idsHidden2 = document.getElementById('horses');
            idsHidden2.classList.remove('active', 'show');

            let idsHidden3 = document.getElementById('onlineCasino');
            idsHidden3.classList.remove('active', 'show');

            let idsHidden4 = document.getElementById('liveCasino');
            idsHidden4.classList.remove('active', 'show');

            let ids = document.getElementById('movileBetting');
            ids.classList.add('active', 'show');
        }, 500);
    }
    let movileHorses = () => {
        setTimeout(function () {

            let idsHidden1 = document.getElementById('liveBetting');
            idsHidden1.classList.remove('active', 'show');

            let idsHidden2 = document.getElementById('movileBetting');
            idsHidden2.classList.remove('active', 'show');

            let idsHidden3 = document.getElementById('onlineCasino');
            idsHidden3.classList.remove('active', 'show');

            let idsHidden4 = document.getElementById('liveCasino');
            idsHidden4.classList.remove('active', 'show');

            let idsHidden = document.getElementById('sportsBet');
            idsHidden.classList.remove('active', 'show');

            let ids = document.getElementById('horses');
            ids.classList.add('active', 'show');
        }, 500);
    }


    let tabonlineCasino = () => {
        setTimeout(function () {

            let idsHidden1 = document.getElementById('movileBetting');
            idsHidden1.classList.remove('active', 'show');

            let idsHidden2 = document.getElementById('horses');
            idsHidden2.classList.remove('active', 'show');

            let idsHidden3 = document.getElementById('sportsBet');
            idsHidden3.classList.remove('active', 'show');

            let idsHidden4 = document.getElementById('liveCasino');
            idsHidden4.classList.remove('active', 'show');

            let ids = document.getElementById('liveBetting');
            ids.classList.remove('active', 'show');

            let idsHidden = document.getElementById('onlineCasino');
            idsHidden.classList.add('active', 'show');
        }, 500);
    }
    let LiveCasino = () => {
        setTimeout(function () {
            let idsHidden = document.getElementById('sportsBet');
            idsHidden.classList.remove('active', 'show');

            let idsHidden1 = document.getElementById('liveBetting');
            idsHidden1.classList.remove('active', 'show');

            let idsHidden2 = document.getElementById('horses');
            idsHidden2.classList.remove('active', 'show');

            let idsHidden3 = document.getElementById('onlineCasino');
            idsHidden3.classList.remove('active', 'show');

            let idsHidden4 = document.getElementById('movileBetting');
            idsHidden4.classList.remove('active', 'show');

            let ids = document.getElementById('liveCasino');
            ids.classList.add('active', 'show');
        }, 500);
    }
    let referalProgram = () => {
        setTimeout(function () {
            let idsHidden = document.getElementById('LOYALTYPROGRAM');
            idsHidden.classList.remove('active', 'show');

            let idLinkOFF = document.getElementById('LOYALTYPROGRAMID');
            idLinkOFF.classList.remove('active');

            let idLinkON = document.getElementById('referalProgramTab');
            idLinkON.classList.add('active');

            let ids = document.getElementById('referalProgram');
            ids.classList.add('active', 'show');
        }, 500);
    }
    let loyaltyProgram = () => {
        setTimeout(function () {
            let idsHidden = document.getElementById('referalProgram');
            idsHidden.classList.remove('active', 'show');

            let idLinkOff = document.getElementById('referalProgramTab');
            idLinkOff.classList.remove('active');

            let idLinkON = document.getElementById('LOYALTYPROGRAMID');
            idLinkON.classList.add('active');

            let ids = document.getElementById('LOYALTYPROGRAM');
            ids.classList.add('active', 'show');
        }, 500);
    }
    const quickSen = (e) => {
        e.preventDefault();
        send(
            'service_c5ege19',
            'template_ufjde3w',
            toSend,
            'user_ueDJqGkpi3yp8nodYgnsk'
        )
            .then((response) => {
                alert("The form was sent correctly");
                console.log('SUCCESS!', response.status, response.text);
            })
            .catch((err) => {
                alert("The form was not submitted correctly");
                console.log('FAILED...', err);
            });
        e.target.reset()
    };
    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    };
    return (
        <div className="degBlackPurple">
            <div className="col-12 text-center">
                <HashLink smooth to="/home#homeTop">
                    <img className="img-fluid" src={logo} alt="logo"></img>
                </HashLink>
            </div>
            <div className="row g-0 g-0">
                <div className="col-12">
                    <div className="row g-0 g-0 p-2">
                        <div className="col-12  col-lg-8">
                            <div className="row g-0 g-0">
                                <div className="col-12 col-lg-2 my-3 p-2 borderRW">
                                    <HashLink smooth className="goldText fw-bolder" to="/products#productsTop">PRODUCTS</HashLink>
                                    <ul className="list-unstyled">
                                        <li>
                                            <HashLink smooth className="goldText" to="/products#eposTop">Epos</HashLink>
                                        </li>
                                        <li>
                                            <HashLink smooth className="goldText" to="/products#SPORTSBOOK">Sportsbook</HashLink>
                                        </li>
                                        <li>
                                            <HashLink smooth className="goldText" to="/products#API">Sports API</HashLink>
                                        </li>
                                        <li>
                                            <HashLink smooth className="goldText" to="/products#SKINSPREMIUM">Skins Premium</HashLink>
                                        </li>
                                        <li>
                                            <HashLink smooth className="goldText" to="/products#SKINStandart">Standard Skins</HashLink>
                                        </li>
                                        <li>
                                            <HashLink smooth className="goldText" to="/products#SKINSVIP">Basic Skins</HashLink>
                                        </li>
                                        <li>
                                            <HashLink smooth className="goldText" to="/products#CASINOWEBSITES">Casino Websites</HashLink>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-12 col-lg-2 my-3 p-2 borderRW">
                                    <HashLink smooth className="goldText fw-bolder" to="/betting-software#bettingSoftWareTop">BETTING SOFTWARE</HashLink>
                                    <ul className="list-unstyled">
                                        <li>
                                            <HashLink smooth className="goldText" to="/betting-software#bettingSoftware" onClick={tabSports}>Sports Betting</HashLink>
                                        </li>
                                        <li>
                                            <HashLink smooth className="goldText" to="/betting-software#bettingSoftware" onClick={liveBetting}>Live Betting</HashLink>
                                        </li>
                                        <li>
                                            <HashLink smooth className="goldText" to="/betting-software#bettingSoftware" onClick={movileBetting}>Mobile Betting</HashLink>
                                        </li>
                                        <li>
                                            <HashLink smooth className="goldText" to="/betting-software#bettingSoftware" onClick={movileHorses}>Racebook</HashLink>
                                        </li>
                                        <li>
                                            <HashLink smooth className="goldText" to="/betting-software#bettingSoftware" onClick={tabonlineCasino}>Online Casino</HashLink>
                                        </li>
                                        <li>
                                            <HashLink smooth className="goldText" to="/betting-software#bettingSoftware" onClick={LiveCasino}>Live Casino</HashLink>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-12 col-lg-2 my-3 p-2 borderRW">
                                    <HashLink smooth className="goldText fw-bolder" to="/promotions#promosLink">PROMOS</HashLink>
                                    <ul className="list-unstyled">
                                        <li>
                                            <HashLink smooth className="goldText" to="/promotions#promoFreWeb">Free Website Management</HashLink>
                                        </li>
                                        <li>
                                            <HashLink smooth className="goldText" to="/promotions#weeksFree">2 Free Weeks</HashLink>
                                        </li>
                                        <li>
                                            <HashLink smooth className="goldText" to="/promotions#weeksFree">3 Free Weeks</HashLink>
                                        </li>
                                        <li>
                                            <HashLink smooth className="goldText" to="/promotions#4weeks">4 Free Weeks</HashLink>
                                        </li>
                                        <li>
                                            <HashLink smooth className="goldText" to="/promotions#cashFree">50% Cash Deposit</HashLink>
                                        </li>
                                        <li>
                                            <HashLink smooth className="goldText" to="/promotions#cashFree">100% BTC Deposit</HashLink>
                                        </li>

                                    </ul>

                                </div>
                                <div className="col-12 col-lg-2 my-3 p-2 borderRW">
                                    <Link className="goldText fw-bolder" to="/benefits">BENEFITS</Link>
                                    <ul className="list-unstyled">
                                        <li>
                                            <HashLink smooth className="goldText" to="/benefits#myTab" onClick={loyaltyProgram}>VIP Loyalty Program</HashLink>
                                        </li>
                                        <li>
                                            <HashLink smooth className="goldText" to="/benefits#myTab" onClick={referalProgram}>Referral Program</HashLink>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-12 col-lg-4 my-3 p-2 ">
                                    <HashLink smooth className="goldText fw-bolder" to="/contact#Contact">CONTACT US</HashLink>
                                    <ul className="list-unstyled">
                                        <li>
                                            <div className="col-12 col-lg-6 g-0 p-0">
                                                <div className="col-12 goldText">1-877-490-7723</div>
                                                <div className="col-12 text-white">Call Us For Free in ENG</div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="col-12 col-lg-6 g-0 p-0">
                                                <div className="col-12 goldText">01-800-099-0451</div>
                                                <div className="col-12 text-white">Call Us For Free in ESP</div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-3">
                            <div className="col-12 goldText fw-bold">
                                QUICK CONTACT
                            </div>
                            <div className="col-12">
                                <form onSubmit={quickSen}>
                                    <div className="col-12 my-3">
                                        <input className="bg-dark inputTextGold text-white col-12" name="email" id="emailQuick" type="email" placeholder="Your EMAIL Address*" aria-label="emailQuick" value={toSend.email} onChange={handleChange} required />
                                    </div>
                                    <div className="col-12">
                                        <textarea className="bg-dark inputTextGold text-white col-12" id="message" placeholder="Message*" name="message" rows="3" aria-label="emailQuick" value={toSend.message} onChange={handleChange} required></textarea>
                                    </div>
                                    <div className="col-12 mb-4">
                                        <button type="submit" className="btn gregBlack goldText col-12">CONTACT US NOW <i className="bi bi-arrow-right"></i></button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="darkGrey text-center">
                <div className="row g-0 py-4">
                    <div className="col-lg-4 goldText">
                        Copyright 2022 VIP Per Head
                    </div>
                    <div className="col-lg-4">
                        <div className="row g-0 g-0">
                            <div className="col-12 col-lg-3">
                                <Link className="goldText" to="/glossary">GLOSSARY</Link>
                            </div>
                            <div className="col-12 col-lg-3">
                                <Link className="goldText" to="/faqs">FAQ</Link>
                            </div>
                            <div className="col-12 col-lg-3">
                                <Link className="goldText" to="/siteMap">SITE MAP</Link>
                            </div>
                            <div className="col-12 col-lg-3">
                                <Link className="goldText" to="/joinus">Join Us</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 text-center">
                        <div className="row g-0 ">
                            <div className="col fs-4 text-center">
                                <Link to={{ pathname: "https://www.facebook.com/Vipperhead-105367985078530" }} rel="noopener noreferrer" target={"_blank"} aria-label="link to facebook">
                                    <i className="fab fa-facebook-f"></i>
                                </Link>
                            </div>
                            <div className="col fs-4 text-center">
                                <Link to={{ pathname: "https://twitter.com/PerheadVip" }} rel="noopener noreferrer" target={"_blank"} aria-label="link to linkedin">
                                    <i className="fab fa-twitter"></i>
                                </Link>
                            </div>
                            <div className="col fs-4 text-center">
                                <Link to={{ pathname: "https://www.youtube.com/channel/UCvi6hyCvaQ7mFNM1ylAilZQ" }} rel="noopener noreferrer" target={"_blank"} aria-label="link to microphone podcast">
                                    <i className="fab fa-youtube"></i>
                                </Link>
                            </div>
                            <div className="col fs-4 text-center">
                                <Link to={{ pathname: "https://www.instagram.com/vipperhead.ag/" }} rel="noopener noreferrer" target={"_blank"} aria-label="instagram">
                                    <i className="fab fa-instagram"></i>
                                </Link>
                            </div>
                            <div className="col fs-4 text-center">
                                <Link to={{ pathname: "https://wa.me/50663689412" }} rel="noopener noreferrer" target={"_blank"} aria-label="instagram">
                                    <i className="fa-brands fa-whatsapp"></i>
                                </Link>
                            </div>
                            <div className="col fs-4 text-center">
                                <Link to={{ pathname: "https://t.me/Vipperheadcs" }} rel="noopener noreferrer" target={"_blank"} aria-label="instagram">
                                    <i className="fa-brands fa-telegram"></i>
                                </Link>
                            </div>
                            <div className="col fs-4 text-center">
                                <Link to={{ pathname: "http://signal.me/#p/+50663689412" }} rel="noopener noreferrer" target={"_blank"} aria-label="instagram">
                                    <i className="bi bi-signal"></i>
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

    )
}
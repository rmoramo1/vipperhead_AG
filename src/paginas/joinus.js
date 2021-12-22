import { send } from 'emailjs-com';
import React, { useState } from 'react';
import { Helmet } from "react-helmet";
/*componentes*/
import { MenuDesplegable } from "../componentes/menuTogle";
import { MenuHover } from "../componentes/menuHover";
export const Joinus = () => {
    const [toSend, setToSend] = useState({
        fullname: '',
        email: '',
        message: '',
        country: '',
        phone: '',
        areaCode:'',
        password: '',
        sports: '',
        casino: '',
        horses: '',
        livebet: '',
        livecasino: '',
        dynamicbet: '',
        agencyName: '',
        players: '',
        type: '',
        promotion: '',
    });

    const joinSubmit = (e) => {
        e.preventDefault();
        send(
            'service_i4kzemi',
            'template_m3kqk9i',
            toSend,
            'user_OWnO0aLDdsjYtDti2MKVX'
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
    const changePass = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    };

    let message = "roy"
    if (toSend.password !== toSend.confirmPassword) {
        message = "Passwords are not the same"
    } else {
        message = "Passwords are the same";
    }

    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    };
    const onChangeValue = (e) => {
        const valor = e.target.value
        toSend.promotion = valor;
        console.log(toSend.promotion);
    }
    const onChangeValueTypeJoin = (e) => {
        const valor = e.target.value
        toSend.type = valor;
        console.log(toSend.type);
    }
    return (
        <div className="container-fluid p-0">
            <Helmet>
                <title>Join Us Fast and Easy with VIP Per Head </title>
                <link rel="canonical" href="https://www.vipperhead.ag/joinus/" />
                <meta name="description" content="Price per Head Sportsbook Bookie Software provides the highest Pay Per Head solutions in the industry."></meta>
            </Helmet>
            <MenuDesplegable />
            <div className="sliderFaqs" >
                <div className="titleSliderBene goldText col-12 text-center textEspecial pt-5 text-uppercase">
                    join us
                </div>
                <MenuHover />
            </div>
            <div className="spanGold"></div>
            <div className="col-12 purple py-5 text-white" id="joinTop">
                <div className="row g-0">
                    <div className="col-12 col-xl-2 text-center">
                        <div className="col-12 fs-1">JOIN US</div>
                        <div className="col-12 goldText">FAST & EASY</div>
                    </div>
                    <div className="col-12 col-xl-8">
                        <form onSubmit={joinSubmit}>
                            <div className="row g-0">
                                <div className="col-12 col-xl-4">
                                    <div className="row g-0 p-2">
                                        <input className="bg-dark inputTextGold text-white col-12 my-3" name="fullname" id="fullname" type="text" placeholder="FULL NAME*" aria-label="fullname" value={toSend.fullname} onChange={handleChange} required />
                                        <input className="bg-dark inputTextGold text-white col-3 my-3" name="areaCode" id="areaCode" type="number" placeholder="AREA" aria-label="areaCode" value={toSend.areaCode} onChange={handleChange} />
                                        <input className="bg-dark inputTextGold text-white col-9 my-3" name="phone" id="phone" type="number" placeholder="PHONE" aria-label="phone" value={toSend.phone} onChange={handleChange} />
                                        <input className="bg-dark inputTextGold text-white col-12 my-3" name="password" id="password" type="password" placeholder="PASSWORD*" aria-label="password" value={toSend.password} onChange={changePass} required />
                                    </div>
                                    <div className="col-12 text-white py-3 px-1 fs-4">
                                        Select
                                    </div>
                                    <div className="col-12 p-1">
                                        <div className="row g-0 text-white" onChange={onChangeValueTypeJoin}>
                                            <div className="col-6">
                                                <div className="form-check py-2">
                                                    <input className="form-check-input" type="radio" name="type" id="Sports" value="Sports" />
                                                    <label className="form-check-label" htmlFor="Sports">
                                                        Sports / Casino / Horses
                                                    </label>
                                                </div>

                                            </div>
                                            <div className="col-6">
                                                <div className="form-check py-2">
                                                    <input className="form-check-input" type="radio" name="type" id="LiveBettin" value="Live Bettin" />
                                                    <label className="form-check-label" htmlFor="LiveBettin">
                                                        Live Betting
                                                    </label>
                                                </div>
                                                <div className="form-check py-2">
                                                    <input className="form-check-input" type="radio" name="type" id="LiveCasino" value="Live Casino" />
                                                    <label className="form-check-label" htmlFor="LiveCasino">
                                                        Live Casino
                                                    </label>
                                                </div>
                                                <div className="form-check py-2">
                                                    <input className="form-check-input" type="radio" name="type" id="DynamicBetting" value="Dynamic Betting" />
                                                    <label className="form-check-label" htmlFor="DynamicBetting">
                                                        Dynamic Betting
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-xl-4 text-white">
                                    <div className="row g-0 p-2">
                                        <input className="bg-dark inputTextGold text-white col-12 my-3" name="email" id="emailAddress" type="mail" placeholder="EMAIL ADDRESS*" aria-label="emailAddress" value={toSend.email} onChange={handleChange} required />
                                        <input className="bg-dark inputTextGold text-white col-12 my-3" name="agencyName" id="agencyName" type="text" placeholder="AGENCY NAME*" aria-label="agencyName" value={toSend.agencyName} onChange={handleChange} required />
                                        <input className="bg-dark inputTextGold text-white col-12 my-3" name="confirmPassword" id="confirmPassword" type="password" placeholder="CONFIRM PASSWORD*" aria-label="confirmPassword" value={toSend.confirmPassword} onChange={changePass} required />
                                        <span className="text-white text-uppercase" id="messagePass1">{message}</span>

                                    </div>
                                    <div className="col-12 py-3 px-1 fs-4">
                                        Select the Promotion for you
                                    </div>
                                    <div className="col-12 p-1" onChange={onChangeValue}>
                                        <div className="form-check py-2">
                                            <input className="form-check-input" type="radio" name="promotions" id="promotions1" value="Free Website" />
                                            <label className="form-check-label" htmlFor="promotions1">
                                                Free Website
                                            </label>
                                        </div>
                                        <div className="form-check py-2">
                                            <input className="form-check-input" type="radio" name="promotions" id="promotions2" value="2 Free weeks: from 1 to 25 players" />
                                            <label className="form-check-label" htmlFor="promotions2">
                                                2 Free weeks: from 1 to 25 players                                                </label>
                                        </div>
                                        <div className="form-check py-2">
                                            <input className="form-check-input" type="radio" name="promotions" id="promotions3" value="3 Free weeks: from 26 to 75 players" />
                                            <label className="form-check-label" htmlFor="promotions3">
                                                3 Free weeks: from 26 to 75 players
                                            </label>
                                        </div>
                                        <div className="form-check py-2">
                                            <input className="form-check-input" type="radio" name="promotions" id="promotions4" value="4 Free Weeks: Management desition" />
                                            <label className="form-check-label" htmlFor="promotions4">
                                                4 Free Weeks: Management desition
                                            </label>
                                        </div>
                                        <div className="form-check py-2">
                                            <input className="form-check-input" type="radio" name="promotions" id="promotions5" value="50% cash deposit: any exept BTC" />
                                            <label className="form-check-label" htmlFor="promotions5">
                                                50% cash deposit: any exept BTC
                                            </label>
                                        </div>
                                        <div className="form-check py-2">
                                            <input className="form-check-input" type="radio" name="promotions" id="promotions6" value="100% BTC deposit: BTC only" />
                                            <label className="form-check-label" htmlFor="promotions6">
                                                100% BTC deposit: BTC only
                                            </label>
                                        </div>

                                    </div>
                                </div>
                                <div className="col-12 col-xl-4">
                                    <div className="row g-0 p-2">
                                        <input className="bg-dark inputTextGold text-white col-12 my-3" name="country" id="country" type="text" placeholder="COUNTRY*" aria-label="country" value={toSend.country} onChange={handleChange} required />
                                        <input className="bg-dark inputTextGold text-white col-12 my-3" name="players" id="players" type="number" placeholder="N° OF PLAYERS*" aria-label="players" />
                                        <div className="col-12 goldText">
                                            (*) Requiered Fiels
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 text-end py-5">
                                    <button className="bgGold btn" type="submit">JOIN TODAY  <i className="bi bi-arrow-right"></i></button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="col-12 col-xl-2">
                        <div className="row g-0">
                            <div className="col-12">
                                <div className="row g-0 p-1">
                                    <span className="col-12">PLEASE COMPLETE</span>
                                    <span className="col-12">YOUR INFORMATION</span>
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

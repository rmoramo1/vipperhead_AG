import React, { useState } from 'react';
import { send } from 'emailjs-com';
import { HashLink } from 'react-router-hash-link';


export const JoinUsLittle = () => {

    const [toSend, setToSend] = useState({
        fullname: '',
        email: '',
        country: '',
        phone: '',
        areaCode:'',
        password: '',
        promotion: '',
        players: '',
        SportsCasinoHorses: '',
        LiveBettin: '',
        LiveCasino: '',
        DynamicBetting: '',
        PropBuilder: '',
    });

    const onSubmit = (e) => {
        e.preventDefault();
        send(
            'service_5ihc1yh',
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
    }
    const handleSports = (e) => {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        toSend.SportsCasinoHorses = value;
    }
    const handleLiveBettin = (e) => {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        toSend.LiveBettin = value;
    }
    const handleLiveCasino = (e) => {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        toSend.LiveCasino = value;
    }
    const handleDynamicBetting = (e) => {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        toSend.DynamicBetting = value;
    }
    const handlePropBuilder = (e) => {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        toSend.PropBuilder = value;
    }
    return (
        <div className="purple">
            <form onSubmit={onSubmit}>
                <div className="container-fluid">
                    <div className="row g-0 p-2 text-center minH15">
                        <div className="col-12 col-lg-2">
                            <div className="row g-0 text-white p-0 pt-3">
                                <HashLink className="text-white btn gregBlack goldText" data-bs-toggle="collapse" to="/joinUsLittle#joinUsCollapse" href="#joinUsCollapse" role="button" aria-expanded="false" aria-controls="joinUsCollapse">
                                    <div className="col-12">
                                        <div className="row g-0">
                                            <span className="col-9">FULL INFORMATION</span>
                                            <div className="col-1 text-start">
                                                <i className="fas fa-chevron-down"></i>
                                            </div>
                                        </div>
                                    </div>
                                </HashLink>
                            </div>
                        </div>
                        <div className="col-12 col-lg-7">
                            <div className="row g-0 text-white">
                                <div className="col-6 col-lg-4 p-2 p-xl-3">
                                    <input className="bg-dark col-12 inputTextGold text-white" name="fullname" id="fullname" type="text" placeholder="FULL NAME*" aria-label="fullname" value={toSend.fullname} onChange={handleChange} required />
                                </div>
                                <div className="col-6 col-lg-4 p-2 p-xl-3">
                                    <input className="bg-dark col-12 inputTextGold text-white" name="email" id="email" type="mail" placeholder="EMAIL ADDRESS*" aria-label="email" value={toSend.email} onChange={handleChange} required />
                                </div>
                                <div className="col-6 col-lg-4 p-2 p-xl-3">
                                    <input className="bg-dark col-12 inputTextGold text-white" name="country" id="country" type="text" placeholder="COUNTRY" aria-label="country" value={toSend.country} onChange={handleChange} />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="col-12 text-end pt-3">
                                <button className="bgGold btn col-12" type="submit">JOIN TODAY  <i className="bi bi-arrow-right"></i></button>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="collapse" id="joinUsCollapse" name="joinUsCollapse">
                    <div className="col-12 purple pb-5 text-white">
                        <div className="row g-0">
                            <div className="col-12 col-xl-2 text-center">
                            </div>
                            <div className="col-12 col-xl-9">
                                <div className="row g-0">
                                    <div className="col-12 col-xl-4">
                                        <div className="row g-0 p-2">
                                        <input className="bg-dark inputTextGold text-white col-3 my-3" name="areaCode" id="areaCode" type="number" placeholder="AREA" aria-label="areaCode" value={toSend.areaCode} onChange={handleChange} />
                                        <input className="bg-dark inputTextGold text-white col-9 my-3" name="phone" id="phone" type="number" placeholder="PHONE" aria-label="phone" value={toSend.phone} onChange={handleChange} />
                                            <input className="bg-dark inputTextGold text-white col-12 my-3" name="password" id="password" type="password" placeholder="PASSWORD" aria-label="password" value={toSend.password} onChange={changePass} />
                                            <input className="bg-dark inputTextGold text-white col-12 my-3" name="confirmPassword" id="confirmPassword" type="password" placeholder="CONFIRM PASSWORD" aria-label="confirmPassword" value={toSend.confirmPassword} onChange={changePass} />
                                            <span className="text-white text-uppercase" id="messagePass1">{message}</span>
                                        </div>
                                    </div>
                                    <div className="col-12 col-xl-4 text-white">
                                        <div className="row g-0 p-2">
                                            <input className="bg-dark inputTextGold text-white col-12 my-3" name="agencyName" id="agencyName" type="text" placeholder="AGENCY NAME" aria-label="agencyName" value={toSend.agencyName} onChange={handleChange} />
                                        </div>
                                    </div>
                                    <div className="col-12 col-xl-4">
                                        <div className="row g-0 p-2">
                                            <input className="bg-dark inputTextGold text-white col-12 my-3" name="players" id="players" type="number" placeholder="N° OF PLAYERS" aria-label="players" value={toSend.players} onChange={handleChange} />
                                            <div className="col-12 goldText">
                                                (*) Requiered Fiels
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="row">
                                            <div className="col-12 col-lg-6">
                                                <div className="col-12 text-white py-3 px-1 fs-4">
                                                    Select Software
                                                </div>
                                                <div className="col-12 p-1">
                                                    <div className="row g-0 text-white">
                                                        <div className="col-6">
                                                            <div className="form-check py-2">
                                                                <input className="form-check-input" type="checkbox" name="Sports" id="Sports" value="Sports" onChange={handleSports} />
                                                                <label className="form-check-label" htmlFor="Sports">
                                                                    Sports / Casino / Horses
                                                                </label>
                                                            </div>
                                                            <div className="form-check py-2">
                                                                <input className="form-check-input" type="checkbox" name="LiveBettin" id="LiveBettin" value="Live Bettin" onChange={handleLiveBettin} />
                                                                <label className="form-check-label" htmlFor="LiveBettin">
                                                                    Live Betting
                                                                </label>
                                                            </div>
                                                            <div className="form-check py-2">
                                                                <input className="form-check-input" type="checkbox" name="LiveCasino" id="LiveCasino" value="Live Casino" onChange={handleLiveCasino} />
                                                                <label className="form-check-label" htmlFor="LiveCasino">
                                                                    Live Casino
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div className="col-6">
                                                            <div className="form-check py-2">
                                                                <input className="form-check-input" type="checkbox" name="DynamicBetting" id="DynamicBetting" value="Dynamic Betting" onChange={handleDynamicBetting} />
                                                                <label className="form-check-label" htmlFor="DynamicBetting">
                                                                    Dynamic Betting
                                                                </label>
                                                            </div>
                                                            <div className="form-check py-2">
                                                                <input className="form-check-input" type="checkbox" name="PropBuilder" id="PropBuilder" value="Prop Builder" onChange={handlePropBuilder} />
                                                                <label className="form-check-label" htmlFor="PropBuilder">
                                                                    Prop Builder
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12 col-lg-6">
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
                                        </div>
                                    </div>
                                    <div className="col-12 text-end py-5">
                                        <button className="bgGold btn" type="submit">JOIN TODAY  <i className="bi bi-arrow-right"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
};
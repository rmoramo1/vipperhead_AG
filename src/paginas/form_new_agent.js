import React, { useState } from 'react';
import { send } from 'emailjs-com';

import { Helmet } from "react-helmet";
/*componentes*/
import { MenuDesplegable } from "../componentes/menuTogle";
import { MenuHover } from "../componentes/menuHover";
function Form_New_Agent() {
    const [toSend, setToSend] = useState({
        from_name: '',
        email: '',
        agency_name: '',
        number_players: '',
        domain: '',
        password: '',

        sportsbook: '',
        horses: '',
        casino: '',
        live_betting: '',
        live_casino: '',
        live_casino: '',

        max_bet: '',
        online_minimun: '',
        minimun_phone: '',
        daily_win: '',
        daily_loss: '',
        weekly_win: '',
        weekly_loss: '',

        daily_win_live: '',
        daily_loss_live: '',
        weekly_win_live: '',
        weekly_loss_live: '',

        max_bet_horses: '',
        max_payout_horses: '',
        profile_horses: '',

        teams_number_parlay: '',
        max_dogs_parlay: '',
        bet_parlay: '',
        maxpayout_parlay: '',
        pay_true_odds_parlay: '',
        percentage_parlay: '',
        open_parlay: '',
        round_robin_parlay: '',
        max_round_robin_parlay: '',
        max_round_robin_payout_parlay: '',

        number_teaser_teams: '',
        teaser_push_loss: '',
        special_teaser_10_7: '',
        monster_teaser_13_10: '',
        special_teaser_push_loss: '',
        monster_teaser_push_loss: '',

        max_contest_bet: '',
        max_contest_payout: '',
        max_soccer_bet: '',

        change_credit_limit: '',
        suspend_wagering: '',
        manage_line: '',
        change_wager_limits: '',
        add_new_accounts: '',
        id_prefix: '',
        allow_deny: '',
        juice_setup: '',
        max_wager_setup: '',
        change_temp_credit: '',
        update_comments: '',
        set_minimum_bet: '',
        enter_deposits_withdrawals: '',
        allow_manage_freeplay: '',
        allow_place_wagers: '',
        message: '',
    });
    let clear = ()=>{
        document.getElementById("form_all").reset();
    }
    const contacSend = (e) => {
        e.preventDefault();
        send(
            'service_zn88urv',
            'template_emg093a',
            toSend,
            'aTlteNIIy7W_PR7F_'
        )
            .then((response) => {
                alert("The form was sent correctly");
                console.log('SUCCESS!', response.status, response.text);
            })
            .catch((err) => {
                alert("The form was not submitted correctly");
                console.log('FAILED...', err);
            });
        clear();
        e.target.reset()
    };

    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    };

    const onChangeValueType = (e) => {
        const valor = e.target.value
        toSend.type = valor;

    }
    const handleSports = (e) => {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        toSend.sportsbook = value;

    }
    const handleCasino = (e) => {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        toSend.casino = value;
    }
    const handleHorses = (e) => {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        toSend.horses = value;
    }
    const handleLiveBettin = (e) => {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        toSend.live_betting = value;
    }
    const handleLiveCasino = (e) => {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        toSend.live_casino = value;
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
    let yn = ["YES", "NO"];
    const [trueOdds, setTrueOdds] = useState("YES");
    toSend.pay_true_odds_parlay = trueOdds;
    const [openParlays, setopenParlays] = useState("YES");
    toSend.open_parlay = openParlays;
    const [roundRobin, setroundRobin] = useState("YES");
    toSend.round_robin_parlay = roundRobin;
    const [numberTeaserTeams, setnumberTeaserTeams] = useState("YES");
    toSend.teaser_push_loss = numberTeaserTeams;
    const [specialteaser107, setspecialteaser107] = useState("YES");
    toSend.special_teaser_10_7 = specialteaser107;
    const [monsterteaser1310, setmonsterteaser1310] = useState("YES");
    toSend.monster_teaser_13_10 = monsterteaser1310;
    const [specialteaserpushloss, setspecialteaserpushloss] = useState("YES");
    toSend.special_teaser_push_loss = specialteaserpushloss;
    const [monsterteaserpushloss, setmonsterteaserpushloss] = useState("YES");
    toSend.monster_teaser_push_loss = monsterteaserpushloss;
    const [changecreditlimit, setchangecreditlimit] = useState("YES");
    toSend.change_credit_limit = changecreditlimit;
    const [suspendwagering, setsuspendwagering] = useState("YES");
    toSend.suspend_wagering = suspendwagering;
    const [manageline, setmanageline] = useState("YES");
    toSend.manage_line = manageline;
    const [changewagerlimits, setchangewagerlimits] = useState("YES");
    toSend.change_wager_limits = changewagerlimits;
    const [addnewaccounts, setaddnewaccounts] = useState("YES");
    toSend.add_new_accounts = addnewaccounts;
    const [idprefix, setidprefix] = useState("YES");
    toSend.id_prefix = idprefix;
    const [allowdeny, setallowdeny] = useState("YES");
    toSend.allow_deny = allowdeny;
    const [juicesetup, setjuicesetup] = useState("YES");
    toSend.juice_setup = juicesetup;
    const [maxwagersetup, setmaxwagersetup] = useState("YES");
    toSend.max_wager_setup = maxwagersetup;
    const [changetempcredit, setchangetempcredit] = useState("YES");
    toSend.change_temp_credit = changetempcredit;
    const [updatecomments, setupdatecomments] = useState("YES");
    toSend.update_comments = updatecomments;
    const [setminimumbet, setsetminimumbet] = useState("YES");
    toSend.set_minimum_bet = setminimumbet;
    const [enterdepositswithdrawals, setenterdepositswithdrawals] = useState("YES");
    toSend.enter_deposits_withdrawals = enterdepositswithdrawals;
    const [allowmanagefreeplay, setallowmanagefreeplay] = useState("YES");
    toSend.allow_manage_freeplay = allowmanagefreeplay;
    const [allowplacewagers, setallowplacewagers] = useState("YES");
    toSend.allow_place_wagers = allowplacewagers;


    return (
        <div className="container-fluid p-0">
            <Helmet>
                <title>Form_New_Agent </title>
                {/* <link rel="canonical" href="https://www.vipperhead.ag/contact" /> */}
                {/* <meta name="description" content="Have any questions, suggestions or need to contact us? Click here and leave us a message, chat, email or call us. We would love to hear from you. VIP Per Head, best."></meta> */}
            </Helmet>
            <MenuDesplegable />
            <div className="sliderForm">
                <div className="titleSliderBene goldTextLight col-12 text-center textEspecial">
                enter your agency's data
                </div>
                <MenuHover />
            </div>
            <div className="spanGold"></div>
            <div className="container">
                <div className="col-12 bgBlack py-5">
                    <div className="row g-0">
                        <div className="col-12 pb-5" name="contact" id="Contact">
                            <form onSubmit={contacSend} id="form_all">
                                <div className="row g-0">
                                    <div className="col-12 text-white">
                                        <h2>Personal Information</h2>
                                    </div>
                                    <div className="col-12 col-xl-6">
                                        <div className="row g-0 p-2 pt-0">
                                            <input className="bg-dark col-12 inputTextGold text-white mb-3" name="from_name" id="from_name" type="text" placeholder="FULL NAME*" aria-label="from_name" value={toSend.from_name} onChange={handleChange} required />
                                            <input className="bg-dark inputTextGold text-white col-12 my-3" name="domain" id="domain" type="text" placeholder="DOMAIN" aria-label="domain" value={toSend.domain} onChange={handleChange} />
                                            <input className="bg-dark inputTextGold text-white col-12 my-3" name="agency_name" id="agency_name" type="text" placeholder="AGENCY NAME" aria-label="agency_name" value={toSend.agency_name} onChange={handleChange} required />

                                        </div>
                                    </div>
                                    <div className="col-12 col-xl-6 text-white">
                                        <div className="row g-0 p-2 pt-0">
                                            <input className="bg-dark inputTextGold text-white col-12 mb-3" name="email" id="email" type="email" placeholder="EMAIL ADDRESS*" aria-label="emailAddress" value={toSend.email} onChange={handleChange} required />

                                            <input className="bg-dark inputTextGold text-white col-12 my-3" name="number_players" id="number_players" type="number" placeholder="N° OF PLAYERS" aria-label="number_players" value={toSend.number_players} onChange={handleChange} required/>
                                            
                                            <input className="bg-dark inputTextGold text-white col-12 my-3" name="password" id="password" type="text" placeholder="PASSWORD" aria-label="password" value={toSend.password} onChange={handleChange} />
                                            <p className="text-white" required>This PASSWORD will be used to create your agency by our agents, it does not create a user or registration.</p>
                                        </div>
                                    </div>
                                    <div className="col-12 text-white">
                                        <h2>Select Software</h2>
                                    </div>
                                    <div className="col-12 borderB">
                                        <div className="row g-0 text-white" onChange={onChangeValueType}>
                                            <div className="col-6">
                                                <div className="form-check py-2">
                                                    <div className="form-check py-2">
                                                        <input className="form-check-input" type="checkbox" name="Sports" id="Sports" value="Sports" onChange={handleSports} />
                                                        <label className="form-check-label" htmlFor="Sports">
                                                            Sportsbook
                                                        </label>
                                                    </div>
                                                    <div className="form-check py-2">
                                                        <input className="form-check-input" type="checkbox" name="Sports" id="Sports" value="Sports" onChange={handleCasino} />
                                                        <label className="form-check-label" htmlFor="Sports">
                                                            Casino
                                                        </label>
                                                    </div>
                                                    <div className="form-check py-2">
                                                        <input className="form-check-input" type="checkbox" name="Sports" id="Sports" value="Sports" onChange={handleHorses} />
                                                        <label className="form-check-label" htmlFor="Sports">
                                                            Horses
                                                        </label>
                                                    </div>

                                                </div>
                                            </div>
                                            <div className="col-6">
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
                                    <div className="col-12 text-white borderB py-5">
                                        <div className="col-12 text-white">
                                            <h2> Specific Agency Information</h2>
                                        </div>
                                        <div className="col-12 py-3">
                                            Basic Betting Limits
                                        </div>
                                        <div className="col-lg-3">
                                            <div class="input-group mb-3">
                                                <span class="input-group-text" id="basic-addon1">MAX</span>
                                                <input className="bg-dark form-control inputTextGold text-white" name="max_bet" id="max_bet" type="number" aria-label="max_bet" value={toSend.max_bet} onChange={handleChange} />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-3">
                                                <div class="input-group mb-3">
                                                    <span class="input-group-text" id="basic-addon2">Online Minimum</span>
                                                    <input className="bg-dark form-control inputTextGold text-white" name="online_minimun" id="online_minimun" type="number" pla aria-label="online_minimun" value={toSend.online_minimun} onChange={handleChange} />
                                                </div>
                                            </div>
                                            <div className="col-lg-3">
                                                <div class="input-group mb-3">
                                                    <span class="input-group-text" id="basic-addon3">Minimum by Phone</span>
                                                    <input className="bg-dark form-control inputTextGold text-white" name="minimun_phone" id="minimun_phone" type="number" aria-label="minimun_phone" value={toSend.minimun_phone} onChange={handleChange} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 py-3">
                                            Casino  Limits
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-3">
                                                <div class="input-group mb-3">
                                                    <span class="input-group-text" id="basic-addon2">Daily Win</span>
                                                    <input className="bg-dark form-control inputTextGold text-white" name="daily_win" id="daily_win" type="number" aria-label="daily_win" value={toSend.daily_win} onChange={handleChange} />
                                                </div>
                                            </div>
                                            <div className="col-lg-3">
                                                <div class="input-group mb-3">
                                                    <span class="input-group-text" id="basic-addon3">Daily Loss</span>
                                                    <input className="bg-dark form-control inputTextGold text-white" name="daily_loss" id="daily_loss" aria-label="daily_loss" type="number" value={toSend.daily_loss} onChange={handleChange} />
                                                </div>
                                            </div>
                                            <div className="col-lg-3">
                                                <div class="input-group mb-3">
                                                    <span class="input-group-text" id="basic-addon3">Weekly Win</span>
                                                    <input className="bg-dark form-control inputTextGold text-white" name="weekly_win" id="weekly_win" type="number" aria-label="weekly_win" value={toSend.weekly_win} onChange={handleChange} />
                                                </div>
                                            </div>
                                            <div className="col-lg-3">
                                                <div class="input-group mb-3">
                                                    <span class="input-group-text" id="basic-addon3">Weekly Loss</span>
                                                    <input className="bg-dark form-control inputTextGold text-white" name="weekly_loss" id="weekly_loss" type="number" aria-label="weekly_loss" value={toSend.weekly_loss} onChange={handleChange} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 py-3">
                                            Live Casino  Limits
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-3">
                                                <div class="input-group mb-3">
                                                    <span class="input-group-text" id="basic-addon2">Daily Win</span>
                                                    <input className="bg-dark form-control inputTextGold text-white" name="daily_win_live" id="daily_win_live" type="number" aria-label="daily_win_live" value={toSend.daily_win_live} onChange={handleChange} />
                                                </div>
                                            </div>
                                            <div className="col-lg-3">
                                                <div class="input-group mb-3">
                                                    <span class="input-group-text" id="basic-addon3">Daily Loss</span>
                                                    <input className="bg-dark form-control inputTextGold text-white" name="daily_loss_live" id="daily_loss_live" type="number" aria-label="daily_loss_live" value={toSend.daily_loss_live} onChange={handleChange} />
                                                </div>
                                            </div>
                                            <div className="col-lg-3">
                                                <div class="input-group mb-3">
                                                    <span class="input-group-text" id="basic-addon3">Weekly Win</span>
                                                    <input className="bg-dark form-control inputTextGold text-white" name="weekly_win_live" id="weekly_win_live" type="number" aria-label="weekly_win_live" value={toSend.weekly_win_live} onChange={handleChange} />
                                                </div>
                                            </div>
                                            <div className="col-lg-3">
                                                <div class="input-group mb-3">
                                                    <span class="input-group-text" id="basic-addon3">Weekly Loss</span>
                                                    <input className="bg-dark form-control inputTextGold text-white" name="weekly_loss_live" id="weekly_loss_live" type="number" aria-label="weekly_loss_live" value={toSend.weekly_loss_live} onChange={handleChange} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 py-3">
                                            Horses Limits / Profile
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-3">
                                                <div class="input-group mb-3">
                                                    <span class="input-group-text" id="basic-addon2">Max Bet</span>
                                                    <input className="bg-dark form-control inputTextGold text-white" name="max_bet_horses" id="max_bet_horses" type="number" aria-label="max_bet_horses" value={toSend.max_bet_horses} onChange={handleChange} />
                                                </div>
                                            </div>
                                            <div className="col-lg-3">
                                                <div class="input-group mb-3">
                                                    <span class="input-group-text" id="basic-addon3">Max Payout</span>
                                                    <input className="bg-dark form-control inputTextGold text-white" name="max_payout_horses" id="max_payout_horses" type="number" aria-label="max_payout_horses" value={toSend.max_payout_horses} onChange={handleChange} />
                                                </div>
                                            </div>
                                            <div className="col-lg-3">
                                                <div class="input-group mb-3">
                                                    <span class="input-group-text" id="basic-addon3">Profile</span>
                                                    <input className="bg-dark form-control inputTextGold text-white" name="profile_horses" id="profile_horses" aria-label="profile_horses" value={toSend.profile_horses} onChange={handleChange} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 py-3">
                                            Parlays Limits
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-3">
                                                <div class="input-group mb-3">
                                                    <span class="input-group-text" id="basic-addon2"># Teams</span>
                                                    <input className="bg-dark form-control inputTextGold text-white" name="teams_number_parlay" id="teams_number_parlay" type="number" aria-label="teams_number_parlay" value={toSend.teams_number_parlay} onChange={handleChange} />
                                                </div>
                                            </div>
                                            <div className="col-lg-3">
                                                <div class="input-group mb-3">
                                                    <span class="input-group-text" id="basic-addon3">Max Dogs</span>
                                                    <input className="bg-dark form-control inputTextGold text-white" name="max_dogs_parlay" id="max_dogs_parlay" type="number" aria-label="max_dogs_parlay" value={toSend.max_dogs_parlay} onChange={handleChange} />
                                                </div>
                                            </div>
                                            <div className="col-lg-3">
                                                <div class="input-group mb-3">
                                                    <span class="input-group-text" id="basic-addon3">Max Bet</span>
                                                    <input className="bg-dark form-control inputTextGold text-white" name="bet_parlay" type="number" id="bet_parlay" aria-label="bet_parlay" value={toSend.bet_parlay} onChange={handleChange} />
                                                </div>
                                            </div>
                                            <div className="col-lg-3">
                                                <div class="input-group mb-3">
                                                    <span class="input-group-text" id="basic-addon3">Maxpayout</span>
                                                    <input className="bg-dark form-control inputTextGold text-white" name="maxpayout_parlay" id="maxpayout_parlay" type="number" aria-label="maxpayout_parlay" value={toSend.maxpayout_parlay} onChange={handleChange} />
                                                </div>
                                            </div>
                                            <div className="col-lg-3">
                                                <div class="input-group mb-3">
                                                    <span class="input-group-text" id="basic-addon3">Pay True ODDS</span>
                                                    <select className="form-select" name="Day" aria-label="Default select example" defaultValue={"YES"} onChange={e => setTrueOdds(e.target.value)} required>
                                                        {
                                                            yn.map((index) => {
                                                                return (
                                                                    <option key={index} name="promotions" value={index}>{index}</option>
                                                                )
                                                            })
                                                        }
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-lg-3">
                                                <div class="input-group mb-3">
                                                    <span class="input-group-text" id="basic-addon3">Percentage</span>
                                                    <input className="bg-dark form-control inputTextGold text-white" name="percentage_parlay" id="percentage_parlay"  type="number" aria-label="percentage_parlay" value={toSend.percentage_parlay} onChange={handleChange} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 py-3">
                                            Allow:
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-3">
                                                <div class="input-group mb-3">
                                                    <span class="input-group-text" id="basic-addon3">Open Parlays</span>
                                                    <select className="form-select" name="Day" aria-label="Default select example" defaultValue={"YES"} onChange={e => setopenParlays(e.target.value)} required>
                                                        {
                                                            yn.map((index) => {
                                                                return (
                                                                    <option key={index} name="openparlays" value={index}>{index}</option>
                                                                )
                                                            })
                                                        }
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-lg-3">
                                                <div class="input-group mb-3">
                                                    <span class="input-group-text" id="basic-addon3">Round Robin</span>
                                                    <select className="form-select" name="Day" aria-label="Rounf Robin" defaultValue={"YES"} onChange={e => setroundRobin(e.target.value)} required>
                                                        {
                                                            yn.map((index) => {
                                                                return (
                                                                    <option key={index} name="roundRobin" value={index}>{index}</option>
                                                                )
                                                            })
                                                        }
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-lg-3">
                                                <div class="input-group mb-3">
                                                    <span class="input-group-text" id="basic-addon3">Max Round Robin Bet</span>
                                                    <input className="bg-dark form-control inputTextGold text-white" type="number" name="max_round_robin_parlay" id="max_round_robin_parlay" aria-label="max_round_robin_parlay" value={toSend.max_round_robin_parlay} onChange={handleChange} />
                                                </div>
                                            </div>
                                            <div className="col-lg-3">
                                                <div class="input-group mb-3">
                                                    <span class="input-group-text" id="basic-addon3">Max Round Robin Payout</span>
                                                    <input className="bg-dark form-control inputTextGold text-white" type="number" name="max_round_robin_payout_parlay" id="max_round_robin_payout_parlay" aria-label="max_round_robin_payout_parlay" value={toSend.max_round_robin_payout_parlay} onChange={handleChange} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 py-3">
                                            Teasers Limits
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-4">
                                                <div class="input-group mb-3">
                                                    <span class="input-group-text" id="basic-addon3">Number of Regular Teaser Teams</span>
                                                    <input className="bg-dark form-control inputTextGold text-white" type="number" name="number_teaser_teams" id="number_teaser_teams" aria-label="number_teaser_teams" value={toSend.number_teaser_teams} onChange={handleChange} />
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div class="input-group mb-3">
                                                    <span class="input-group-text" id="basic-addon3">Teasers Regular Push is Loss</span>
                                                    <select className="form-select" name="Day" aria-label="Default select example" defaultValue={"YES"} onChange={e => setnumberTeaserTeams(e.target.value)} required>
                                                        {
                                                            yn.map((index) => {
                                                                return (
                                                                    <option key={index} name="promotions" value={index}>{index}</option>
                                                                )
                                                            })
                                                        }
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div class="input-group mb-3">
                                                    <span class="input-group-text" id="basic-addon3">Special Teasers (10PT FB/7PT BK)</span>
                                                    <select className="form-select" name="Day" aria-label="Default select example" defaultValue={"YES"} onChange={e => setspecialteaser107(e.target.value)} required>
                                                        {
                                                            yn.map((index) => {
                                                                return (
                                                                    <option key={index} name="promotions" value={index}>{index}</option>
                                                                )
                                                            })
                                                        }
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div class="input-group mb-3">
                                                    <span class="input-group-text" id="basic-addon3">Monster Teaser (13PT FB/10PT BK)</span>
                                                    <select className="form-select" name="Day" aria-label="Default select example" defaultValue={"YES"} onChange={e => setmonsterteaser1310(e.target.value)} required>
                                                        {
                                                            yn.map((index) => {
                                                                return (
                                                                    <option key={index} name="promotions" value={index}>{index}</option>
                                                                )
                                                            })
                                                        }
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div class="input-group mb-3">
                                                    <span class="input-group-text" id="basic-addon3">Special Teaser Push is Loss</span>
                                                    <select className="form-select" name="Day" aria-label="Default select example" defaultValue={"YES"} onChange={e => setspecialteaserpushloss(e.target.value)} required>
                                                        {
                                                            yn.map((index) => {
                                                                return (
                                                                    <option key={index} name="promotions" value={index}>{index}</option>
                                                                )
                                                            })
                                                        }
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div class="input-group mb-3">
                                                    <span class="input-group-text" id="basic-addon3">Monster Teaser Push is Loss</span>
                                                    <select className="form-select" name="Day" aria-label="Default select example" defaultValue={"YES"} onChange={e => setmonsterteaserpushloss(e.target.value)} required>
                                                        {
                                                            yn.map((index) => {
                                                                return (
                                                                    <option key={index} name="promotions" value={index}>{index}</option>
                                                                )
                                                            })
                                                        }
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 py-3">
                                            Specific Wagering Limits
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-3">
                                                <div class="input-group mb-3">
                                                    <span class="input-group-text" id="basic-addon2">Max Contest Bet</span>
                                                    <input className="bg-dark form-control inputTextGold text-white" name="max_contest_bet" id="max_contest_bet" type="number" aria-label="max_contest_bet" value={toSend.max_contest_bet} onChange={handleChange} />
                                                </div>
                                            </div>
                                            <div className="col-lg-3">
                                                <div class="input-group mb-3">
                                                    <span class="input-group-text" id="basic-addon2">Max Contest Payout</span>
                                                    <input className="bg-dark form-control inputTextGold text-white" name="max_contest_payout" id="max_contest_payout" type="number" aria-label="max_contest_payout" value={toSend.max_contest_payout} onChange={handleChange} />
                                                </div>
                                            </div>
                                            <div className="col-lg-3">
                                                <div class="input-group mb-3">
                                                    <span class="input-group-text" id="basic-addon2">Max Soccer Bet</span>
                                                    <input className="bg-dark form-control inputTextGold text-white" name="max_soccer_bet" id="max_soccer_bet" type="number" aria-label="max_soccer_bet" value={toSend.max_soccer_bet} onChange={handleChange} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 text-white borderB py-5">
                                        <div className="col-12 text-white">
                                            <h2>Master Agent and Sub-Agents Rights</h2>
                                        </div>

                                        <div className="row">
                                            <div className="col-lg-3">
                                                <div class="input-group mb-3">
                                                    <span class="input-group-text" id="basic-addon3">Change Credit Limit</span>
                                                    <select className="form-select" name="Day" aria-label="Default select example" defaultValue={"YES"} onChange={e => setchangecreditlimit(e.target.value)} required>
                                                        {
                                                            yn.map((index) => {
                                                                return (
                                                                    <option key={index} name="openparlays" value={index}>{index}</option>
                                                                )
                                                            })
                                                        }
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-lg-3">
                                                <div class="input-group mb-3">
                                                    <span class="input-group-text" id="basic-addon3">Suspend Wagering</span>
                                                    <select className="form-select" name="Day" aria-label="setsuspendwagering" defaultValue={"YES"} onChange={e => setsuspendwagering(e.target.value)} required>
                                                        {
                                                            yn.map((index) => {
                                                                return (
                                                                    <option key={index} name="setsuspendwagering" value={index}>{index}</option>
                                                                )
                                                            })
                                                        }
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-lg-3">
                                                <div class="input-group mb-3">
                                                    <span class="input-group-text" id="basic-addon3">Manage Lines</span>
                                                    <select className="form-select" name="Day" aria-label="setmanageline" defaultValue={"YES"} onChange={e => setmanageline(e.target.value)} required>
                                                        {
                                                            yn.map((index) => {
                                                                return (
                                                                    <option key={index} name="setmanageline" value={index}>{index}</option>
                                                                )
                                                            })
                                                        }
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-lg-3">
                                                <div class="input-group mb-3">
                                                    <span class="input-group-text" id="basic-addon3">Change Wager Limits</span>
                                                    <select className="form-select" name="Day" aria-label="setmanageline" defaultValue={"YES"} onChange={e => setchangewagerlimits(e.target.value)} required>
                                                        {
                                                            yn.map((index) => {
                                                                return (
                                                                    <option key={index} name="setmanageline" value={index}>{index}</option>
                                                                )
                                                            })
                                                        }
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-lg-3">
                                                <div class="input-group mb-3">
                                                    <span class="input-group-text" id="basic-addon3">Add New Accounts</span>
                                                    <select className="form-select" name="Day" aria-label="setaddnewaccounts" defaultValue={"YES"} onChange={e => setaddnewaccounts(e.target.value)} required>
                                                        {
                                                            yn.map((index) => {
                                                                return (
                                                                    <option key={index} name="setaddnewaccounts" value={index}>{index}</option>
                                                                )
                                                            })
                                                        }
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-lg-3">
                                                <div class="input-group mb-3">
                                                    <span class="input-group-text" id="basic-addon3">ID Prefix</span>
                                                    <select className="form-select" name="Day" aria-label="setidprefix" defaultValue={"YES"} onChange={e => setidprefix(e.target.value)} required>
                                                        {
                                                            yn.map((index) => {
                                                                return (
                                                                    <option key={index} name="setidprefix" value={index}>{index}</option>
                                                                )
                                                            })
                                                        }
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-lg-3">
                                                <div class="input-group mb-3">
                                                    <span class="input-group-text" id="basic-addon3">Allow / Deny</span>
                                                    <select className="form-select" name="Day" aria-label="setallowdeny" defaultValue={"YES"} onChange={e => setallowdeny(e.target.value)} required>
                                                        {
                                                            yn.map((index) => {
                                                                return (
                                                                    <option key={index} name="setallowdeny" value={index}>{index}</option>
                                                                )
                                                            })
                                                        }
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-lg-3">
                                                <div class="input-group mb-3">
                                                    <span class="input-group-text" id="basic-addon3">Juice Setup</span>
                                                    <select className="form-select" name="Day" aria-label="setjuicesetup" defaultValue={"YES"} onChange={e => setjuicesetup(e.target.value)} required>
                                                        {
                                                            yn.map((index) => {
                                                                return (
                                                                    <option key={index} name="setjuicesetup" value={index}>{index}</option>
                                                                )
                                                            })
                                                        }
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-lg-3">
                                                <div class="input-group mb-3">
                                                    <span class="input-group-text" id="basic-addon3">Max Wager Setup</span>
                                                    <select className="form-select" name="Day" aria-label="setmaxwagersetup" defaultValue={"YES"} onChange={e => setmaxwagersetup(e.target.value)} required>
                                                        {
                                                            yn.map((index) => {
                                                                return (
                                                                    <option key={index} name="setmaxwagersetup" value={index}>{index}</option>
                                                                )
                                                            })
                                                        }
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-lg-3">
                                                <div class="input-group mb-3">
                                                    <span class="input-group-text" id="basic-addon3">Change Temp Credit</span>
                                                    <select className="form-select" name="Day" aria-label="setchangetempcredit" defaultValue={"YES"} onChange={e => setchangetempcredit(e.target.value)} required>
                                                        {
                                                            yn.map((index) => {
                                                                return (
                                                                    <option key={index} name="setchangetempcredit" value={index}>{index}</option>
                                                                )
                                                            })
                                                        }
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-lg-3">
                                                <div class="input-group mb-3">
                                                    <span class="input-group-text" id="basic-addon3">Update Comments</span>
                                                    <select className="form-select" name="Day" aria-label="setupdatecomments" defaultValue={"YES"} onChange={e => setupdatecomments(e.target.value)} required>
                                                        {
                                                            yn.map((index) => {
                                                                return (
                                                                    <option key={index} name="setupdatecomments" value={index}>{index}</option>
                                                                )
                                                            })
                                                        }
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-lg-3">
                                                <div class="input-group mb-3">
                                                    <span class="input-group-text" id="basic-addon3">Set minimum Bet</span>
                                                    <select className="form-select" name="Day" aria-label="setsetminimumbet" defaultValue={"YES"} onChange={e => setsetminimumbet(e.target.value)} required>
                                                        {
                                                            yn.map((index) => {
                                                                return (
                                                                    <option key={index} name="setsetminimumbet" value={index}>{index}</option>
                                                                )
                                                            })
                                                        }
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-lg-3">
                                                <div class="input-group mb-3">
                                                    <span class="input-group-text" id="basic-addon3">Enter Deposits / Withdrawals</span>
                                                    <select className="form-select" name="Day" aria-label="setenterdepositswithdrawals" defaultValue={"YES"} onChange={e => setenterdepositswithdrawals(e.target.value)} required>
                                                        {
                                                            yn.map((index) => {
                                                                return (
                                                                    <option key={index} name="setenterdepositswithdrawals" value={index}>{index}</option>
                                                                )
                                                            })
                                                        }
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-lg-3">
                                                <div class="input-group mb-3">
                                                    <span class="input-group-text" id="basic-addon3">Allow Manage Freeplay</span>
                                                    <select className="form-select" name="Day" aria-label="setallowmanagefreeplay" defaultValue={"YES"} onChange={e => setallowmanagefreeplay(e.target.value)} required>
                                                        {
                                                            yn.map((index) => {
                                                                return (
                                                                    <option key={index} name="setallowmanagefreeplay" value={index}>{index}</option>
                                                                )
                                                            })
                                                        }
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-lg-3">
                                                <div class="input-group mb-3">
                                                    <span class="input-group-text" id="basic-addon3">Allow Place Wagers</span>
                                                    <select className="form-select" name="Day" aria-label="setallowplacewagers" defaultValue={"YES"} onChange={e => setallowplacewagers(e.target.value)} required>
                                                        {
                                                            yn.map((index) => {
                                                                return (
                                                                    <option key={index} name="setallowplacewagers" value={index}>{index}</option>
                                                                )
                                                            })
                                                        }
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 mt-3">
                                        <textarea className="bg-dark inputTextGold col-12 text-white" placeholder="Message" name="message" id="mesage" rows="5" value={toSend.message} onChange={handleChange}></textarea>
                                    </div>
                                    <div className="col-12 goldText">
                                        (*) Requiered Fiels
                                    </div>
                                    <div className="col-12 text-end text-white py-5">
                                        <p>You will soon be contacted by our Agents</p>
                                        <button className="bgGold btn" type="submit">SEND  <i className="bi bi-arrow-right"></i></button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="spanGold"></div>

        </div>
    );
};
export default Form_New_Agent;
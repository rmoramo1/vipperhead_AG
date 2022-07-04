import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
/*componentes*/
import { JoinUsLittle } from "../componentes/joinUsLittle";
import { MenuDesplegable } from "../componentes/menuTogle";
import { MenuHover } from "../componentes/menuHover";
import { JoinSpan } from "../componentes/joinSpan";

/* img */
import agent1 from "../assets/img/agents/Agent Interface Old.JPG";
import agent2 from "../assets/img/agents/Agent Menu 2.JPG";
import agent3 from "../assets/img/agents/Agent Menu 3.JPG";
import agent4 from "../assets/img/agents/Customer Adminstration Old.JPG";
import agent5 from "../assets/img/agents/Game Admin New.JPG";
import agent6 from "../assets/img/agents/Game Admin Old.JPG";
import agent7 from "../assets/img/agents/Pending Reports Old.JPG";
import agent8 from "../assets/img/agents/Scores Offering New.JPG";
import agent9 from "../assets/img/agents/Teaser and Configuration.JPG";
import player1 from "../assets/img/play/Bet Slip Confirmation.JPG";
import player2 from "../assets/img/play/Bet Slip Offering.JPG";
import player3 from "../assets/img/play/Bet Slip Software.JPG";
import player4 from "../assets/img/play/Casino New Interface.JPG";
import player5 from "../assets/img/play/Casino Software Table Games.JPG";
import player6 from "../assets/img/play/Horse Racing Software.JPG";
import player7 from "../assets/img/play/Live Betting Offering.JPG";
import player8 from "../assets/img/play/Live Betting Software.JPG";
import player9 from "../assets/img/play/Sports Betting Advanced Mode.JPG";
import player10 from "../assets/img/play/Sports Betting Logo Mode.JPG";
import player11 from "../assets/img/play/Sports Betting Old.JPG";
import player12 from "../assets/img/play/Table Game Pai Gow.JPG";

function SoftwareFeatures() {
    return (
        <div className="container-fluid p-0 bgBlack">
            <Helmet>
                <title>VIP Per Head Online Sports Betting Software Solutions</title>
                <link rel="canonical" href="https://www.vipperhead.ag/software-features" />
                <meta name="description" content="VIP Per Head online betting software solutions are the engine that powers the operational end of your private betting and bookmaker business."></meta>
            </Helmet>
            <MenuDesplegable />
            <div className="sliderSoftwareFeatures">
                <div className="titleSliderBene goldText col-12 text-center textEspecial">
                COME AND EXPERIENCE THE BEST CONSTRUCTED ELEMENTS FOR YOUR COMPANY.
                </div>
                <MenuHover />
            </div>
            <div className="spanGold"></div>
            <JoinUsLittle />
            <div className="col-12 bgBlack py-5">
                <div className="col-12 text-center">
                    <h1 className="goldText text-uppercase">the best betting services</h1>
                </div>
                <div className="container fs-3 text-white text-center">
                    <div className="col-12" data-aos="zoom-in" data-aos-duration="2000">
                        <p>
                            VIP Per Head online betting software solutions are the engine that powers the operational end of your private betting business, whether for sports, casinos, pools, etc. These specialized betting solutions are designed to process all transactions that are dedicated to the business of managing your bookmaker.
                        </p>
                        <p>
                            At VIP Per Head, we have staff among the most experienced and professional in the industry. These allow us to be innovating in our products to provide a better service.
                        </p>
                    </div>
                </div>
                <div className="container">
                    <div className="col-12 text-center text-white">
                        <div className="row g-0 my-5">

                            <div className="col-12 col-lg-3 py-lg-3 mt-3">
                                <div className="col-12 bgSportHome">
                                    <div className="textOffer col-12 tShadow">
                                        <p className="textEspecial fs-1">
                                            SPORTSBOOK SOFTWARE
                                        </p>
                                        <p>
                                           Full-featured Sportsbook with biggest selection of ligues available
                                        </p>

                                    </div>
                                </div>

                            </div>
                            <div className="col-12 col-lg-3 py-lg-3 mt-3">
                                <div className="col-12 bgCasinoHome">
                                    <div className="textOffer col-12 tShadow  text-uppercase">
                                        <p className="textEspecial fs-1">
                                            ONLINE CASINO
                                        </p>
                                        <p>
                                            live dealer casino AVAILABLE.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-3 py-lg-3 mt-3">
                                <div className="col-12 bgOnLineCasinoHome">
                                    <div className="textOffer col-12 tShadow">
                                        <p className="textEspecial fs-1">LIVE CASINO</p>
                                        <p>
                                            live bettin for all major leagues and tournaments.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-3 py-lg-3 mt-3">
                                <div className="col-12 bgLiveBetHome">
                                    <div className="textOffer col-12  tShadow">
                                        <p className="fs-1 textEspecial">lIVE BETTING</p>
                                        <p>
                                            Our representatives are available on phones and live chat 25/7/365.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row g-0 my-5">
                            <div className="col-12 col-lg-3 py-lg-3 mt-3">
                                <div className="col-12 bgHorseHome">
                                    <div className="textOffer col-12 tShadow">
                                        <p className="textEspecial fs-1">RACES</p>
                                        <p>
                                            Offer your players full-features racebook with all the major tracks.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-3 py-lg-3 mt-3">
                                <div className="col-12 bgPoker">
                                    <div className="textOffer col-12 tShadow">
                                        <p className="textEspecial fs-1">Poker</p>
                                        <p>
                                        We're here to make your poker playing experience the best it can be. We offer a variety of games.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-lg-3 py-lg-3 mt-3">
                                <div className="col-12 bgProp_Builder">
                                    <div className="textOffer col-12 tShadow">
                                        <p className="textEspecial fs-1">Prop Builder</p>
                                        <p>
                                        The pro builder, this level of interactivity adds even more dynamism your bets. 
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-3 py-lg-3 mt-3">
                                <div className="col-12 bgCallCenterHome">
                                    <div className="textOffer col-12 tShadow">
                                        <p className="textEspecial fs-1">BILINGUAL CALL CENTER</p>
                                        <p>
                                            Offer your players full-features racebook with all the major tracks.
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="col-12 goldText text-center text-uppercase py-3">
                            and much more
                        </div>
                    </div>
                </div>
                <div className="row g-0 mb-5">
                    <div className="bgSF">
                        <div className="container">
                            <div className="col-12 text-center text-white fs-2 py-5 text-uppercase tShadow">
                                VIP PER HEAD HAS ALL THE TOOLS THAT PROFESSIONAL BOOKIES NEED TO SUCCEED IN THEIR BUSINESS.
                            </div>
                            <div className="row g-0 lh-lg goldTextLight">
                                <div className="col-12 col-xl-4 p-1 ">
                                    <div className="col-12 purpleOp minH4 p-5" data-aos="fade-right" data-aos-duration="2000">
                                        <ul>
                                            <li>Accurate Injury Reports</li>
                                            <li>Agent Lines Management</li>
                                            <li>Agent profile</li>
                                            <li>Customizable Sub-agent Report</li>
                                            <li>Email Notification System</li>
                                            <li>Instant Activity Report</li>
                                            <li>Bilingual Staff Eng/spa</li>
                                            <li>Customize Player Profile</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-12 col-xl-4 p-1" data-aos="fade-up" data-aos-duration="2000">
                                    <div className="col-12 purpleOp minH4 p-5">
                                        <ul>
                                            <li>Customize Your Website</li>
                                            <li>Customizable limits</li>
                                            <li>Master Account Management</li>
                                            <li>Management of Line Types</li>
                                            <li>Highly Secure Website</li>
                                            <li>Lines Monitoring 24/7</li>
                                            <li>Limit all Services</li>
                                            <li>Line Mover Option</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-12 col-xl-4 p-1">
                                    <div className="col-12 purpleOp minH4 p-5" data-aos="fade-left" data-aos-duration="2000">
                                        <ul>
                                            <li>Live Casino</li>
                                            <li>Mobile Interface</li>
                                            <li>Online Casino</li>
                                            <li>Online Reports</li>
                                            <li>Online/Phone Services</li>
                                            <li>Pay Per Customer Activity</li>
                                            <li>Premium Package Services</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <ul className="nav p-1 fs-2 text-uppercase" id="agentsPlayers" role="tablist">
                        <li className="col-6 benefitsTabs" role="presentation">
                            <a className="goldText col-12 active" id="AgentsID" data-bs-toggle="tab" data-bs-target="#Agents" type="button" role="tab" aria-controls="home" aria-selected="true">
                                <div className="text-end pe-4">Agents Interface</div>
                            </a>
                        </li>
                        <li className="col-6 benefitsTabs" role="presentation">
                            <a className="goldText col-12" id="playerID" data-bs-toggle="tab" data-bs-target="#player" type="button" role="tab" aria-controls="home" aria-selected="true">
                                <div className="col-12">Players Interface</div>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="tab-content container" id="">
                    <div className="tab-pane fade show active text-center text-white" id="Agents" role="tabpanel" aria-labelledby="home-tab">
                        <div className="d-flex flex-wrap">
                            <div className="col-12 col-xl-3 p-3">
                                <img className="img-fluid imgAP" src={agent1}></img>
                            </div>
                            <div className="col-12 col-xl-3 p-3">
                                <img className="img-fluid imgAP" src={agent2}></img>
                            </div>
                            <div className="col-12 col-xl-3 p-3">
                                <img className="img-fluid imgAP" src={agent3}></img>
                            </div>
                            <div className="col-12 col-xl-3 p-3">
                                <img className="img-fluid imgAP" src={agent4}></img>
                            </div>
                            <div className="col-12 col-xl-3 p-3">
                                <img className="img-fluid imgAP" src={agent5}></img>
                            </div>
                            <div className="col-12 col-xl-3 p-3">
                                <img className="img-fluid imgAP" src={agent6}></img>
                            </div>
                            <div className="col-12 col-xl-3 p-3">
                                <img className="img-fluid imgAP" src={agent7}></img>
                            </div>
                            <div className="col-12 col-xl-3 p-3">
                                <img className="img-fluid imgAP" src={agent8}></img>
                            </div>
                            <div className="col-12 col-xl-3 p-3">
                                <img className="img-fluid imgAP" src={agent9}></img>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade text-center text-white" id="player" role="tabpanel" aria-labelledby="profile-tab">
                        <div className="d-flex flex-wrap">
                            <div className="col-12 col-xl-3 p-3">
                                <img className="img-fluid imgAP" src={player1}></img>
                            </div>
                            <div className="col-12 col-xl-3 p-3">
                                <img className="img-fluid imgAP" src={player2}></img>
                            </div>
                            <div className="col-12 col-xl-3 p-3">
                                <img className="img-fluid imgAP" src={player3}></img>
                            </div>
                            <div className="col-12 col-xl-3 p-3">
                                <img className="img-fluid imgAP" src={player4}></img>
                            </div>
                            <div className="col-12 col-xl-3 p-3">
                                <img className="img-fluid imgAP" src={player5}></img>
                            </div>
                            <div className="col-12 col-xl-3 p-3">
                                <img className="img-fluid imgAP" src={player6}></img>
                            </div>
                            <div className="col-12 col-xl-3 p-3">
                                <img className="img-fluid imgAP" src={player7}></img>
                            </div>
                            <div className="col-12 col-xl-3 p-3">
                                <img className="img-fluid imgAP" src={player8}></img>
                            </div>
                            <div className="col-12 col-xl-3 p-3">
                                <img className="img-fluid imgAP" src={player9}></img>
                            </div>
                            <div className="col-12 col-xl-3 p-3">
                                <img className="img-fluid imgAP" src={player10}></img>
                            </div>
                            <div className="col-12 col-xl-3 p-3">
                                <img className="img-fluid imgAP" src={player11}></img>
                            </div>
                            <div className="col-12 col-xl-3 p-3">
                                <img className="img-fluid imgAP" src={player12}></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mt-5">
                <JoinSpan />
            </div>
            <div className="spanGold"></div>

        </div>
    );
};
export default SoftwareFeatures;
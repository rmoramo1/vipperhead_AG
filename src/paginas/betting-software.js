import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

/*componentes*/
import { JoinUsLittle } from "../componentes/joinUsLittle";
import { MenuDesplegable } from "../componentes/menuTogle";
import { MenuHover } from "../componentes/menuHover";
/*img*/
import sport from "../assets/img/iconsSoftware/fut.png";
import live from "../assets/img/iconsSoftware/live.png";
import movil from "../assets/img/iconsSoftware/movile.png";
import horse from "../assets/img/iconsSoftware/horse.png";
import casino from "../assets/img/iconsSoftware/casino.png";
import liveCasino from "../assets/img/iconsSoftware/casinoFicha.png";
import { HashLink } from "react-router-hash-link";

function BettingSoftware(){
    return (
        <div className="container-fluid p-0">
            <Helmet>
                <title>Best Sports Betting and Sportsbook Software Solutions</title>
                <link rel="canonical" href="https://www.vipperhead.ag/betting-software" />
                <meta name="description" content="VIP Per Head works with the best sports betting software solutions with the highest security and privacy standards."></meta>
            </Helmet>
            <MenuDesplegable />
            <div className="sliderBettingSoftware">
                <div className="titleSliderBene col-12 text-center textEspecial text-uppercase">
                DISCOVER THE GREAT FEATURES OUR SYSTEM HAS TO OFFER.
                </div>
                <MenuHover />
            </div>
            <div className="spanGold"></div>
            <JoinUsLittle />
            <div className="col-12 bgBlack py-5" id="bettingSoftWareTop" name="bettingSoftWareTop">
                <div className="container">
                    <div className="col-12 text-center text-white py-3">
                        <h1>PREMIUM BOOKIES SOFTWARES</h1>
                    </div>
                    <div className="row g-0">
                        <div className="col-12 col-xl-6" data-aos="fade-right" data-aos-duration="2000">
                            <div className="col-12 purple p-3 py-5 minH fs-5 text-white">
                                <p>
                                    VIP Per Head works with the best software developers on the market to create a robust, agile, and dynamic platform that will allows the bookie to run their betting business from anywhere in the world at any time of the day.
                                </p>
                                <p>
                                    This software has the highest security and privacy standards, so the bookie can rest assured that third parties can’t access his business’s sensitive information and his clients.
                                </p>
                            </div>
                        </div>
                        <div className="col-12 col-xl-6" data-aos="fade-left" data-aos-duration="2000">
                            <div className="col-12 bgBeigeDark p-3 py-5 minH fs-5 text-white">
                                <p>
                                    At VIP Per Head, technology, processes, and people work as a single well-geared machine to ensure the software is always working correctly. The VIP Per Head bookie software will give the bookie complete control of his betting business.
                                </p>
                                <p>
                                    The bookie can access its administration dashboard 24 hours a day from anywhere globally with an internet connection. The dashboard information is updated in real-time with all the activities and movements in the betting business.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container py-5">
                    <div className="col-12 py-5" data-aos="zoom-in" data-aos-duration="2000">
                        <p className="text-white text-center fs-4">
                            With this software, the bookie can manage its players, set betting limits, set alerts for sports, lines, or players, move lines, close the accounts of dangerous players or debtors, and many other features
                        </p>
                    </div>
                    <div className="row g-0" name="bettingSoftware" id="bettingSoftware">
                        <div className="col-12 col-xl-6 g-0">
                            <div className="row g-0 goldText fw-bold text-center">
                                <ul className="nav p-1" id="tabFirst" role="tablist">
                                    <li className="col-4" role="presentation">
                                        <Link className="goldText col-12" id="home-tab" data-bs-toggle="tab" data-bs-target="#sportsBet" type="button" role="tab" aria-controls="home" aria-selected="true">
                                            <div className="col-12 borderGold pt-2">
                                                <div className="col-12">
                                                    <img className="imgIconSoft" src={sport} alt="icono de betting"></img>
                                                </div>
                                                <div className="col-12">SPORTS BETTING</div>
                                            </div>
                                        </Link>
                                    </li>
                                    <li className="col-4" role="presentation">
                                        <Link className="goldText col-12" id="liveBettingTab" data-bs-toggle="tab" data-bs-target="#liveBetting" type="button" role="tab" aria-controls="home" aria-selected="true">
                                            <div className="col-12 borderGold pt-2">
                                                <div className="col-12">
                                                    <img className="imgIconSoft" src={live} alt="icono de live betting"></img>

                                                </div>
                                                <div className="col-12">LIVE BETTING</div>
                                            </div>
                                        </Link>
                                    </li>
                                    <li className="col-4" role="presentation">
                                        <Link className="goldText col-12" id="movileBettingVB" data-bs-toggle="tab" data-bs-target="#movileBetting" type="button" role="tab" aria-controls="polls" aria-selected="true">
                                            <div className="col-12 borderGold pt-2">
                                                <div className="col-12">
                                                    <img className="imgIconSoft" src={movil} alt="icono de mobile betting"></img>
                                                </div>
                                                <div className="col-12">MOBILE BETTING</div>
                                            </div>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-12 col-xl-6">
                            <div className="row g-0 goldText fw-bold text-center">
                                <ul className="nav p-1" id="tabSecond" role="tablist">
                                    <li className="col-4" role="presentation">
                                        <Link className="goldText col-12" id="horsesID" data-bs-toggle="tab" data-bs-target="#horses" type="button" role="tab" aria-controls="home" aria-selected="true">
                                            <div className="col-12 borderGold pt-2">
                                                <div className="col-12">
                                                    <img className="imgIconSoft" src={horse} alt="icono horse betting"></img>
                                                </div>
                                                <div className="col-12">RACEBOOK</div>
                                            </div>
                                        </Link>
                                    </li>
                                    <li className="col-4" role="presentation">
                                        <Link className="goldText col-12" id="home-tab" data-bs-toggle="tab" data-bs-target="#onlineCasino" type="button" role="tab" aria-controls="home" aria-selected="true">
                                            <div className="col-12 borderGold pt-2">
                                                <div className="col-12">
                                                    <img className="imgIconSoft" src={casino} alt="icono de casino"></img>
                                                </div>
                                                <div className="col-12">ONLINE CASINO</div>
                                            </div>
                                        </Link>
                                    </li>
                                    <li className="col-4" role="presentation">
                                        <Link className="goldText col-12" id="liveCasinoID" data-bs-toggle="tab" data-bs-target="#liveCasino" type="button" role="tab" aria-controls="home" aria-selected="true">
                                            <div className="col-12 borderGold pt-2">
                                                <div className="col-12">
                                                    <img className="imgIconSoft" src={liveCasino} alt="icono de live casino"></img>

                                                </div>
                                                <div className="col-12">LIVE CASINO</div>
                                            </div>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid pb-5">
                    <div className="tab-content text-white">
                        <div className="tab-pane fade show active" id="sportsBet" role="tabpanel" aria-labelledby="home-tab">
                            <div className="row g-0">
                                <div className="col-12 col-xl-6">
                                    <div className="col-12 text-white text-uppercase display-4 fw-bold">
                                        sports
                                    </div>
                                    <div className="col-12 goldText text-uppercase display-2 fw-bold">betting</div>
                                    <div className="col-12 py-3 lh-lg fs-5 text-white">
                                        Bookies that use VIP Per Head services can offer their bettors a wide range of betting options, including traditional but popular leagues such as the NFL, MLB, NBA,NHL and much more! The players will also access international betting options such as tennis, soccer, and even the Olympic Games. VIP Per Head goes one step further and includes other types of betting options such as politics and entertainment.
                                    </div>
                                    <div className="col-12 py-3 lh-lg fs-5 goldText">
                                        With a catalog of betting options as complete as this one, bookies can serve all types of customers, ensuring a more profitable betting business.
                                    </div>
                                </div>
                                <div className="col-12 col-xl-6 bgSoftware">

                                </div>

                            </div>
                        </div>

                        <div className="tab-pane fade" id="liveBetting" role="tabpanel" aria-labelledby="profile-tab">
                            <div className="row g-0">
                                <div className="col-12 col-xl-6">
                                    <div className="col-12 text-white text-uppercase display-4 fw-bold">
                                        live
                                    </div>
                                    <div className="col-12 goldText text-uppercase display-2 fw-bold">betting</div>
                                    <div className="col-12 py-3 lh-lg fs-5 text-white">
                                        Nowadays, a betting business is not profitable if it does not have an excellent live betting platform since this type of betting increases the interaction and engagement of the players. VIP Per Head has developed a robust and easy-to-use live betting platform that bookies can offer their players to meet this need.
                                    </div>
                                    <div className="col-12 py-3 lh-lg fs-5 goldText">
                                        Through this platform, bettors can access betting options during the game for football, soccer, basketball, hockey, tennis, cricket, baseball, golf, UFC, and NASCAR events.
                                    </div>
                                    <div className="col-12 py-3 lh-lg fs-5">
                                        The game information is updated in real-time, allowing the bettor to have the latest data to make his betting decision.
                                    </div>
                                </div>
                                <div className="col-12 col-xl-6 bgLiveBetting">

                                </div>

                            </div>
                        </div>
                        <div className="tab-pane fade" id="movileBetting" role="tabpanel" aria-labelledby="contact-tab">
                            <div className="row g-0">
                                <div className="col-12 col-xl-6">
                                    <div className="col-12 text-white text-uppercase display-4 fw-bold">
                                        mobile
                                    </div>
                                    <div className="col-12 goldText text-uppercase display-2 fw-bold">betting</div>
                                    <div className="col-12 py-3 lh-lg fs-5 text-white">
                                        Seventy percent of online betting transactions happen on mobile devices, according to data from the 2019 Gambling Industry Report. It is for this reason that VIP Per Head has endeavored to create mobile-friendly systems.
                                    </div>
                                    <div className="col-12 py-3 lh-lg fs-5 goldText">
                                        Bookies can rest easy knowing that their players can access all betting options, including live betting, from their mobile devices.
                                    </div>
                                </div>
                                <div className="col-12 col-xl-6 bgMovileBetting">
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="horses" role="tabpanel" aria-labelledby="contact-tab">
                            <div className="row g-0">
                                <div className="col-12 col-xl-6">
                                    <div className="col-12 text-white text-uppercase display-4 fw-bold">
                                        horses
                                    </div>
                                    <div className="col-12 goldText text-uppercase display-2 fw-bold">& RACEBOOK</div>
                                    <div className="col-12 py-3 lh-lg fs-5 text-white">
                                        Horse racing never stops, year-round there is action on the tracks, and this action can be present in your betting business. VIP Per Head offers access to racebook that bookies can use to increase their income and keep money flowing throughout the year.
                                    </div>
                                    <div className="col-12 py-3 lh-lg fs-5 goldText">
                                        The practice of betting on horse racing began in the early 1600s in the UK. Since then, it has become so popular that it is estimated that more than $ 1 billion is wagered annually at these events. VIP Per Head gives bookies everything they need to take advantage of this lucrative market and offer betting options directly from the most important tracks worldwide.
                                    </div>
                                </div>
                                <div className="col-12 col-xl-6 bgHorses">
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="onlineCasino" role="tabpanel" aria-labelledby="contact-tab">
                            <div className="row g-0">
                                <div className="col-12 col-xl-6">
                                    <div className="col-12 text-white text-uppercase display-4 fw-bold">
                                        online
                                    </div>
                                    <div className="col-12 goldText text-uppercase display-2 fw-bold">casino</div>
                                    <div className="col-12 py-3 lh-lg fs-5 text-white">
                                        The bookies must complement their sports betting business with a casino. When the major leagues take a break between seasons, the betting action falls, and the business’s income is affected.
                                    </div>
                                    <div className="col-12 py-3 lh-lg fs-5 goldText">
                                        VIP Per Head has developed two online casino options compatible with mobile devices, so bookies can leverage their income during seasonal breaks and maintain stable cash flow throughout the year.
                                    </div>
                                    <div className="col-12 py-3 lh-lg fs-5 text-white">
                                        VIP Per Head casinos have more than 50 games such as Blackjack, Roulette, Slot machines, video poker, and bingo. These games provide an entertaining gaming experience with attractive graphics and an easy-to-use interface that catches the player
                                    </div>
                                </div>
                                <div className="col-12 col-xl-6 bgOnlineCasino">
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="liveCasino" role="tabpanel" aria-labelledby="contact-tab">
                            <div className="row g-0">
                                <div className="col-12 col-xl-6">
                                    <div className="col-12 text-white text-uppercase display-4 fw-bold">
                                        live
                                    </div>
                                    <div className="col-12 goldText text-uppercase display-2 fw-bold">casino</div>
                                    <div className="col-12 py-3 lh-lg fs-5 text-white">
                                        VIP Per Head also offers a live casino, which features flesh and bone dealers who distribute the cards or spin the roulette live through a system similar to a video conference.
                                    </div>
                                    <div className="col-12 py-3 lh-lg fs-5 goldText">
                                        This type of casino takes the experience of playing online to a new level. Following the premium philosophy of VIP Per Head, players access a game room with highly trained dealers who will make sure to meet all the player’s expectations.
                                    </div>
                                </div>
                                <div className="col-12 col-xl-6 bgLiveCasino">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container goldText mt-5 text-center">
                    <p>
                        JOIN TO THE SELECT GROUP OF BOOKIES THAT USE VIP PER HEAD TODAY.
                    </p>
                    <p>
                        Complete the form and access a free 4-week trial
                    </p>
                    <div className="spanGoldBorderBlack"></div>
                </div>
                <div className="col-12 text-center my-5">
                    <HashLink smooth className="bgGold btn" to="/joinus#joinusTop">JOIN TODAY  <i className="bi bi-arrow-right"></i></HashLink>
                </div>
            </div>
            <div className="spanGold"></div>

        </div>
    );
};
export default BettingSoftware;

/*componentes*/
import { MenuDesplegable } from "../componentes/menuTogle";
import { JoinSpan } from "../componentes/joinSpan";
import { MenuHover } from "../componentes/menuHover";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

function Faqs(){
    return (
        <div className="container-fluid p-0 bgBlack">
            <Helmet>
                <title>Frequently Asked Questions - VIP Per Head </title>
                <link rel="canonical" href="https://www.vipperhead.ag/faq/" />
                <meta name="description" content="Got questions? We got answers. At VIP Per Head we focus solely on providing you and your players with the best online sports betting software in the market."></meta>
            </Helmet>
            <MenuDesplegable />
            <div className="sliderFaqs">
                <div className="titleSliderBene goldText col-12 text-center textEspecial pt-5">
                    FAQS
                </div>
                <MenuHover />
            </div>
            <div className="container mb-5">
                <div className="row g-0">
                    <div className="col-12 my-2">
                        <button className="btn btnFaqs col-12 fw-bold text-start fs-4 p-3" type="button" data-bs-toggle="collapse" data-bs-target="#faq1" aria-expanded="false" aria-controls="faq1">
                            Can anyone become a bookie? <i className="fas fa-chevron-down"></i>
                        </button>
                        <div className="collapse collapseFaqs p-5 fs-4" id="faq1">
                            <div className="col-12">
                                Anyone can become a bookie with a bit of coaching and training. If you are an entrepreneur, you like sports, and you are looking to generate a lucrative source of income, then becoming a bookie is the right step.
                            </div>
                            <div className="col-12 goldText py-3">
                                Some of the skills that bookies need to be successful are:
                                <ul>
                                    <li>Extensive knowledge of sports</li>
                                    <li>Understanding how sports betting works</li>
                                    <li>Mathematical skills that allow you to keep accounting</li>
                                    <li>Business management skills</li>
                                    <li>Willingness to learn every day</li>
                                </ul>
                                VIP Per Head will help anyone who wants to become a bookie to continually develop and improve these and other skills to establish a profitable business
                            </div>
                        </div>
                    </div>
                    <div className="col-12 my-2">
                        <button className="btn btnFaqs col-12 fw-bold text-start fs-4 p-3" type="button" data-bs-toggle="collapse" data-bs-target="#faq2" aria-expanded="false" aria-controls="faq2">
                            Why do I need a Pay Per Head ally? <i className="fas fa-chevron-down"></i>
                        </button>
                        <div className="collapse collapseFaqs p-5 fs-4" id="faq2">
                            <div className="col-12 goldText py-3">
                                Pay Per Head providers is a vital component to having a successful betting business. These companies are responsible for providing the entire infrastructure that the bookie needs to operate their business.
                            </div>
                            <div className="col-12 goldText py-3">
                                Without a pay-per-head ally, the bookie would have to invest thousands of dollars to create all the necessary software, hardware, and staff infrastructure to operate a betting business.
                            </div>
                            <div className="col-12 goldText py-3">
                                The term pay per head refers to these companies’ business model since bookies should only pay a small fee for each active player. VIP Per Head starts at $ 10 per player (head), so the bookie can keep his operating costs extremely low and offer a high-quality experience to his players.
                            </div>
                        </div>
                    </div>
                    <div className="col-12 my-2">
                        <button className="btn btnFaqs col-12 fw-bold text-start fs-4 p-3" type="button" data-bs-toggle="collapse" data-bs-target="#faq3" aria-expanded="false" aria-controls="faq3">
                            Is it legal to operate a gambling site? <i className="fas fa-chevron-down"></i>
                        </button>
                        <div className="collapse collapseFaqs p-5 fs-4" id="faq3">
                            <div className="col-12 py-3">
                                VIP Per Head operates from Costa Rica, where it complies with all the laws to be an offshore betting operator.
                            </div>
                            <div className="col-12 goldText py-3 fw-bold">
                                The Member has the responsibility to determine the law and restrictions of his place of residence to comply with the jurisdiction to use the Website, the Service, and the Products.
                            </div>
                        </div>
                    </div>
                    <div className="col-12 my-2">
                        <button className="btn btnFaqs col-12 fw-bold text-start fs-4 p-3" type="button" data-bs-toggle="collapse" data-bs-target="#faq4" aria-expanded="false" aria-controls="faq4">
                            How do you earn money as a bookie? <i className="fas fa-chevron-down"></i>
                        </button>
                        <div className="collapse collapseFaqs p-5 fs-4" id="faq4">
                            <div className="col-12 goldText py-3">
                                Bookies earn money through VIG or Juice. This is the amount that players pay to place their bet. VIP Per Head provides sportsbook, online casino, and racebook services to bookies. With these betting options, they can generate multiple income sources by creating a comprehensive and premium betting site with everything that bettors want.
                            </div>
                        </div>
                    </div>
                    <div className="col-12 my-2">
                        <button className="btn btnFaqs col-12 fw-bold text-start fs-4 p-3" type="button" data-bs-toggle="collapse" data-bs-target="#faq5" aria-expanded="false" aria-controls="faq5">
                            Why should I choose VIP Per Head as my PPH provider? <i className="fas fa-chevron-down"></i>
                        </button>
                        <div className="collapse collapseFaqs p-5 fs-4" id="faq5">
                            <div className="col-12 goldText py-3">
                                VIP Per Head is a company focused on providing the best Pay Per Head service on the market. Our VIP Per Head team has more than 20 years of experience in the industry. We know bookies and gamblers’ needs in-depth. All this knowledge translates into a Pay Per Head service, whose main objective is to provide a premium experience for everyone.
                            </div>
                            <div className="col-12 goldText py-3">
                                VIP Per Head is a service designed for professional bookies who demand the latest technologies, the best customer service, vast betting options from more than 80 leagues and sports worldwide, profitable odds, and digital tools to manage their business any time from anywhere.
                            </div>
                        </div>
                    </div>
                    <div className="col-12 my-2">
                        <button className="btn btnFaqs col-12 fw-bold text-start fs-4 p-3" type="button" data-bs-toggle="collapse" data-bs-target="#faq6" aria-expanded="false" aria-controls="faq6">
                            What mechanisms does VIP Per Head use to guarantee online security? <i className="fas fa-chevron-down"></i>
                        </button>
                        <div className="collapse collapseFaqs p-5 fs-4" id="faq6">
                            <div className="col-12 goldText py-3">
                                We know that the internet can be a dangerous place and that many people are afraid to provide their personal or financial data to websites. To ensure bookies’ and gamblers’ security, VIP Per Head uses a 128-bit encryption system to protect users when they log into the site. In addition to this, there is a triple-redundancy system to guarantee the continuity of services. VIP Per Head implements the latest cybersecurity technologies and protocols to protect its servers from malicious attacks and information theft.
                            </div>
                        </div>
                    </div>
                    <div className="col-12 my-2">
                        <button className="btn btnFaqs col-12 fw-bold text-start fs-4 p-3" type="button" data-bs-toggle="collapse" data-bs-target="#faq7" aria-expanded="false" aria-controls="faq7">
                            How much control will I have over my betting business? <i className="fas fa-chevron-down"></i>
                        </button>
                        <div className="collapse collapseFaqs p-5 fs-4" id="faq7">
                            <div className="col-12 goldText py-3">
                                With our services, you will have complete control of everything that happens on your betting site. You can modify and customize things like your betting site’s looks and feel the betting limits and the odds that will be published; you can even move lines if necessary. VIP Per Head tools will allow you to control your betting business as you like.
                            </div>
                        </div>
                    </div>
                </div>
                <JoinSpan />
                <div className="container">
                    <div className="col-12 text-center fs-4 text-uppercase goldText mt-5">
                        Could not find your answer?
                    </div>
                    <div className="col-12 text-center mb-5">
                        <Link href="#" className="bgGold btn">
                            CLICK HERE <i className="bi bi-arrow-right"></i>
                        </Link>
                    </div>
                    <div className="col-12 text-center fs-5  goldText">
                        Contact us directly we will be glad to answer any questions you may have.
                    </div>
                </div>
            </div>
            <div className="spanGold"></div>

        </div>
    );
};
export default Faqs;

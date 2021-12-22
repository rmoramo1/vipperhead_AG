import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import React, { useState, useEffect, useContext } from "react";
import AOS from "aos";
import "../../node_modules/aos/dist/aos.css";
import { Context } from "../store/appContext";
/*componentes*/
import { JoinUsLittle } from "../componentes/joinUsLittle";
import { MenuDesplegable } from "../componentes/menuTogle";
import { MenuHover } from "../componentes/menuHover";
import { JoinSpan } from "../componentes/joinSpan";
import Post from "../componentes/post";
/* img */
import slide1 from "../assets/img/sliderHome/1.webp"
import slide2 from "../assets/img/sliderHome/2.webp"
import slide3 from "../assets/img/sliderHome/3.webp"
import slide4 from "../assets/img/sliderHome/4.webp"
import slide5 from "../assets/img/sliderHome/5.webp"
import uno from "../assets/img/1number.png"
import dos from "../assets/img/2number.png"

export const Home = () => {
	const { store, actions } = useContext(Context);
	useEffect(() => {
		AOS.init({ duration: 1500 });
	}, []);
	return (
		<div className="container-fluid p-0 promoPurple" id="homeTop">
			<Helmet>
				<title>Pay Per Head Sportsbook Services and Bookie Software</title>
				<link rel="canonical" href="https://www.vipperhead.ag/" />
				<meta name="description" content="VIP per Head is the best online pay Per Head bookie software service. VIP Per Head is a fully licensed sportsbook price Per Head solution."></meta>
			</Helmet>
			<MenuDesplegable />
			<div className="d-none d-xl-block">
				<div id="carouselExampleControls" className="carousel slide " data-bs-ride="carousel">
					<div className="carousel-inner">
						<div className="carousel-item active">
							<img src={slide1} className="d-block w-100" alt="imagen de persona con dinero en estadio" />
							<div className="titleSlider titleSlider1">
								<div className="row g-0 textEspecial text-center">
									<span className="col-12 p-0 m-0 g-0 titleSlider4Text1 text-white">welcome to a </span>
									<span className="col-12 p-0 m-0 g-0 titleSlider4Text2 goldTextLight">multimillion-dolar</span>
									<span className="col-12 p-0 m-0 g-0 titleSlider4Text2">industry</span>
									<span className="col-12 p-0 m-0 g-0 titleSlider4Text3">With our VIP Per Head service, you don't need <br />to be an expert to open <span className="fw-bolder">the best bookie</span></span>
								</div>
							</div>
						</div>
						<div className="carousel-item">
							<img src={slide2} className="d-block" alt="hombre sentado en sillon" />
							<div className="titleSlider titleSlider2">
								<div className="row g-0 textEspecial text-center">
									<span className="col-12 titleSlider2Text1">the best bookie</span>
									<span className="col-12 titleSlider2Text2">software</span>
									<span className="col-12 text-white titleSlider2Text3">you can offer your clients!</span>
								</div>
							</div>
						</div>
						<div className="carousel-item">
							<img src={slide3} className="d-block w-100" alt="mano con moneda de bitcoin falsa" />
							<div className="titleSlider titleSlider3">
								<div className="row g-0 textEspecial text-center">
									<span className="col-12 titleSlider3Text1 text-white">we accept</span>
									<span className="col-12 titleSlider3Text2">btc in software</span>
								</div>
							</div>
						</div>
						<div className="carousel-item">
							<img src={slide4} className="d-block w-100" alt="imagen de persona con dinero" />
							<div className="titleSlider titleSlider4">
								<div className="row g-0 textEspecial text-center">
									<span className="col-12 p-0 m-0 g-0 titleSlider4Text1 text-white">get up to</span>
									<span className="col-12 p-0 m-0 g-0 titleSlider4Text2 goldTextLight"> <span className="textNormal fw-bold">4</span> weeks of</span>
									<span className="col-12 p-0 m-0 g-0 titleSlider4Text2">free trial!</span>
									<span className="col-12 p-0 m-0 g-0 titleSlider4Text3">Concentrate on bulding connections <br /> with yor clients and grow up you <br /> BUSINES</span>
									<span className="col-12 p-0 m-0 g-0 titleSlider4Text4">leave the rest to us </span>
								</div>
							</div>
						</div>
						<div className="carousel-item">
							<img src={slide5} className="d-block w-100" alt="grupo jugando a poker" />
							<div className="titleSlider text-uppercase titleSlider5">
								<div className="row g-0 text-center">
									<span className="col-12 titleSlider5Text3 text-white">we are ready to provide <br /> everything you need for the </span>
									<span className="col-12 titleSlider5Text2 fw-bolder">best</span>
									<span className="col-12 titleSlider5Text4">sportbook <br /> software</span>
								</div>
							</div>
						</div>
						<MenuHover />
					</div>
					<button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
						<span className="carousel-control-prev-icon" aria-hidden="true"></span>
						<span className="visually-hidden">Previous</span>
					</button>
					<button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
						<span className="carousel-control-next-icon" aria-hidden="true"></span>
						<span className="visually-hidden">Next</span>
					</button>
				</div>
			</div>
			<div className="d-block d-xl-none">
				<div id="carouselExampleControlsMovil" className="carousel slide" data-bs-ride="carousel">
					<div className="carousel-inner">
						<div className="carousel-item active position-relative">
							<img src={slide1} className="d-block imgSliderCel w-100" alt="image promo 1" />
							<div className="row g-0 textEspecial text-center position-absolute text-white text-uppercase tShadow textSliderMovil">
								<span className="col-12 p-0 m-0 g-0 text-white">welcome to a </span>
								<span className="col-12 p-0 m-0 g-0 goldTextLight">multimillion-dolar industry</span>
							</div>
						</div>
						<div className="carousel-item">
							<img src={slide2} className="d-block imgSliderCel w-100" alt="image promo2" />
							<div className="row g-0 textEspecial text-center position-absolute text-white text-uppercase tShadow textSliderMovil">
								<span className="col-12 p-0 m-0 g-0 text-white">the best bookie software</span>
								<span className="col-12 p-0 m-0 g-0 goldTextLight">you can offer your clients!</span>
							</div>
						</div>
						<div className="carousel-item">
							<img src={slide3} className="d-block imgSliderCel w-100" alt="image promo 3" />
							<div className="row g-0 textEspecial text-center position-absolute text-white text-uppercase tShadow textSliderMovil">
								<span className="col-12 p-0 m-0 g-0 text-white">we accept</span>
								<span className="col-12 p-0 m-0 g-0 goldTextLight">btc in software</span>
							</div>
						</div>
						<div className="carousel-item">
							<img src={slide4} className="d-block imgSliderCel w-100" alt="image promo 4" />
							<div className="row g-0 textEspecial text-center position-absolute text-white text-uppercase tShadow textSliderMovil">
								<span className="col-12 p-0 m-0 g-0 text-white">get up to 4 weeks </span>
								<span className="col-12 p-0 m-0 g-0 goldTextLight">of free trial!</span>
							</div>

						</div>
						<div className="carousel-item position-relative">
							<img src={slide5} className="d-block imgSliderCel w-100" alt="image promo 5" />
							<div className="row g-0  text-center position-absolute text-white text-uppercase tShadow textSliderMovil5">
								<span className="col-12 text-white">we are ready to provide everything you need for the </span>
								<span className="col-12 fw-bolder textEspecial">best sportbook software</span>
							</div>
						</div>

						<MenuHover />
					</div>
					<button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsMovil" data-bs-slide="prev">
						<span className="carousel-control-prev-icon" aria-hidden="true"></span>
						<span className="visually-hidden">Previous</span>
					</button>
					<button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsMovil" data-bs-slide="next">
						<span className="carousel-control-next-icon" aria-hidden="true"></span>
						<span className="visually-hidden">Next</span>
					</button>
				</div>
			</div>
			<div className="spanGold"></div>
			<JoinUsLittle />
			<div className="col-12">
				<div className="row g-0 bgBlack g-0" >
					<div className="col-12 col-lg-5 p-5 text-white" data-aos="fade-right" data-aos-duration="2000">
						<div className="col-12 fs-2">YOUR BUSINNESS IS</div>
						<div className="col-12 fs-1 goldTitle">OUR BUSINESS!</div>
						<div className="col-12 pt-5">
							<p className="lh-lg">
								When you win, we win! and that is why we are compromised. With VIP Per Head services, your sportsbook will have the latest technology enabling you to run their business quickly, efficiently, and without complications. We have everything you need to operate a successful betting business.
							</p>
						</div>
					</div>
					<div className="col-12 col-lg-7 bgBTChome"></div>
				</div>
				<div className="container">
					<div className="container">
						<div className="col-12 text-center text-white py-5" data-aos="zoom-in" data-aos-duration="2000">
							<div className="col-12 fs-3">A PREMIUM EXPERIENCE</div>
							<div className="col-12 fs-2 goldTitle">FOR EVERYONE</div>
							<div className="col-12 col-lg-6 offset-lg-3 py-3">
								<p>
									VIP Per Head is a company focused on providing the best Pay Per Head service on the market.
									We have designed a superior pay-per-head service for professional bookies who demand the latest technologies, the best customer service, and the most comprehensive digital tools that will enable you to manage your business anytime and anywhere.
								</p>
							</div>
						</div>
					</div>
					<div className="container text-center text-white">
						<div className="col-12 tShadow fs-4">WHAT DO WE OFFER</div>
						<div className="row g-0 my-5">
							<div className="col-12 col-md-6 col-xl-4 py-md-3">
								<div className="col-12 bgSportHome">
									<div className="textOffer col-12 fs-1 tShadow textEspecial">SPORTSBOOK SOFTWARE</div>
								</div>
								<div className="col-12 my-3">
									<p>
										Five-star experience, solid platform, secure, and easy to use.<br /> Your customers will be able to place bets online 24/7.
									</p>
								</div>
							</div>
							<div className="col-12 col-md-6 col-xl-4 py-md-3">
								<div className="col-12 bgCasinoHome">
									<div className="textOffer col-12 fs-1 tShadow textEspecial">LIVE CASINOS</div>
								</div>
								<div className="col-12 my-3">
									<p>
										Players can access our VIP game rooms with first-rate dealers that will make sure to meet all expectations.
									</p>
								</div>
							</div>
							<div className="col-12 col-md-6 col-xl-4 py-md-3">
								<div className="col-12 bgOnLineCasinoHome">
									<div className="textOffer col-12 fs-1 tShadow textEspecial">ONLINE CASINO</div>
								</div>
								<div className="col-12 my-3">
									<p>
										Whether it’s on a phone, computer, or tablet, we have a wide range of casino games to choose from.
									</p>
								</div>
							</div>
				
							<div className="col-12 col-md-6 col-xl-4 py-md-3">
								<div className="col-12 bgLiveBetHome">
									<div className="textOffer col-12 fs-1 tShadow textEspecial">LIVE BETTING</div>
								</div>
								<div className="col-12 my-3">
									<p>
										Live betting available in all major leagues and sports.
									</p>
								</div>
							</div>
							<div className="col-12 col-md-6 col-xl-4 py-md-3">
								<div className="col-12 bgHorseHome">
									<div className="textOffer col-12 fs-1 tShadow textEspecial">RACES</div>
								</div>
								<div className="col-12 my-3">
									<p>
										Our racebook offers full features and the availability to bet on the best tracks all year round.
									</p>
								</div>
							</div>
							<div className="col-12 col-md-6 col-xl-4 py-md-3">
								<div className="col-12 bgCallCenterHome">
									<div className="textOffer col-12 fs-1 tShadow textEspecial">BILINGUAL CALL CENTER</div>
								</div>
								<div className="col-12 my-3">
									<p>
										VIP pay Per Head customer service is available 24/7/365 Phone, chat, and email.
									</p>
								</div>
							</div>
						</div>
						<div className="col-12 text-center goldTitle tShadow my-5 fs-3">
							AND MUCH MORE
						</div>
					</div>
				</div>
				<div className="row g-0 bgBlack text-center text-white py-5">
					<div className="row g-0 mb-3" data-aos="zoom-in" data-aos-duration="2000">
						<div className="col-12 fs-1 goldTitle">WHY VIP PER HEAD</div>
						<div className="col-12 col-lg-8 offset-lg-2 mt-3">
							<p>
								VIP Per Head is a company focused on providing the best Pay Per Head service on the market. The VIP Per Head team has more than 20 years of experience in the industry. We know the needs of bookies and gamblers in depth. All this knowledge translates into a Pay Per Head service, whose main objective is to provide a premium experience for everyone.
							</p>

						</div>
						<p >Our platform is a state-of-the-art white label bookmaking management solution built ourselves by our in-house team of experts.</p>
					</div>
					<div className="row g-0 mt-5">
						<div className="col-12 col-lg-6" data-aos="fade-right" data-aos-duration="2000">
							<div className="col-12 goldTitle fs-3">
								THE BEST ALLY FOR YOUR BETTING BUSINESS
							</div>
							<div className="col-12 p-5">
								<p>
									We have hired professional bookies to tailor VIP Per Head as a profitable and safe betting business.
								</p>
								<p>
									Vip Per Head tools and services allow bookies to create a business that operates 24 hours a day, seven days a week.
								</p>
								<p>
									The bookie will be able to delegate a large part of the operational task to the Vip Per Head team, which means that your business will continue to function even while you are asleep. Best of all, it will continue to generate income.
								</p>
							</div>

						</div>
						<div className="col-12 col-lg-6" data-aos="fade-left" data-aos-duration="2000">
							<div className="col-12 goldTitle fs-3">
								LOW OPERATION COST
							</div>
							<div className="col-12 p-5">
								<p>
									Using VIP Per Head services is the best way to establish a fully functional betting business with large companies’ features at a low operating cost.
								</p>
								<p>
									VIP Per Head charges a weekly fee per active player. Bookies will be able to use all the tools and services of VIP Per Head and will only have to pay for players who have placed a bet during the month.
								</p>
								<p>
									By having an ally such as VIP Per Head, bookies will have access to hundreds of thousands of dollars in software, hardware, and staff infrastructure at an extremely low cost per month.
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="blue py-5 text-white">
					<div className="col-12 text-center fs-3" data-aos="zoo-in" data-aos-duration="2000">A FULL SET OF SERVICES</div>
					<div className="container">
						<div className="row g-0">
							<div className="col-12 col-lg-4 p-5" data-aos="flip-left" data-aos-duration="2000">
								<ul>
									<li>
										More than 20 years of experience.
									</li>
									<li>
										Trust and discretion.
									</li>
									<li>
										Professional sportsbook site.
									</li>
									<li>
										Bilingual staff.
									</li>
									<li>
										Reduce your cost.
									</li>
									<li>
										The best product in the market.
									</li>
									<li>
										Online and phone wagering.
									</li>
									<li>
										24/7 service.
									</li>
									<li>
										Injury reports.
									</li>
								</ul>

							</div>
							<div className="col-12 col-lg-4 p-5" data-aos="flip-left" data-aos-duration="2000">
								<ul>
									<li>
										Line management.
									</li>
									<li>
										Accurate Injury Reports.
									</li>
									<li>
										Agent Lines Management.
									</li>
									<li>
										Bilingual Staff Eng/spa.
									</li>
									<li>
										Customizable  Player Profile.
									</li>
									<li>
										Customize Your Website.
									</li>
									<li>
										Highly Secure Website.
									</li>
									<li>
										Lines Monitoring 24/7.
									</li>
								</ul>
							</div>
							<div className="col-12 col-lg-4 p-5" data-aos="flip-left" data-aos-duration="2000">
								<ul>
									<li>
										Live Casino.
									</li>
									<li>
										Mobile Interface.
									</li>
									<li>
										Online Casino.
									</li>
									<li>
										Online Reports.
									</li>
									<li>
										Pay Per Customer Activity.
									</li>
									<li>
										Privacy And Security.
									</li>
									<li>
										Racebook.
									</li>
									<li>
										Sharpest Lines in Industry.
									</li>
									<li>
										Real-Time Online Access To Accounts.
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="col-12 text-center">
						<Link className="bgGold btn" to="/joinus">JOIN TODAY  <i className="bi bi-arrow-right"></i></Link>
					</div>
				</div>
				<div className="bgPurpleBLHome p-2">
					<div className="row g-0">
						<div className="col-12 col-lg-6" data-aos="fade-down-right" data-aos-duration="2000">
							<div className="col-12 fs-1 goldTitle">REGISTER NOW</div>
							<div className="col-12 fs-3 text-white">JOIN IN THE SELECT GROUP OF BOOKIES <br /> THAT USE VIP PER HEAD TODAY. <br /> COMPLETE THE INFORMATION AND access a  FREE 3-WEEKS TRIAL. </div>
						</div>
						<div className="col-12 col-lg-6 text-white">
							<div className="col-12 goldTitle fs-3" data-aos="fade-left" data-aos-duration="2000">YOU ARE READY!</div>
							<div className="col-12 fs-4" data-aos="fade-left" data-aos-duration="2000">START RUNNING YOUR WINNING BRAND</div>
							<div className="row g-0">
								<div className="col-6">
									<div className="col-12" data-aos="zoom-in" data-aos-duration="2000">
										<img src={uno} alt="imagen numero uno"></img>
									</div>
									<div className="col-12 goldText fs-3" data-aos="fade-right" data-aos-duration="2000">
										FILL THE FORM
									</div>
								</div>
								<div className="col-6">
									<div className="col-12" data-aos="zoom-in" data-aos-duration="2000">
										<img src={dos} alt="imagen numero uno"></img>
									</div>
									<div className="col-12 goldText fs-3" data-aos="fade-left" data-aos-duration="2000">
										CONTACT
									</div>
									<div className="col-12 text-white fs-5" data-aos="fade-left" data-aos-duration="2000">
										One of our representatives will contact you to step your account.
									</div>
								</div>
								<div className="col-12 text-center text-white mt-5">
									<Link className="bgGold btn" to="/joinus">JOIN TODAY  <i className="bi bi-arrow-right"></i></Link>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-12 fs-1 goldTitle text-center py-5">
					<Link to={{ pathname: "https://www.vipperhead.ag/blog/" }} target="_blank">
						BLOG
					</Link>
				</div>
				<div className="row g-0">
					{store.post.map((item, index) => {
						if (index < 6) {
							return (
								<div className="col-12 col-md-6 col-lg-4 p-0" key={index}>
									<Post
										title={item.title.rendered}
										yoast_head_json={item.yoast_head_json.og_description}
										link={item.link}
										url={item.featured_image_url}
										date={item.modified_gmt}
										autor={item.author_meta.display_name}
										categories={item.categories.category_name}
									/>
								</div>
							);
						}
					})}
				</div>
				<JoinSpan />
			</div>

			<div className="spanGold"></div>

		</div>
	);
};

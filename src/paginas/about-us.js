import { Helmet } from "react-helmet";
import React, { useEffect } from "react";
import AOS from "aos";
import "../../node_modules/aos/dist/aos.css";
/*componentes*/
import { JoinUsLittle } from "../componentes/joinUsLittle";
import { MenuDesplegable } from "../componentes/menuTogle";
import { MenuHover } from "../componentes/menuHover";
import { JoinSpan } from "../componentes/joinSpan";

function About (){
	useEffect(() => {
		AOS.init({ duration: 1500 });
	}, []);
	return (
		<div className="container-fluid p-0">
			<Helmet>
				<title>About VIP Per Head - Offshore Pay per Head Services and Software for Bookies</title>
				<link rel="canonical" href="https://www.vipperhead.ag/about-us" />
				<meta name="description" content="Vip Per Head is an offshore price per head company located in Costa Rica. Our products and excellent customer service make us one of the best pay per head service."></meta>
			</Helmet>
			<MenuDesplegable />
			<div className="sliderAbout">
				<div className="titleSlider textEspecial">
					ABOUT US
				</div>
				<MenuHover />
			</div>
			<div className="spanGold"></div>
			<JoinUsLittle />
			<div className="col-12 bgBlack py-5">
				<div className="col-12 text-center py-5" data-aos="zoom-in" data-aos-duration="2000">
					<h1 className="goldTitle fw-bold">WHY VIP PER HEAD</h1>
				</div>
				<div className="container text-center text-white fs-4" data-aos="flip-left" data-aos-duration="2000">
					<p>
						Vip Per Head is an offshore company located in Costa Rica. Our products and excellent customer service make us one of the most prestigious per head in the industry. Our vision is to be able to offer our clients a premium service at a very affordable cost.
					</p>
					<p>
						In orther to make this vision real, we develop an infrastructure with the best software and hardware, as well as the best and most trained customer service staff.
					</p>
				</div>
				<div className="container">

					<div className="row g-0 text-white">
						<div className="col-12 text-center text-uppercase goldTitle my-5" data-aos="zoom-in" data-aos-duration="2000">
							<h2>customer reviews</h2>
						</div>
						<div className="col-12 col-xl-3 p-2" data-aos="flip-left" data-aos-duration="2000">
							<div className="card bg-dark">
								<div className="card-header darkGrey">
								Jose Armando
								</div>
								<div className="card-body">
									<blockquote className="blockquote mb-0">
										<p>So far, I have had a good experience, easy to navigate around, and fun to play on casino and poker.</p>
									</blockquote>
								</div>
							</div>
						</div>
						<div className="col-12 col-xl-3 p-2" data-aos="flip-left" data-aos-duration="2000">
						<div className="card bg-dark">
								<div className="card-header darkGrey">
								Andrew Smith
								</div>
								<div className="card-body">
									<blockquote className="blockquote mb-0">
										<p>I have played on several websites, and they usually take too long to payout or give you the runaround. Here I always get paid in a timely manner.</p>
									</blockquote>
								</div>
							</div>
						</div>
						<div className="col-12 col-xl-3 p-2" data-aos="flip-left" data-aos-duration="2000">
						<div className="card bg-dark">
								<div className="card-header darkGrey">
								Shardey Simpson
								</div>
								<div className="card-body">
									<blockquote className="blockquote mb-0">
										<p>Playing on the phone is usually a hassle, but this website makes it easy. </p>
									</blockquote>
								</div>
							</div>
						</div>
						<div className="col-12 col-xl-3 p-2" data-aos="flip-left" data-aos-duration="2000">
						<div className="card bg-dark">
								<div className="card-header darkGrey">
								Jean Bystrom
								</div>
								<div className="card-body">
									<blockquote className="blockquote mb-0">
										<p>Best website ever I don’t think I will be trying a new one any time soon.</p>
									</blockquote>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="container goldText mt-5 text-center">
					<JoinSpan />
				</div>
			</div>
			<div className="spanGold"></div>

		</div>
	);
};
export default About;

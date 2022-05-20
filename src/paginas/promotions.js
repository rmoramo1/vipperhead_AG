/*componentes*/
import React, { useEffect } from "react";
import { JoinUsLittle } from "../componentes/joinUsLittle";
import { MenuDesplegable } from "../componentes/menuTogle";
import { MenuHover } from "../componentes/menuHover";
import { Helmet } from "react-helmet";
import AOS from "aos";
/*img */
import promo1 from "../assets/img/promos/Promo1.jpg"
import promo2 from "../assets/img/promos/pormo2.jpg"
import promo3 from "../assets/img/promos/promo3.jpg"
import promo4 from "../assets/img/promos/promo4.jpg"
import promo5 from "../assets/img/promos/promo5.jpg"
import promo6 from "../assets/img/promos/Promo6.jpg"

function Promos() {
	useEffect(() => {
		AOS.init({ duration: 1500 });
		AOS.refresh();
	}, []);
	return (
		<div className="container-fluid p-0">
			<Helmet>
				<title>Pay per Head Bonuses and Promotions at VIP Per Head</title>
				<link rel="canonical" href="https://www.vipperhead.ag/promotions" />
				<meta name="description" content="VIP Per Head welcomes you to our pay per head platform with different promotions that you can take advantage of from the moment you sign up."></meta>
			</Helmet>
			<MenuDesplegable />
			<div className="sliderPromos">
				<div className="titleSlider textEspecial">
					We have great promotions for you to increase your profits.
				</div>
				<MenuHover />
			</div>
			<div className="spanGold"></div>
			<JoinUsLittle />
			<div className="col-12 bgBlack py-5" id="promosLink" name="promosLink">
				<div className="col-12 text-center py-5" data-aos="zoom-in" data-aos-duration="2000">
					<h1 className="goldTitle fw-bold">VIP PER HEAD PROMOS</h1>
				</div>
				<div className="container text-center text-white fs-4" data-aos="flip-left" data-aos-duration="2000">
					<p>
						Vip Per welcomes you to our platform with different promotions that you can take advantage of from the moment you sing up. Our promos must be selected before the start of the first active week to be valid.
					</p>
				</div>
				<div className="container mt-5">
					<div className="col-12" data-aos="zoom-in" data-aos-duration="2000" id="promoFreWeb" name="promoFreWeb">
						<img className="img-fluid" src={promo1} alt="promotion"></img>
					</div>
					<div className="row g-0" id="weeksFree" name="weeksFree">
						<div className="col-12 col-xl-6 mt-3" data-aos="fade-right" data-aos-duration="2000">
							<img className="img-fluid" src={promo2} alt="promotion"></img>
						</div>
						<div className="col-12 col-xl-6 mt-3" data-aos="fade-left" data-aos-duration="2000">
							<img className="img-fluid" src={promo3} alt="promotion"></img>
						</div>
					</div>
					<div className="row g-0" id="cashFree" name="cashFree">
						<div className="col-12 col-xl-6 mt-3" data-aos="fade-right" data-aos-duration="2000">
							<img className="img-fluid" src={promo4} alt="promotion"></img>
						</div>
						<div className="col-12 col-xl-6 mt-3" data-aos="fade-left" data-aos-duration="2000">
							<img className="img-fluid" src={promo5} alt="promotion"></img>
						</div>
					</div>
					<div className="col-12 mt-3" data-aos="zoom-in" data-aos-duration="2000" id="4weeks" name="4weeks">
						<img className="img-fluid" src={promo6} alt="promotion"></img>
					</div>
				</div>
			</div>
			<div className="spanGold"></div>

		</div>
	);
};
export default Promos;

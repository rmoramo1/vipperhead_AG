import React, { useState } from 'react';
import { send } from 'emailjs-com';
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
/*componentes*/
import { MenuDesplegable } from "../componentes/menuTogle";
import { MenuHover } from "../componentes/menuHover";
function Contact() {
	const [toSend, setToSend] = useState({
		fullname: '',
		email: '',
		message: '',
		country: '',
		phone: '',
		areaCode: '',
		password: '',
		players: '',
		SportsCasinoHorses: '',
		LiveBettin: '',
		LiveCasino: '',
		DynamicBetting: '',
		PropBuilder: '',
	});

	const contacSend = (e) => {
		e.preventDefault();
		send(
			'service_c5ege19',
			'template_wxz9lki',
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
	const onChangeValue = (e) => {
		const valor = e.target.value
		toSend.promotion = valor;
		console.log(toSend.promotion);
	}
	const onChangeValueType = (e) => {
		const valor = e.target.value
		toSend.type = valor;
		console.log(toSend.type);
	}
	const handleSports = (e) => {
		const target = e.target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		toSend.SportsCasinoHorses = value;
		console.log(value)
	}
	const handleLiveBettin = (e) => {
		const target = e.target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		toSend.LiveBettin = value;
		console.log(value)
	}
	const handleLiveCasino = (e) => {
		const target = e.target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		toSend.LiveCasino = value;
		console.log(value)
	}
	const handleDynamicBetting = (e) => {
		const target = e.target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		toSend.DynamicBetting = value;
		console.log(value)
	}
	const handlePropBuilder = (e) => {
		const target = e.target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		toSend.PropBuilder = value;
		console.log(value)
	}
	return (
		<div className="container-fluid p-0">
			<Helmet>
				<title>Contact VIP Per Head </title>
				<link rel="canonical" href="https://www.vipperhead.ag/contact" />
				<meta name="description" content="Have any questions, suggestions or need to contact us? Click here and leave us a message, chat, email or call us. We would love to hear from you. VIP Per Head, best."></meta>
			</Helmet>
			<MenuDesplegable />
			<div className="sliderContact">
				<div className="titleSliderBene goldTextLight col-12 text-center textEspecial">
					HOW CAN WE HELP?
				</div>
				<MenuHover />
			</div>
			<div className="spanGold"></div>
			<div className="col-12 bgBlack py-5">
				<div className="row g-0">
					<div className="col-12 col-xl-8 p-2 p-lg-5" name="contact" id="Contact">
						<form onSubmit={contacSend}>
							<div className="row g-0">
								<div className="col-12 col-xl-6">
									<div className="row g-0 p-2 pt-0">
										<input className="bg-dark col-12 inputTextGold text-white mb-3" name="fullname" id="fullname" type="text" placeholder="FULL NAME*" aria-label="fullname" value={toSend.fullname} onChange={handleChange} required />
										<input className="bg-dark inputTextGold text-white col-12 my-3" name="country" id="country" type="text" placeholder="COUNTRY" aria-label="country" value={toSend.country} onChange={handleChange} />
									</div>
									<div className="col-12 text-white">
										Select Software
									</div>
									<div className="col-12">
										<div className="row g-0 text-white" onChange={onChangeValueType}>
											<div className="col-6">
												<div className="form-check py-2">
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
								<div className="col-12 col-xl-6 text-white">
									<div className="row g-0 p-2 pt-0">
										<input className="bg-dark inputTextGold text-white col-12 mb-3" name="email" id="email" type="email" placeholder="EMAIL ADDRESS*" aria-label="emailAddress" value={toSend.email} onChange={handleChange} required />
										<input className="bg-dark inputTextGold text-white col-4 my-3" name="areaCode" id="areaCode" type="number" placeholder="AREACODE" aria-label="areaCode" value={toSend.areaCode} onChange={handleChange} />
										<input className="bg-dark inputTextGold text-white col-8 my-3" name="phone" id="phone" type="number" placeholder="PHONE" aria-label="phone" value={toSend.phone} onChange={handleChange} />
									</div>
									<div className="col-12">
										Select the Promotion for you
									</div>
									<div className="col-12" onChange={onChangeValue}>
										<div className="form-check py-2">
											<input className="form-check-input" type="radio" name="promotions" id="promotions1" value="Free Website" />
											<label className="form-check-label" htmlFor="promotions1">
												Free Website
											</label>
										</div>
										<div className="form-check py-2">
											<input className="form-check-input" type="radio" name="promotions" id="promotions7" value="50% Premium WEBSITE" />
											<label className="form-check-label" htmlFor="promotions7">
												50% Premium WEBSITE
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
												4 Free Weeks: Management decision
											</label>
										</div>
										<div className="form-check py-2">
											<input className="form-check-input" type="radio" name="promotions" id="promotions5" value="50% cash deposit: any exept BTC" />
											<label className="form-check-label" htmlFor="promotions5">
												50% cash deposit: any except BTC
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
								<div className="col-12">
									<textarea className="bg-dark inputTextGold col-12 text-white" placeholder="Message" name="message" id="exampleFormControlTextarea1" rows="5" value={toSend.message} onChange={handleChange}></textarea>
								</div>
								<div className="col-12 goldText">
									(*) Requiered Fiels
								</div>
								<div className="col-12 text-end py-5">
									<button className="bgGold btn" type="submit">JOIN TODAY  <i className="bi bi-arrow-right"></i></button>
								</div>
							</div>
						</form>
					</div>
					<div className="col-12 col-xl-4">
						<div className="bg-dark col-12 p-5 text-center goldText">
							<div className="col-12 py-3 fs-2  text-white text-uppercase">contact us now</div>
							<div className="col-12 py-3 fs-4 text-uppercase">customer service and sales</div>
							<div className="col-12 py-3 fs-4 text-uppercase">
								<Link className="goldText" href="mailto:cs@vipperhead.ag" target="_blank" rel="noopener noreferrer">cs@vipperhead.ag</Link>
							</div>
							<div className="col-12 py-3 fs-4 text-uppercase"><span className="text-white"> Us</span> 1-877-490-7723</div>
							<div className="col-12 py-3 fs-4 text-uppercase"><span className="text-white"> mx</span> 01-800-099-0451</div>
							<div className="col-12 py-3 fs-2 text-uppercase"><span className="text-white"> live chat</span></div>
							<div className="col-12 py-3 fs-2 text-uppercase goldTitle">chat with one of our representatives</div>
						</div>
					</div>
				</div>
			</div>
			<div className="spanGold"></div>

		</div>
	);
};
export default Contact;
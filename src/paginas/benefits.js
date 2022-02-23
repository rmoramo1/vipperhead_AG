import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
/*componentes*/
import { JoinUsLittle } from "../componentes/joinUsLittle";
import { MenuDesplegable } from "../componentes/menuTogle";
import { MenuHover } from "../componentes/menuHover";
import referal from "../assets/img/referal.png"
export const Benefits = () => {
	return (
		<div className="container-fluid p-0">
			<Helmet>
				<title>Pay per Head Loyalty Program and Benefits</title>
				<link rel="canonical" href="https://www.vipperhead.ag/benefits" />
				<meta name="description" content="Loyalty benefits are available for you. Any client that has been with us for two seasons will receive special prices throughout the year."></meta>
			</Helmet>
			<MenuDesplegable />
			<div className="sliderBeneficios">
				<div className="titleSliderBene col-12 text-center textEspecial">
					BENEFITS
				</div>
				<MenuHover />
			</div>
			<div className="spanGold"></div>
			<JoinUsLittle />
			<div className="col-12 bgBlack py-5">
				<div className="container">
					<ul className="nav p-1 fs-2" id="myTab" role="tablist">
						<li className="col-6 benefitsTabs" role="presentation">
							<Link className="goldText col-12 active" id="LOYALTYPROGRAMID" data-bs-toggle="tab" data-bs-target="#LOYALTYPROGRAM" type="button" role="tab" aria-controls="home" aria-selected="true">
								<div className="text-end pe-4">LOYALTY PROGRAM</div>
							</Link>
						</li>
						<li className="col-6 benefitsTabs" role="presentation">
							<Link className="goldText col-12" id="referalProgramTab" data-bs-toggle="tab" data-bs-target="#referalProgram" type="button" role="tab" aria-controls="home" aria-selected="true">
								<div className="col-12">REFERRAL PROGRAM</div>
							</Link>
						</li>
					</ul>
				</div>
				<div className="tab-content" id="benefitsTab">
					<div className="tab-pane fade show active" id="LOYALTYPROGRAM" role="tabpanel" aria-labelledby="home-tab">
						<div className="container" data-aos="fade-right" data-aos-duration="2000">
							<div className="row g-0">
								<div className="col-12 col-lg-6 p-5">
									<div className="col-12 text-white fs-3">VIP PER HEAD</div>
									<div className="col-12 goldTitle fs-1">LOYALTY PROGRAM</div>
									<div className="text-white">
										<p>
											Loyalty benefits are available for you!
										</p>
										<p>
											Any client that has been with us for two seasons or more and has made sure to keep a positive balance will receive special prices throughout the year.
										</p>
										<p>
											You can get a free week, discounts of up to 50% off in a week, best prices and percentage discounts on our services, and more
										</p>
									</div>
								</div>
								<div className="col-12 col-lg-6  bgLoyalty"></div>
							</div>
						</div>
						<div className="container my-2" data-aos="fade-left" data-aos-duration="2000">
							<div className="promoBenefits">
								<div className="col-8 col-lg-3 promoPurple promoSpanBenefits text-center text-white d-none d-lg-block">
									<div>Such as free week, discounts of up to</div>
									<div className="goldTitle fs-3">50% off in a week</div>
									<div>best prices and percentage</div>
									<div>discounts on our service, and more!</div>
								</div>
							</div>
							<div className="col-12 py-5 promoPurple text-center text-white d-block d-lg-none">
								<div>Such as free week, discounts of up to</div>
								<div className="goldTitle fs-3">50% offin a week</div>
								<div>best prices and percentage</div>
								<div>discounts on our service, and more!</div>
							</div>
						</div>
						<div className="container" data-aos="fade-right" data-aos-duration="2000">
							<div className="row g-0">
								<div className="col-12 col-lg-6 p-5">
									<div className="text-white lh-lg fs-5">
										<p>
											Contact us to let us know you are interested in the loyalty program. We will run a study, and in less than 24 hours, you will be part of our closest client. Our representatives will ensure you can take your business to the next level!
										</p>
									</div>
								</div>
								<div className="col-12 col-lg-6 bgStudy"></div>
							</div>
						</div>
						<div className="col-12 goldText text-center py-5">
							TO LEARN MORE ABOUT OUR LOYALTY PROGRAM AND HOW TO GAIN ACCESS TO IT,<br /> CALL OUR TOLL-FREE NUMBER.
						</div>
					</div>
					<div className="tab-pane fade" id="referalProgram" role="tabpanel" aria-labelledby="profile-tab">
						<div className="row g-0 text-white">
							<div className="col-12 col-xl-6 p-2 p-xl-5">
								<div className="col-12 py-4">
									Many of our clients would love to have extra income
									or earn commissions by referring friends to excellent
									services. That is why we have decided to create our
									referral program.
								</div>
								<div className="col-12 py-4">
									Refer your friends to VIP per head. We will reward you
									with a fantastic price
									to your balance.
									The reward depends on the referral you are sending.
								</div>
								<div className="col-12 py-4">
									If the bookie has 0- 25 bettors, you will earn 1 week’s
									worth of the SERVICES BOOKIE CONTRACTED.
								</div>
								<div className="col-12 py-4">
									If the bookie has 26-50 bettors, you will earn 2 WEEKS
									WORTH OF THE SERVICE THE BOOKIE CONTRACTED..
								</div>
								<div className="col-12 py-4">
									If the bookie has 51 or more bettors, you will earn 3
									WEEKS WORTH OF THE SERVICES THE BOOKIE
									CONTRACTED.
								</div>
							</div>
							<div className="col-12 col-xl-6 p-1">
								<div className="col-12">
									<img src={referal} className="img-fluid" alt="people"></img>
								</div>
								<div className="col-12 text-white text-uppercase fs-3 py-5">
									rules
								</div>
								<div className="col-12">
									<ul className="list-unstyled lh-lg">
										<li>Both accounts must be active.</li>
										<li>The referring account must have an active account.</li>
										<li>The account must have a positive balance.</li>
										<li>Depending on how you will be promoting our services, you can request a
											skin, code, textual link, or banner, depending on your method of
											promotion.
										</li>
										<li>All fees regarding payment and transactions will be deducted from the overall.</li>
										<li>If any of the accounts are behind on payments, all referral payments will be placed on hold until the defaulted balance is paid.</li>
										<li>VIPPERHEAD is not responsible nor liable for referrals made with the wrong information or format.</li>
										<li>Payments will be made monthly for the balance regarding the previous month.</li>
										<li>All referrals and eligibility are up to management’s discretion.</li>
										<li>Any attempt to tamper with the promotion will result in disqualification</li>
										<li>The referral will not apply if the accounts share the same address/household/internet connection/computer</li>
										<li>Only new customers may be referred.</li>
									</ul>
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

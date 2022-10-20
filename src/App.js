import React, { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import injectContext from "./store/appContext";
import AOS from "aos";
/*components*/
import Loader from './componentes/loader';
import { Navbar } from "./componentes/navbar";
import { Footer } from "./componentes/footer";
import { UpBTN } from "./componentes/upBTN";
import { Whatsapp } from './componentes/whatsapp';
import { Telegram } from './componentes/telegram';
import { Signal } from './componentes/signal';

/* pages*/
const Home = lazy(() => import('./paginas/home'));
const About = lazy(() => import('./paginas/about-us'));
const Benefits = lazy(() => import('./paginas/benefits'));
const Promos = lazy(() => import('./paginas/promotions'));
const BettingSoftware = lazy(() => import('./paginas/betting-software'));
const SoftwareFeatures = lazy(() => import('./paginas/software-features'));
const Products = lazy(() => import('./paginas/products'));
const Contact = lazy(() => import('./paginas/contact'));
const Faqs = lazy(() => import('./paginas/faqs'));
const Sitemap = lazy(() => import('./paginas/siteMap'));
const Joinus = lazy(() => import('./paginas/joinus'));
const Glossary = lazy(() => import('./paginas/glossary'));
const Error = lazy(() => import('./paginas/404'));
const Form_New_Agent =lazy(()=>import('./paginas/form_new_agent'));

function App() {
	useEffect(() => {
		AOS.init({ duration: 1500 });
		AOS.refresh();
	}, []);
	return (
		<div className="App">
			<BrowserRouter>
				<Suspense fallback={<Loader />}>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/home">
							<Home />
						</Route>
						<Route exact path="/about-us">
							<About />
						</Route>
						<Route exact path="/betting-software">
							<BettingSoftware />
						</Route>
						<Route exact path="/software-features">
							<SoftwareFeatures />
						</Route>
						<Route exact path="/benefits">
							<Benefits />
						</Route>
						<Route exact path="/promotions">
							<Promos />
						</Route>
						<Route exact path="/products">
							<Products />
						</Route>
						<Route exact path="/contact">
							<Contact />
						</Route>
						<Route exact path="/faqs">
							<Faqs />
						</Route>
						<Route exact path="/joinus">
							<Joinus />
						</Route>
						<Route exact path="/glossary">
							<Glossary />
						</Route>
						<Route exact path="/siteMap">
							<Sitemap />
						</Route>
						<Route exact path="/Form_New_Agent">
							<Form_New_Agent />
						</Route>
						<Route>
							<Error />
						</Route>
					</Switch>
					<Footer />
					<UpBTN />
					<Signal/>
					<Telegram/>
					<Whatsapp/>
				</Suspense>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(App);

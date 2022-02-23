import { BrowserRouter, Route, Switch } from "react-router-dom";
import injectContext from "./store/appContext";

/* pages*/
import { About } from "./paginas/about-us";
import { Benefits } from "./paginas/benefits";
import { Promos } from "./paginas/promotions";
import { Home } from "./paginas/home";
import { BettingSoftware } from "./paginas/betting-software";
import { SoftwareFeatures } from "./paginas/software-features";
import { Products } from "./paginas/products";
import { Contact } from "./paginas/contact";
import { Faqs } from "./paginas/faqs";
import { Sitemap } from "./paginas/siteMap";
import { Joinus } from "./paginas/joinus";
import { Glossary } from "./paginas/glossary";
import { Error } from "./paginas/404";

/*components*/
import { Navbar } from "./componentes/navbar";
import { Footer } from "./componentes/footer";
import { UpBTN } from "./componentes/upBTN";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
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
						<Route>
							<Error/>
						</Route>
					</Switch>
				<Footer/>
				<UpBTN/>
		
			</BrowserRouter>
		</div>
	);
};

export default injectContext(App);

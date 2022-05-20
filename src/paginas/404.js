import { Link } from "react-router-dom";
import {Helmet} from "react-helmet";
/*componentes*/
import { MenuDesplegable } from "../componentes/menuTogle";

function Error(){
    return (
        <div className="container-fluid p-0 bgBlack text-center">
            <Helmet>
                <title>404</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
                <MenuDesplegable />
            <div className="sliderError">
                <div className="titleError goldText col-12 text-center pt-5">
                    404
                    <div className="col-12 subTitleError text-white text-uppercase fs-2">
                        page no found
                    </div>
                </div>
                <div className="col-12">
                     <Link className="bgGold btn" to="/">BACH TO HOME  <i className="bi bi-arrow-right"></i></Link>
                </div>
            </div>
            <div className="spanGold"></div>

        </div>
    );
};
export default Error;

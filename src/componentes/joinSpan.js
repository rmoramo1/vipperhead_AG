import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
export const JoinSpan = () => {
    return (
        <div className="bgBlack py-5">
            <div className="container">
                <div className="col-12 text-center fs-4 text-uppercase goldText mt-5">
                    join the select group of bookies that use vip per head today
                </div>
                <div className="col-12 text-center fs-5  goldText">
                    Complete the form and access a  free 3-weeks trial
                </div>
                <div className="spanGoldBorderBlack my-3"></div>
                <div className="col-12 text-center mb-5">
                    <HashLink smooth className="bgGold btn" to="/joinus#joinTop">JOIN TODAY  <i className="bi bi-arrow-right"></i></HashLink>
                </div>
            </div>
        </div>
    )
}
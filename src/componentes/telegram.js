import React from 'react';
import { Link } from "react-router-dom";

export const Telegram = () => {
    return (
        <div className="bg_telegram telegram_module d-flex justify-content-center align-items-center">
            <div className="col-12 fs-2 text-center">
                <Link to={{ pathname: "https://t.me/Vipperheadcs" }} rel="noopener noreferrer" target={"_blank"} aria-label="instagram">
                    <i className="fa-brands fa-telegram"></i>
                </Link>
            </div>
        </div>
    )
}

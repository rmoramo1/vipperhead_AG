import React from 'react';
import { Link } from "react-router-dom";

export const Whatsapp = () => {
    return (
        <div className="bg_whats whatsapp_module d-flex justify-content-center align-items-center">
            <div className="col-12 fs-2 text-center">
                <Link to={{ pathname: "https://wa.me/50663689412" }} rel="noopener noreferrer" target={"_blank"} aria-label="instagram">
                    <i className="fa-brands fa-whatsapp"></i>
                </Link>
            </div>
        </div>
    )
}

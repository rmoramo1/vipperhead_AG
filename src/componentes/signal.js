import React from 'react';
import { Link } from "react-router-dom";

export const Signal = () => {
    return (
        <div className="bg_signal signal_module d-flex justify-content-center align-items-center">
            <div className="col-12 fs-2 text-center">
                <Link to={{ pathname: "http://signal.me/#p/+50663689412" }} rel="noopener noreferrer" target={"_blank"} aria-label="instagram">
                    <i className="bi bi-signal"></i>
                </Link>
            </div>
        </div>
    )
}

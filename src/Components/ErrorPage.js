import React from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
    const navigate = useNavigate();

    return(
        <div className="error-page">
            <h1>
                404 Error
            </h1>
            <button onClick={() => navigate('/')}>Home page</button>
        </div>
    )
}

export default ErrorPage;
import React from "react";
import { Link } from "react-router-dom";
import Form from "../components/Form"
import '../styles/Login.css';

function Login() {
    return (
        <div className="login-container">
            <Form route="/api/token/" method="login" />
            <p className="center-text">
                Don't have an account? <Link to="/register">Register here</Link>
            </p>
        </div>
    );
}

export default Login
import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import auth from '../services/authService';

const Login = ({ handleCurrentUser }) => {
    const [userName, setuserName] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const history = useHistory();

    const handleSubmit = event => {
        event.preventDefault();
        if (userName == "" || password == "") {
            setErrorMessage("All fields are madatory");
        }
        else {
            const isAuthenticated = auth.login({ userName, password });
            if (isAuthenticated) {
                handleCurrentUser({ userName, password });
                history.push("/rentals");
            }
            else setErrorMessage("Incorrect username or password");
        }
    }

    return (
        <>
            <label>{errorMessage}</label>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Username</label>
                    <input type="text" value={userName} className="form-control col-md-4" onChange={e => setuserName(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="text" value={password} className="form-control col-md-4" onChange={e => setPassword(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
        </>
    )
}

export default Login;
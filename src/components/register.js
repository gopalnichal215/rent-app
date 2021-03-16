import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import auth from '../services/authService';

const Register = () => {

    const [userName, setuserName] = useState("");
    const [password, setPassword] = useState("");
    const [ConfirmPassword, setConfirmPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const history = useHistory();


    function handleSubmit(event) {
        event.preventDefault();
        if (userName == "" || password == "" || ConfirmPassword == "") {
            setErrorMessage("All fields are madatory");
        }
        else if (password !== ConfirmPassword) {
            setErrorMessage("Password and confirm password should be same");
        }
        else {
            auth.register({ userName, password });
            setErrorMessage("");
            history.push("/login");
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
                <div className="form-group">
                    <label>Confirm Password</label>
                    <input type="text" value={ConfirmPassword} className="form-control col-md-4" onChange={e => setConfirmPassword(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary">Register</button>
            </form>
        </>
    )
}

export default Register;
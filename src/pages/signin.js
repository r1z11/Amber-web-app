// Sign In Page
import logo from '../images/bootstrap-logo.svg';
import React, { useState } from 'react';
import axios from 'axios';
import { getUser, setUserSession } from '../helpers/auth';
import { apiUrl } from '../helpers/constants';

// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';


function SignIn(props) {
    const username = useFormInput('');
    const password = useFormInput('');
    const [usernameError, setUsernameError] = useState(null);
    const [passwordError, setPasswordError] = useState(null);
    const [loading, setLoading] = useState(null);

    const validateUsername = (username) => {
        if (username.length > 2) {
            setUsernameError(false);
            return true;
        } else {
            setUsernameError(true);
            return false;
        }
    }

    const validatePassword = (password) => {
        if (password.length > 5) {
            setPasswordError(false);
            return true;
        } else {
            setPasswordError(true);
            return false;
        }
    }

    const handleLogin = () => {
        setLoading(true);
        if (validateUsername(username.value) && validatePassword(password.value)) {
            axios.post(apiUrl + '/users/login', { username: username.value, password: password.value }).then(response => {
                setLoading(false);
                console.log(response);
                setUserSession(response.data);
                if (getUser)
                    props.history.push('/dashboard');
                else
                    alert("An error occured. Could not save user data.\nPlease try to sign in again.");
            }).catch(error => {
                setLoading(false);
                console.log(error);
                alert("An error occured. Please try again later.");
            });
        } else
            setLoading(false);
    }

    return (
        <main className="form-signin">
            <form>
                <img className="mb-4" src={logo} alt="logo" width="72" height="57" />
                <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

                <div className="form-floating">
                    <input type="text" className="form-control" id="floatingInput" {...username} required />
                    <label htmlFor="floatingInput">Username</label>
                    {usernameError ? <p className="mt-2 mb-3 text-danger">
                        Username must be atleast 3 characters!
                    </p> : null}
                </div>
                <div className="form-floating">
                    <input type="password" className="form-control" id="floatingPassword" {...password} required />
                    <label htmlFor="floatingPassword">Password</label>
                    {passwordError ? <p className="mt-2 mb-3 text-danger">
                        Password should be atleast 6 characters!
                    </p> : null}
                </div>

                <div className="checkbox mb-3">
                    <label>
                        <input type="checkbox" value="remember-me" /> Remember me
                    </label>
                </div>
                {/* <button className="w-100 btn btn-lg btn-primary" type="button" onClick={handleLogin}>Sign in</button> */}
                <button class="w-100 btn btn-lg btn-primary" type="button" onClick={handleLogin} disabled={loading}>
                    {loading ? 'Loading... ' : 'Sign in '}
                    {loading ? <span class="spinner-border spinner-border float-end" role="status" aria-hidden="true"></span> : null}
                </button>
                <p>tinykoala839</p>
                <p>wp2003wp</p>
                <p className="mt-5 mb-3 text-muted">&copy; Amber Software Technical Assessment. 2021</p>
            </form>
        </main>
    );
}

const useFormInput = initialValue => {
    const [value, setValue] = useState(initialValue);

    const handleChange = e => {
        setValue(e.target.value);
    }
    return {
        value,
        onChange: handleChange
    }
}

export default SignIn;
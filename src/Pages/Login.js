import React from 'react';

const LoginPage = (props) => {

    const login = () => {
       props.history.push("/home");
    }

    return (
        <div>
            <h1>Login Page</h1>
            <button type="button" onClick={() => { login() }} >Login</button>
        </div>
    )
}

export default LoginPage;
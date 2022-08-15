import React, {useRef, useState } from 'react';

import {Button} from "./Buttons";
import FieldGroup from "./FieldGroup";
import { GoPrevious } from "./NavigationArrows";
import axios from "axios"
import { useNavigate } from "react-router-dom"

function LoginForm( ) {

    const LOGIN_URL = 'http://localhost:9002/login';
    const history = useNavigate()

    const errRef = useRef();
    /*const [email, setUser] = useState('');
    const [password, setPwd] = useState('');*/
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    const [ user, setUser ] = useState({
        email: "",
        password: ""
    }) 

    const handleChange = e => {
        
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const login = async(e) =>{
        e.preventDefault();
        axios.post("http://localhost:9002/login", user)
        .then(res => {
            alert(res.data.message)
            //setLoginUser(res.data.user)
            history("/")
            console.log(user.email+user.password)
            //window.location.reload();
        })
    }

    return (
        <form className="form login-form">
            <GoPrevious link="/" class="d-block"/>
            <h2>Login</h2>
            <span className="login-type">For business user</span>
            <FieldGroup type="text" label="Email" name="email" value={user.email} onChange={ handleChange }/>
            <FieldGroup type="password" label="Password" name="password" value={user.password} onChange={ handleChange }/>
            <div className="actions">
                {/*<Button type="submit" class="btn-block" onClick={login} text="Log In"/>*/}
                <div onClick={login}>
                    <Button type="submit" class="btn-block" text="Log In"/>
                </div>
                <div className="seperator">
                    <hr/>
                    <span>OR</span>
                </div>
                <Button class="btn-block" text="Create Account" link="/signup"/>
            </div>
        </form>
    );
}

export default LoginForm;
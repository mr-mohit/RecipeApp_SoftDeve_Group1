import React, { useState } from 'react';

import {Button} from "./Buttons";
import FieldGroup from "./FieldGroup";
import { GoPrevious } from "./NavigationArrows";
import axios from "axios"
import { useNavigate} from "react-router-dom"


function SignupForm() {

    const history = useNavigate()

    const [ user, setUser ] = useState({
        name: "",
        email: "",
        password: "",
        reEnterPassword: ""
    })

    const handleChange = e => {
        
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const register = async(e) => {
        e.preventDefault();
        //const { name, email, password, reEnterPassword } = user
        //if(name && email && password && (password === reEnterPassword)){
            axios.post("http://localhost:9002/register", user)
            .then(res => {
                alert(res.data.message)
                history("/login")
            })
        
        /*}
        else{
            alert("invalid input")
        }*/

    }


    return (
        <form className="form signup-form">
            <GoPrevious link="/" class="d-block"/>
            <h2>Sign Up</h2>
            <div className="row row-gap">
                <div className="col-50"><FieldGroup type="text" label="Name" name="name" value={user.name} onChange={ handleChange }/></div>
                <div className="col-50"><FieldGroup type="text" label="Email" name="email" value={user.email} onChange={ handleChange }/></div>
            </div>
            
            <FieldGroup type="password" label="Password" name="password" value={user.password} onChange={ handleChange }/>
            <FieldGroup type="password" label="Re-Enter Password" name="reEnterPassword" value={user.reEnterPassword} onChange={ handleChange }/>
            <div className="actions">
                <div onClick={register} >
                  <Button type="submit" class="btn-block" text="Sign Up"/>
                </div>
                
                <div className="seperator">
                    <hr/>
                    <span>OR</span>
                </div>
                <p className="form-switch-hint">Already have an account?</p>
                <Button class="btn-block" text="Log In" link="/login"/>
            </div>
        </form>
    );
}

export default SignupForm;
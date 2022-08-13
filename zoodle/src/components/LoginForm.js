import React from 'react';

import {Button} from "./Buttons";
import FieldGroup from "./FieldGroup";
import { GoPrevious } from "./NavigationArrows";

function LoginForm() {

    return (
        <form className="form login-form">
            <GoPrevious link="/" class="d-block"/>
            <h2>Login</h2>
            <span className="login-type">For business user</span>
            <FieldGroup type="text" label="Email" name="email"/>
            <FieldGroup type="password" label="Password" name="password"/>
            <div className="actions">
                <Button type="submit" class="btn-block" text="Log In"/>
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
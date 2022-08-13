import React from 'react';

import {Button} from "./Buttons";
import FieldGroup from "./FieldGroup";
import { GoPrevious } from "./NavigationArrows";

function SignupForm() {
    return (
        <form className="form signup-form">
            <GoPrevious link="/" class="d-block"/>
            <h2>Sign Up</h2>
            <div className="row row-gap">
                <div className="col-50"><FieldGroup type="text" label="First Name" name="fname"/></div>
                <div className="col-50"><FieldGroup type="text" label="Last Name" name="lname"/></div>
            </div>
            <div className="row row-gap">
                <div className="col-50"><FieldGroup type="text" label="Email" name="email"/></div>
                <div className="col-50"><FieldGroup type="text" label="Phone" name="phone"/></div>
            </div>
            
            <FieldGroup type="password" label="Password" name="password"/>
            <div className="actions">
                <Button type="submit" class="btn-block" text="Sign Up"/>
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
import React from 'react';

import { ButtonFancy } from "./Buttons";

function SiteHeader() {

    return (
        <header className="site-header">
            <h2 className="brand">Zoodle</h2>
            <nav className="primary-nav">
                <a href="/">Home</a>
                <a href="/recipies">Recipies</a>
                <a href="/calorie-intake">Calorie Intake</a>
            </nav>
            <nav className="secondary-nav">
                <ButtonFancy text="Sign Up" link="/signup" size="small" color="primary"/>
                <ButtonFancy text="Log In" link="/login" size="small" color="primary"/>
            </nav>
        </header>
    );
}

export default SiteHeader;
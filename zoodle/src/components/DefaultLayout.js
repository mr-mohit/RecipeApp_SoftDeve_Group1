import React from 'react';
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";

function DefaultLayout(props) {
    return (
        <div className="default-layout">
            <SiteHeader>Header</SiteHeader>
            <main>{props.child}</main>
            <SiteFooter>footer</SiteFooter>
        </div>
    );
}

export default DefaultLayout;
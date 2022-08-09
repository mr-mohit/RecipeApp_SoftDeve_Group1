import React from 'react';

function GoNext(props) {
    return (
        <a className={"nav-arrows " + props.class} href={props.link}>
            <i class="fa-solid fa-arrow-left"></i>
            <span>{props.text || "Next"}</span>
        </a>
    );
}

function GoPrevious(props) {
    return (
        <a className={"nav-arrows " + props.class} href={props.link}>
            <i class="fa-solid fa-arrow-left"></i>
            <span>{props.text || "Go Back"}</span>
        </a>
    );
}

export {GoNext, GoPrevious};
import React from 'react';

function Button(props) {
    return (
        <button type={props.type || "button"} className={`btn ${props.class}`}>
            <a href={props.link || ""}>
                <span class="btn-content">{props.text}</span>
            </a>
        </button>
    )
}

function ButtonFancy(props) {
    return (
        <button type={props.type || "button"} className={`btn-square ${props.size?`btn-${props.size}`:""} ${props.classes || ""} btn-${props.color || "accent"}`}>
			<a href={props.link || ""}>
                <span className="btn-content">{props.text}</span>
            </a>
		</button>
    )
}

export {Button, ButtonFancy};
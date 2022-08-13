import React from 'react';

function Image(props) {
    return (
        <div className="img">
            <img src={props.src} alt={props.alt || "An Image"} width={props.width || "auto"}/>
        </div>
    );
}

export default Image;
import React from 'react';

const formIdPrefix = "fid";

function FieldGroup(props) {
    return (
        <div className="field-group">
            <label htmlFor={formIdPrefix + props.name}>{props.label}</label>
            <input id={formIdPrefix + props.name} type={props.type} name={props.name}/>
        </div>
    )
}

export default FieldGroup;
import React from 'react';

function Button(props) {
    if (props.href) {
        return (
        <button className='btn btn-lg'>
            <a href={props.href}>{props.children}</a>
        </button>
        )
    }
    else if (props.onClick) {
        return (
            <button 
            className='btn btn-lg'
            onClick={props.onClick}
            data-id={props.id} 
            >
            {props.children}
        </button>
        )
    }
};

export default Button;
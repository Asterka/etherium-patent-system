import React from 'react'

export default function Input({id, name, placeholder}) {
    return (
        <>
            <div className="input-component">
                <h4>{name}</h4>
                <input id={id} placeholder={placeholder}></input>
            </div>
        </>
    )
}

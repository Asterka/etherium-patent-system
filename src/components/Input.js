import React from 'react'

export default function Input({name, placeholder}) {
    return (
        <>
            <div className="input-component">
                <h4>{name}</h4>
                <input placeholder={placeholder}></input>
            </div>
        </>
    )
}

import React from 'react'

export default function Input({id, nameBig, nameSmall, placeholder1, placeholder2}) {
    return (
        <>
            <div className="two-lined-input">
                <div className="input-component-big">
                    <h4>{nameBig}</h4>
                    <input id={id} placeholder={placeholder1}></input>
                </div>
                <div className="input-component-small">
                    <h4>{nameSmall}</h4>
                    <input placeholder={placeholder2}></input>
                </div>
            </div>
        </>
    )
}

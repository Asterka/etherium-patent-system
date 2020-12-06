import React from 'react'

export default function PersonCard({source, name, company_name}) {
    return (
        <div className="person-card">
            <img id="person-pic" src={source} alt={"Pic"}/>
                <div className="person-card__titles">
                    <h3>{name}</h3>
                    <h4>{company_name}</h4>
                </div>
        </div>
    )
}

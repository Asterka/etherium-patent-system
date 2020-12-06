import React from 'react'

export default function BreadCrumbs({previousPage, nextPage}) {
    return (
        <div className="breadcrumbs">
            <a>{previousPage} / </a>
            <a>{nextPage}</a>
        </div>
    )
}

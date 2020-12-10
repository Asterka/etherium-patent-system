import React from 'react'
import ConnectMetamask from './ConnectMetamask'

export default function BreadCrumbs({previousPage, nextPage, loadBlockchainData}) {
    return (
        <div className="breadcrumbs">
            <ConnectMetamask loadBlockchainData={loadBlockchainData}/>
            <a>{previousPage} / </a>
            <a>{nextPage}</a>
        </div>
    )
}

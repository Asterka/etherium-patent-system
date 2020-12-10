import React from 'react'

export default function ConnectMetamask({loadBlockchainData}) {
    return (
        <div>
            <button onClick={loadBlockchainData}>Connect</button>
        </div>
    )
}

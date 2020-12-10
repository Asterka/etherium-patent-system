import React from 'react'

const savePatent = (web3instance, myName) => {
    let noi = document.getElementById("noi").value;
    let it = document.getElementById("it").value;
    let an = document.getElementById("an").value;
    let noa = document.getElementById("noa").value;
    let cn = document.getElementById("cn").value;

    web3instance.patentContract.methods.createPatent(myName, "inventor", noa, it, "10/12/2020", cn).send({"from":myName});
}

export default function StickyFooter({web3instance, myName}) {
    return (
        <div className="sticky-footer">
            <div className="opacity-div"></div>
            <button onClick={() => {savePatent(web3instance, myName)}}>
                Save patent
            </button>
        </div>
    )
}

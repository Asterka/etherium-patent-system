import React from 'react'
import Input from '../Input'
import TwoLinedInput from '../TwoLinedInput'
import StickyFooter from '../StickyFooter'

export default function CreationPage({web3instance, myName}) {
    return (
        <div className="main">
            <div className="input-group">
                <Input id="it" name="invention title" placeholder="Artificial intelligence disease type analysis method, smart server and storage"/>
                <Input name="website" placeholder="example.com"/>
            </div>
            <div className="input-group">
                <Input id="noi" name="name of the inventor" placeholder="Dmity G."/>
                <Input id="an" name="applicant's name" placeholder="Svetlana Vorobyova"/>
                <Input id="noa" name="the name of the agent" placeholder="Askar Khabibullin"/>
            </div>
            <div className="two-lined-input-group">
                <TwoLinedInput id="cn" nameBig="coutry" nameSmall="patent number in the country" placeholder1="" placeholder2=""/>
                <TwoLinedInput id="sn" nameBig="state" nameSmall="number of the law in the state" placeholder1="" placeholder2=""/>
                <Input name="address" placeholder="Rossiyskaya str. 31"/>
            </div>
            <div className="input-group">
                <Input id="cln" name="international classification number" placeholder="Artificial intelligence disease type analysis method, smart server and storage"/>
                <Input id="rp" name="the name of person responsible for granting classification numbers" placeholder="Albert P."/>
            </div>
            <StickyFooter web3instance={web3instance} myName={myName}/>
        </div>
    )
}

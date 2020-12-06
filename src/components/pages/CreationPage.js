import React from 'react'
import Input from '../Input'
import TwoLinedInput from '../TwoLinedInput'

export default function CreationPage() {
    return (
        <div className="main">
            <div className="input-group">
                <Input name="invention title" placeholder="Artificial intelligence disease type analysis method, smart server and storage"/>
                <Input name="website" placeholder="example.com"/>
            </div>
            <div className="input-group">
                <Input name="name of the inventor" placeholder="Dmity G."/>
                <Input name="applicant's name" placeholder="Svetlana Vorobyova"/>
                <Input name="the name of the agent" placeholder="Askar Khabibullin"/>
            </div>
            <div className="two-lined-input-group">
                <TwoLinedInput nameBig="coutry" nameSmall="patent number in the country" placeholder1="" placeholder2=""/>
                <TwoLinedInput nameBig="state" nameSmall="number of the law in the state" placeholder1="" placeholder2=""/>
                <Input name="address" placeholder="Rossiyskaya str. 31"/>
            </div>
            <div className="input-group">
                <Input name="international classification number" placeholder="Artificial intelligence disease type analysis method, smart server and storage"/>
                <Input name="the name of person responsible for granting classification numbers" placeholder="Albert P."/>
            </div>
        </div>
    )
}

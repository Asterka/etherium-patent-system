import React from 'react'
import SearchComponent from './../SearchComponent';
import PatentTable from './../PatentTable';
import {data} from './../../data';

export default function MyPatentsPage() {
    return (
        <div className="my-patents-main">
            <SearchComponent />
            <PatentTable data={data} type={'my'}/>
        </div>
    )
}
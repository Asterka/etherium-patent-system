import React from 'react'
import SearchComponent from './../SearchComponent';
import PatentTable from './../PatentTable';
import {data} from './../../data';

export default function MyPatentsPage({queue, setQueue}) {
    return (
        <div className="my-patents-main">
            <SearchComponent setQueue={setQueue}/>
            <PatentTable data={data} type={'my'} queue={queue}/>
        </div>
    )
}
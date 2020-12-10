import {React, useState} from 'react'
import SearchComponent from './../SearchComponent';
import PatentTable from './../PatentTable';
import { top } from '../../data';

export default function MyPatentsPage({queue, setQueue, data}) {
    
    return (
        <div className="my-patents-main">
            <SearchComponent setQueue={setQueue}/>
            <PatentTable data={data} type={'top'} queue={queue}/>
        </div>
    )
}
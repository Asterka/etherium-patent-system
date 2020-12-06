import React from 'react'
import SearchComponent from './../SearchComponent';
import PatentTable from './../PatentTable';
import { top } from '../../data';

export default function MyPatentsPage() {
    return (
        <div className="top-patents-main">
            <SearchComponent />
            <PatentTable data={top} type={'top'}/>
        </div>
    )
}
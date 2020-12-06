import React from 'react'
import SearchComponent from './../SearchComponent';
import PatentTable from './../PatentTable';

export default function MyPatentsPage() {
    return (
        <div className="my-patents-main">
            <SearchComponent />
            <PatentTable/>
        </div>
    )
}
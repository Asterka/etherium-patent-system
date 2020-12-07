import React from 'react'

export default function SearchComponent({setQueue}) {
    const handleQueue = (e) =>{
        setQueue(e.target.value);
    }
    return (
        <div className="search-input">
            <input onChange={handleQueue}/>
        </div>
    )
}

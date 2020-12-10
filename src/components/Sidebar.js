import React from 'react'
import PersonCard from './PersonCard';
import SidebarMenu from './SidebarMenu';
export default function Sidebar({myName, locationName, setLocationName, setBreadCrumbsMain, setQueue}) {
    return (
        <div className="sidebar">
            <PersonCard name={myName} company_name={"General Motors"} source='https://images.unsplash.com/photo-1545167622-3a6ac756afa4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=656&q=80'/>
            <SidebarMenu locationName={locationName} setLocationName={setLocationName}  setBreadCrumbsMain={setBreadCrumbsMain} setQueue={setQueue}/>
        </div>
    )
}

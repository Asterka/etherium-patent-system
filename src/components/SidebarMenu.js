import React from 'react'
import SidebarMenuItem from './SidebarMenuItem'

export default function SidebarMenu({setLocationName, setBreadCrumbsMain}) {
    return (
        <div className="sidebar-menu">
            <SidebarMenuItem name={"My patents"} destination="my_patents" setLocationName={setLocationName}  setBreadCrumbsMain={setBreadCrumbsMain}/>
            <SidebarMenuItem name={"Top patents"} destination="top_patents" setLocationName={setLocationName}  setBreadCrumbsMain={setBreadCrumbsMain}/>
        </div>
    )
}

import React from 'react'
import SidebarMenuItem from './SidebarMenuItem'

export default function SidebarMenu() {
    return (
        <div className="sidebar-menu">
            <SidebarMenuItem name={"My patents"} destination="my_patents"/>
            <SidebarMenuItem name={"Top patents"} destination="top_patents"/>
        </div>
    )
}

import React from 'react'
import SidebarMenuItem from './SidebarMenuItem'

export default function SidebarMenu() {
    return (
        <div className="sidebar-menu">
            <SidebarMenuItem name={"My patents"}/>
            <SidebarMenuItem name={"Top patents"}/>
        </div>
    )
}

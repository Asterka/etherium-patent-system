import React from 'react'
import SidebarMenuItem from './SidebarMenuItem'

export default function SidebarMenu({locationName, setLocationName, setBreadCrumbsMain, setQueue}) {
    return (
        <div className="sidebar-menu">
            <SidebarMenuItem name={"My Patents"}
            locationName={locationName}
                destination="my_patents" 
                    setLocationName={setLocationName}  
                        setBreadCrumbsMain={setBreadCrumbsMain} 
                            setQueue={setQueue}/>

            <SidebarMenuItem name={"Top Patents"} 
            locationName={locationName}
                destination="top_patents" 
                    setLocationName={setLocationName}  
                        setBreadCrumbsMain={setBreadCrumbsMain} 
                            setQueue={setQueue}/>
        </div>
    )
}

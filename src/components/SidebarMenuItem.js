import React from 'react'
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import {Link, useRouteMatch} from "react-router-dom";
export default function SidebarMenuItem({locationName, name, destination, setLocationName, setBreadCrumbsMain, setQueue}) {
    const setHeader = (destination, setLocationName, setBreadCrumbsMain, setQueue) =>{
        switch(destination){
            case "my_patents":
                setLocationName("My Patents");
                setBreadCrumbsMain("my patents");
                setQueue("");
            break;
            case "top_patents":
                setLocationName("Top Patents");
                setBreadCrumbsMain("top patents");
                setQueue("");
            break;
        }
    }
    let variable = destination;
    return (
        <div className="sidebar-menu-item">
            <EmojiObjectsIcon style={{fill: locationName===(name)?"#FFAD33":"white", filter: locationName===(name)?"drop-shadow(0 0 3px rgba(255,173,51,0.5))":"drop-shadow(0 0 3px rgba(255,173,51,0))"}}/>
            <Link upOneRoute={true} to={`/${variable}`} onClick={()=>{setHeader(destination, setLocationName, setBreadCrumbsMain, setQueue)}}>{name}</Link>
        </div>
    )
}

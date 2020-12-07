import React from 'react'
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import {Link} from "react-router-dom";
export default function SidebarMenuItem({name, destination, setLocationName, setBreadCrumbsMain, setQueue}) {
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
    return (
        <div className="sidebar-menu-item">
            <EmojiObjectsIcon/>
            <Link to={`/${destination}`} onClick={()=>{setHeader(destination, setLocationName, setBreadCrumbsMain, setQueue)}}>{name}</Link>
        </div>
    )
}

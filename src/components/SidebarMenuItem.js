import React from 'react'
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import {Link} from "react-router-dom";
export default function SidebarMenuItem({name, destination, setLocationName, setBreadCrumbsMain}) {
    const setHeader = (destination, setLocationName, setBreadCrumbsMain) =>{
        switch(destination){
            case "my_patents":
                setLocationName("My Patents");
                setBreadCrumbsMain("my patents");
            break;
            case "top_patents":
                setLocationName("Top Patents");
                setBreadCrumbsMain("top patents");
            break;
        }
    }
    return (
        <div className="sidebar-menu-item">
            <EmojiObjectsIcon/>
            <Link to={`/${destination}`} onClick={()=>{setHeader(destination, setLocationName, setBreadCrumbsMain)}}>{name}</Link>
        </div>
    )
}

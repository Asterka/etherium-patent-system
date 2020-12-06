import React from 'react'
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import {Link} from "react-router-dom";
export default function SidebarMenuItem({name, destination}) {
    return (
        <div className="sidebar-menu-item">
            <EmojiObjectsIcon/>
            <Link to={`/${destination}`}>{name}</Link>
        </div>
    )
}

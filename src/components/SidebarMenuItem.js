import React from 'react'
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';

export default function SidebarMenuItem({name}) {
    return (
        <div className="sidebar-menu-item">
            <EmojiObjectsIcon/>
            <h4>{name}</h4>
        </div>
    )
}

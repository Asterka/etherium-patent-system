import React from 'react'

const savePatent = () => {
    console.log("Hello");
}

export default function StickyFooter() {
    return (
        <div className="sticky-footer">
            <div className="opacity-div"></div>
            <button onClick={savePatent}>
                Save patent
            </button>
        </div>
    )
}

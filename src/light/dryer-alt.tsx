import React, { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M384-1H64A64 64 0 0 0 0 63v416a32 32 0 0 0 32 32h384a32 32 0 0 0 32-32V63a64 64 0 0 0-64-64zm32 480H32V63a32 32 0 0 1 32-32h320a32 32 0 0 1 32 32zM80 95a16 16 0 1 0-16-16 16 16 0 0 0 16 16zm64 0a16 16 0 1 0-16-16 16 16 0 0 0 16 16zm80 32a160 160 0 1 0 160 160 160 160 0 0 0-160-160zm0 288a128 128 0 1 1 128-128 128.14 128.14 0 0 1-128 128zm0-224a96 96 0 1 0 96 96 96 96 0 0 0-96-96zm0 160a64 64 0 0 1-61.73-48H200a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8h-37.73A63.9 63.9 0 1 1 224 351z"/>
        </svg>
    )
}

export default Icon

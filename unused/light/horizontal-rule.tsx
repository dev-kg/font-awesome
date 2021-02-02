import React, { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M640 247.5v16a8 8 0 0 1-8 8H8a8 8 0 0 1-8-8v-16a8 8 0 0 1 8-8h624a8 8 0 0 1 8 8z"/>
        </svg>
    )
}

export default Icon

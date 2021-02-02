import React, { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M384 416c0 35.35-28.65 64-64 64s-64-28.65-64-64 28.65-64 64-64 64 28.65 64 64z"/>
        </svg>
    )
}

export default Icon

import React, { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 256 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M192 472V40c0-4.4-3.6-8-8-8h-16c-4.4 0-8 3.6-8 8v432c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8zm-96 0V40c0-4.4-3.6-8-8-8H72c-4.4 0-8 3.6-8 8v432c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8z"/>
        </svg>
    )
}

export default Icon

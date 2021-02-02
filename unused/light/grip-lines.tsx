import React, { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M440 192H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h432c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8zm0 96H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h432c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8z"/>
        </svg>
    )
}

export default Icon

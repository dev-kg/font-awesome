import React, { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm129.9-206.1l-19.6-19.6c-4.8-4.8-12.5-4.7-17.2.2L282 300.8V140c0-6.6-5.4-12-12-12h-28c-6.6 0-12 5.4-12 12v160.8l-67.1-70.3c-4.7-4.9-12.4-5-17.2-.2l-19.6 19.6c-4.7 4.7-4.7 12.3 0 17l121.4 121.4c4.7 4.7 12.3 4.7 17 0l121.4-121.4c4.7-4.7 4.7-12.3 0-17z"/>
        </svg>
    )
}

export default Icon

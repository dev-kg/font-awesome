import React, { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M256.2 8c-57 0-109.5 19.2-151.5 51.5L54.6 9.4C34.6-10.7 0 3.5 0 32v128c0 17.7 14.3 32 32 32h128c28.5 0 42.7-34.5 22.6-54.6L129 83.7C165.3 56.9 209.5 42 256 42c118.4 0 214 96 214 214 0 118.4-96 214-214 214-53.7 0-104.2-19.8-143.1-54.9-4.7-4.3-12-4-16.5.5l-7.1 7.1c-4.9 4.9-4.6 12.8.5 17.4 44 39.7 102.3 63.9 166.2 63.9 136.8 0 247.7-110.8 248-247.5S392.8 8.1 256.2 8zM160 160H32V32z"/>
        </svg>
    )
}

export default Icon

import React, { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M352 0H32C14.33 0 0 14.33 0 32v288c0 35.35 28.66 64 64 64h64v64c0 35.35 28.66 64 64 64s64-28.65 64-64v-64h64c35.34 0 64-28.65 64-64V32c0-17.67-14.33-32-32-32zm0 320c0 17.64-14.36 32-32 32h-96v96c0 17.64-14.36 32-32 32s-32-14.36-32-32v-96H64c-17.64 0-32-14.36-32-32v-32h320v32zm0-64H32V32h320v224z"/>
        </svg>
    )
}

export default Icon

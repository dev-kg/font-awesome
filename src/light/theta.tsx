import React, { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 352 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M176 32C78.8 32 0 132.29 0 256s78.8 224 176 224 176-100.29 176-224S273.2 32 176 32zm0 32c75.35 0 137.26 77.61 143.39 176H32.61C38.74 141.61 100.65 64 176 64zm0 384c-75.35 0-137.26-77.61-143.39-176H319.4c-6.14 98.39-68.05 176-143.4 176z"/>
        </svg>
    )
}

export default Icon

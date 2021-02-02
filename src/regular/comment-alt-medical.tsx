import React, { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M448 0H64A64 64 0 0 0 0 64v288a64 64 0 0 0 64 64h96v84a12 12 0 0 0 12.05 12 11.84 11.84 0 0 0 7.08-2.37L304 416h144a64 64 0 0 0 64-64V64a64 64 0 0 0-64-64zm16 352a16 16 0 0 1-16 16H288l-12.79 9.6L208 428v-60H64a16 16 0 0 1-16-16V64a16 16 0 0 1 16-16h384a16 16 0 0 1 16 16zM344 176h-56v-56a8 8 0 0 0-8-8h-48a8 8 0 0 0-8 8v56h-56a8 8 0 0 0-8 8v48a8 8 0 0 0 8 8h56v56a8 8 0 0 0 8 8h48a8 8 0 0 0 8-8v-56h56a8 8 0 0 0 8-8v-48a8 8 0 0 0-8-8z"/>
        </svg>
    )
}

export default Icon

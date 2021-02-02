import React, { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M448 0H64A64 64 0 0 0 0 64v288a64 64 0 0 0 64 64h96v84a12 12 0 0 0 12.05 12 11.84 11.84 0 0 0 7.08-2.37L304 416h144a64 64 0 0 0 64-64V64a64 64 0 0 0-64-64zm32 352a32 32 0 0 1-32 32H293.34l-8.54 6.4L192 460v-76H64a32 32 0 0 1-32-32V64a32 32 0 0 1 32-32h384a32 32 0 0 1 32 32zM344 176h-56v-56a8 8 0 0 0-8-8h-48a8 8 0 0 0-8 8v56h-56a8 8 0 0 0-8 8v48a8 8 0 0 0 8 8h56v56a8 8 0 0 0 8 8h48a8 8 0 0 0 8-8v-56h56a8 8 0 0 0 8-8v-48a8 8 0 0 0-8-8z"/>
        </svg>
    )
}

export default Icon

import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M448 0H64A64 64 0 0 0 0 64v288a64 64 0 0 0 64 64h96v84a12 12 0 0 0 19.13 9.65L304 416h144a64 64 0 0 0 64-64V64a64 64 0 0 0-64-64zm-96 232a8 8 0 0 1-8 8h-56v56a8 8 0 0 1-8 8h-48a8 8 0 0 1-8-8v-56h-56a8 8 0 0 1-8-8v-48a8 8 0 0 1 8-8h56v-56a8 8 0 0 1 8-8h48a8 8 0 0 1 8 8v56h56a8 8 0 0 1 8 8z"/>
        </svg>
    )
}

export default Icon

import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 496 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M248 56c110.5 0 200 89.5 200 200s-89.5 200-200 200S48 366.5 48 256 137.5 56 248 56m0-48C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 184c-35.3 0-64 28.7-64 64s28.7 64 64 64 64-28.7 64-64-28.7-64-64-64z"/>
        </svg>
    )
}

export default Icon

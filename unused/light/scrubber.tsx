import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 496 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M248 40c119.3 0 216 96.6 216 216 0 119.3-96.6 216-216 216-119.3 0-216-96.6-216-216 0-119.3 96.6-216 216-216m0-32C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 216c17.6 0 32 14.4 32 32s-14.4 32-32 32-32-14.4-32-32 14.4-32 32-32m0-32c-35.3 0-64 28.7-64 64s28.7 64 64 64 64-28.7 64-64-28.7-64-64-64z"/>
        </svg>
    )
}

export default Icon

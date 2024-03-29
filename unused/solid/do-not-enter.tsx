import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 496 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm176 296H72c-8.84 0-16-7.16-16-16v-64c0-8.84 7.16-16 16-16h352c8.84 0 16 7.16 16 16v64c0 8.84-7.16 16-16 16z"/>
        </svg>
    )
}

export default Icon

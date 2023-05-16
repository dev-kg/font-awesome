import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M320 368c17.64 0 32 14.36 32 32s-14.36 32-32 32-32-14.36-32-32 14.35-32 32-32m0-48c-44.18 0-80 35.82-80 80s35.82 80 80 80 80-35.82 80-80-35.82-80-80-80z"/>
        </svg>
    )
}

export default Icon

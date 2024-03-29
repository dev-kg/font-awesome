import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M480 160A128 128 0 0 0 352 32c-38.45 0-72.54 17.3-96 44.14C232.54 49.3 198.45 32 160 32A128 128 0 0 0 32 160c0 38.45 17.3 72.54 44.14 96C49.3 279.46 32 313.55 32 352a128 128 0 0 0 128 128c38.45 0 72.54-17.3 96-44.14C279.46 462.7 313.55 480 352 480a128 128 0 0 0 128-128c0-38.45-17.3-72.54-44.14-96C462.7 232.54 480 198.45 480 160zM256 336a80 80 0 1 1 80-80 80 80 0 0 1-80 80z"/>
        </svg>
    )
}

export default Icon

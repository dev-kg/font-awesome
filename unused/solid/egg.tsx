import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M192 0C86 0 0 214 0 320s86 192 192 192 192-86 192-192S298 0 192 0z"/>
        </svg>
    )
}

export default Icon

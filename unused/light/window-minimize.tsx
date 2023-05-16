import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M496 480H16c-8.8 0-16-7.2-16-16s7.2-16 16-16h480c8.8 0 16 7.2 16 16s-7.2 16-16 16z"/>
        </svg>
    )
}

export default Icon

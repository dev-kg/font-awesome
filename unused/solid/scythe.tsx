import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M608 0h-25.45l-59.74 288H400a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h109.54l-29.26 141.05A16 16 0 0 0 496 512h31.45a16 16 0 0 0 15.72-13l96.27-461A32 32 0 0 0 608 0zm-58.13 0h-211C192 0 64 64 0 192h510z"/>
        </svg>
    )
}

export default Icon

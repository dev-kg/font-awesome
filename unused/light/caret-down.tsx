import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M287.968 160H32.038c-28.425 0-42.767 34.488-22.627 54.627l127.962 128c12.496 12.496 32.758 12.497 45.255 0l127.968-128C330.695 194.528 316.45 160 287.968 160zM160 320L32 192h256L160 320z"/>
        </svg>
    )
}

export default Icon

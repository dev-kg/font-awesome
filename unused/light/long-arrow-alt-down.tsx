import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 256 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M223.351 320H145V44c0-6.627-5.373-12-12-12h-10c-6.627 0-12 5.373-12 12v276H32.652c-29.388 0-43.268 34.591-23.231 54.627l95.952 96c12.497 12.496 32.757 12.497 45.255 0l95.955-96C266.56 354.65 252.85 320 223.351 320zM128 448l-96-96h192l-96 96z"/>
        </svg>
    )
}

export default Icon

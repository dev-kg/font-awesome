import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M275.9 192h152.2a20 20 0 0 0 19.9-20V52a20 20 0 0 0-19.9-20H275.9A20 20 0 0 0 256 52v120a20 20 0 0 0 19.9 20zM484 256H284a28 28 0 0 0-28 28v168a28 28 0 0 0 28 28h200a28 28 0 0 0 28-28V284a28 28 0 0 0-28-28zm-308 96h-48V48a16 16 0 0 0-16-16H80a16 16 0 0 0-16 16v304H16c-14.19 0-21.37 17.24-11.29 27.31l80 96a16 16 0 0 0 22.62 0l80-96C197.35 369.26 190.22 352 176 352z"/>
        </svg>
    )
}

export default Icon

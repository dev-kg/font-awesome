import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M428 320H276a20 20 0 0 0-20 20v120a20 20 0 0 0 20 20h152a20 20 0 0 0 20-20V340a20 20 0 0 0-20-20zm-252 32h-48V48a16 16 0 0 0-16-16H80a16 16 0 0 0-16 16v304H16c-14.19 0-21.37 17.24-11.29 27.31l80 96a16 16 0 0 0 22.62 0l80-96C197.35 369.26 190.22 352 176 352zM484 32H284a28 28 0 0 0-28 28v168a28 28 0 0 0 28 28h200a28 28 0 0 0 28-28V60a28 28 0 0 0-28-28z"/>
        </svg>
    )
}

export default Icon

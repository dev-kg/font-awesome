import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M107.31 36.69a16 16 0 0 0-22.62 0l-80 96C-5.35 142.74 1.77 160 16 160h48v304a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16V160h48c14.21 0 21.38-17.24 11.31-27.31zM484 32H284a28 28 0 0 0-28 28v168a28 28 0 0 0 28 28h200a28 28 0 0 0 28-28V60a28 28 0 0 0-28-28zm-56 288H276a20 20 0 0 0-20 20v120a20 20 0 0 0 20 20h152a20 20 0 0 0 20-20V340a20 20 0 0 0-20-20z"/>
        </svg>
    )
}

export default Icon

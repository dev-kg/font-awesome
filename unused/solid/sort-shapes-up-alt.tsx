import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M107.31 36.69a16 16 0 0 0-22.62 0l-80 96C-5.35 142.74 1.78 160 16 160h48v304a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16V160h48c14.21 0 21.39-17.24 11.31-27.31zM444.1 438.86L361 301.71c-11.09-18.28-38.81-18.28-49.9 0l-83.2 137.15c-11.08 18.28 2.77 41.14 24.95 41.14h166.3c22.18 0 36.03-22.86 24.95-41.14zM264 224h144a24 24 0 0 0 24-24V56a24 24 0 0 0-24-24H264a24 24 0 0 0-24 24v144a24 24 0 0 0 24 24z"/>
        </svg>
    )
}

export default Icon

import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M464 480h-.31a24 24 0 0 1-19.16-10L175.5 96.38l-134 185.29a16 16 0 0 1-22.42 3.08l-12.75-9.67a16 16 0 0 1-3.08-22.42L156.88 41.5A24 24 0 0 1 176 32h.31a24 24 0 0 1 19.16 10l269 373.64 134-185.29a16 16 0 0 1 22.42-3.08l12.75 9.67a16 16 0 0 1 3.08 22.42L483.13 470.5A24 24 0 0 1 464 480z"/>
        </svg>
    )
}

export default Icon

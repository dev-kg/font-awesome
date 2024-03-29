import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M415 32H191a160 160 0 0 0 0 320h48v112a16 16 0 0 0 16 16h16a16 16 0 0 0 16-16V80h48v384a16 16 0 0 0 16 16h16a16 16 0 0 0 16-16V80h32a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM239 304h-48a112 112 0 0 1 0-224h48z"/>
        </svg>
    )
}

export default Icon

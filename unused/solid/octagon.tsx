import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M361.5 14.1c-9-9-21.2-14.1-33.9-14.1H184.5c-12.7 0-24.9 5.1-33.9 14.1L14.1 150.5c-9 9-14.1 21.2-14.1 33.9v143.1c0 12.7 5.1 24.9 14.1 33.9l136.5 136.5c9 9 21.2 14.1 33.9 14.1h143.1c12.7 0 24.9-5.1 33.9-14.1L498 361.4c9-9 14.1-21.2 14.1-33.9v-143c0-12.7-5.1-24.9-14.1-33.9L361.5 14.1z"/>
        </svg>
    )
}

export default Icon

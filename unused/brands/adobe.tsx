import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M315.5 64h170.9v384L315.5 64zm-119 0H25.6v384L196.5 64zM256 206.1L363.5 448h-73l-30.7-76.8h-78.7L256 206.1z"/>
        </svg>
    )
}

export default Icon

import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M368 336a48 48 0 0 1-48-48H0v160a32 32 0 0 0 32 32h448a32 32 0 0 0 32-32V288h-96a48 48 0 0 1-48 48zm-192 96a48 48 0 1 1 48-48 48 48 0 0 1-48 48zM299.83 32a32 32 0 0 0-21.13 7l-61.76 48.06a47.91 47.91 0 0 1-75.1 58.48L0 256h512c0-119.89-94-217.8-212.17-224z"/>
        </svg>
    )
}

export default Icon

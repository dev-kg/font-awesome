import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M496 128a144 144 0 0 0-144 144c0 37.05 14.38 70.48 37.37 96H250.63c23-25.52 37.37-58.95 37.37-96a144 144 0 1 0-144 144h352a144 144 0 0 0 0-288zM48 272a96 96 0 1 1 96 96 96.11 96.11 0 0 1-96-96zm448 96a96 96 0 1 1 96-96 96.11 96.11 0 0 1-96 96z"/>
        </svg>
    )
}

export default Icon

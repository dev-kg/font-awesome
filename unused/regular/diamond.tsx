import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M189.5 496L11 285.7c-14.6-17.2-14.6-42.2 0-59.5L189.5 16c18.1-21.4 50.9-21.3 69 0L437 226.3c14.6 17.2 14.6 42.2 0 59.5L258.5 496c-18.1 21.4-50.9 21.3-69 0zM48 256l176 206.5L400 256 224 49.5 48 256z"/>
        </svg>
    )
}

export default Icon

import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M354.9 296H157.1c-10.7 0-16.1-13-8.5-20.5l98.9-98.3c4.7-4.7 12.2-4.7 16.9 0l98.9 98.3c7.7 7.5 2.3 20.5-8.4 20.5zM8 256C8 119 119 8 256 8s248 111 248 248-111 248-248 248S8 393 8 256zm48 0c0 110.5 89.5 200 200 200s200-89.5 200-200S366.5 56 256 56 56 145.5 56 256z"/>
        </svg>
    )
}

export default Icon

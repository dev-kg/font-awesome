import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M8 256C8 119 119 8 256 8s248 111 248 248-111 248-248 248S8 393 8 256zm379.5 27.5l-123-123c-4.7-4.7-12.3-4.7-17 0l-123 123c-7.6 7.6-2.2 20.5 8.5 20.5h246c10.7 0 16.1-12.9 8.5-20.5z"/>
        </svg>
    )
}

export default Icon

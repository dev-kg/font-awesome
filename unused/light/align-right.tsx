import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M440 48H168a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h272a8 8 0 0 0 8-8V56a8 8 0 0 0-8-8zm0 384H8a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h432a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8zm0-128H168a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h272a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8zm0-128H8a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h432a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8z"/>
        </svg>
    )
}

export default Icon

import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M440 0H296a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h56v224a128 128 0 0 1-256 0V32h56a8 8 0 0 0 8-8V8a8 8 0 0 0-8-8H8a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h56v224c0 88.22 71.78 160 160 160s160-71.78 160-160V32h56a8 8 0 0 0 8-8V8a8 8 0 0 0-8-8zm0 480H8a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h432a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8z"/>
        </svg>
    )
}

export default Icon

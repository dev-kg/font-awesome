import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M504 304H296a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h208a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8zm0 128H296a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h208a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8zm0-256H296a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h208a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8zm0-128H296a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h208a8 8 0 0 0 8-8V56a8 8 0 0 0-8-8zM216 432H8a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h208a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8zm0-128H8a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h208a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8zm0-256H8a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h208a8 8 0 0 0 8-8V56a8 8 0 0 0-8-8zm0 128H8a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h208a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8z"/>
        </svg>
    )
}

export default Icon

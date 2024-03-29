import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M448 63H56a23.94 23.94 0 0 0-24 24v264a96 96 0 0 0 96 96h192a96 96 0 0 0 96-96v-32h32a128 128 0 0 0 0-256zm0 192h-32V127h32a64 64 0 0 1 0 128z"/>
        </svg>
    )
}

export default Icon

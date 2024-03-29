import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M504 416H32V72a8 8 0 0 0-8-8H8a8 8 0 0 0-8 8v360a16 16 0 0 0 16 16h488a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8zM160 312a24 24 0 1 0-24-24 24 24 0 0 0 24 24zm256-160a24 24 0 1 0-24-24 24 24 0 0 0 24 24zm-224 0a24 24 0 1 0-24-24 24 24 0 0 0 24 24zm192 160a24 24 0 1 0-24-24 24 24 0 0 0 24 24zm-96-64a24 24 0 1 0-24-24 24 24 0 0 0 24 24z"/>
        </svg>
    )
}

export default Icon

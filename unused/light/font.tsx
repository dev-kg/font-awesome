import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M424 448h-36.6L247.13 42.77A16 16 0 0 0 232 32h-16a16 16 0 0 0-15.12 10.77L60.6 448H24a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h112a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8H94.48l44.3-128h170.44l44.31 128H312a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h112a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8zM149.86 288L224 73.8 298.14 288z"/>
        </svg>
    )
}

export default Icon

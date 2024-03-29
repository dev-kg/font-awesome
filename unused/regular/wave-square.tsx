import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M472 480H328a32 32 0 0 1-32-32V80H184v168a32 32 0 0 1-32 32H8a8 8 0 0 1-8-8v-32a8 8 0 0 1 8-8h128V64a32 32 0 0 1 32-32h144a32 32 0 0 1 32 32v368h112V264a32 32 0 0 1 32-32h144a8 8 0 0 1 8 8v32a8 8 0 0 1-8 8H504v168a32 32 0 0 1-32 32z"/>
        </svg>
    )
}

export default Icon

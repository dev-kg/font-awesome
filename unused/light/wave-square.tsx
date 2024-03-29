import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M632 240H496a32 32 0 0 0-32 32v176H336V64a32 32 0 0 0-32-32H176a32 32 0 0 0-32 32v176H8a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h136a32 32 0 0 0 32-32V64h128v384a32 32 0 0 0 32 32h128a32 32 0 0 0 32-32V272h136a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8z"/>
        </svg>
    )
}

export default Icon

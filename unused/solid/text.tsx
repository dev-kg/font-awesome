import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M432 32a16 16 0 0 1 16 16v96a16 16 0 0 1-16 16h-32a16 16 0 0 1-16-16v-32H264v304h40a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16H144a16 16 0 0 1-16-16v-32a16 16 0 0 1 16-16h40V112H64v32a16 16 0 0 1-16 16H16a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16z"/>
        </svg>
    )
}

export default Icon

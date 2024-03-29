import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M432 80v352h32a16 16 0 0 1 16 16v16a16 16 0 0 1-16 16H336a16 16 0 0 1-16-16v-16a16 16 0 0 1 16-16h32V280H144v152h32a16 16 0 0 1 16 16v16a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16v-16a16 16 0 0 1 16-16h32V80H48a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h128a16 16 0 0 1 16 16v16a16 16 0 0 1-16 16h-32v152h224V80h-32a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h128a16 16 0 0 1 16 16v16a16 16 0 0 1-16 16z"/>
        </svg>
    )
}

export default Icon

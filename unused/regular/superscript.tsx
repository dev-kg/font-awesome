import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M336 64h-52.28a16 16 0 0 0-13.31 7.12L176 212.73 81.59 71.12A16 16 0 0 0 68.28 64H16A16 16 0 0 0 0 80v16a16 16 0 0 0 16 16h35.16l96 144-96 144H16a16 16 0 0 0-16 16v16a16 16 0 0 0 16 16h52.28a16 16 0 0 0 13.31-7.12L176 299.27l94.41 141.61a16 16 0 0 0 13.31 7.12H336a16 16 0 0 0 16-16v-16a16 16 0 0 0-16-16h-35.16l-96-144 96-144H336a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16zm160 112h-24V16a16 16 0 0 0-16-16h-32a16 16 0 0 0-14.29 8.83l-16 32A16 16 0 0 0 408 64h16v112h-24a16 16 0 0 0-16 16v16a16 16 0 0 0 16 16h96a16 16 0 0 0 16-16v-16a16 16 0 0 0-16-16z"/>
        </svg>
    )
}

export default Icon

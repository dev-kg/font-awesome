import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M320 48v16a16 16 0 0 1-16 16h-67l-88 352h59a16 16 0 0 1 16 16v16a16 16 0 0 1-16 16H16a16 16 0 0 1-16-16v-16a16 16 0 0 1 16-16h67l88-352h-59a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h192a16 16 0 0 1 16 16z"/>
        </svg>
    )
}

export default Icon

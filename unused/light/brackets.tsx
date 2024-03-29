import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M120 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h72a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8H48a16 16 0 0 1-16-16V80a16 16 0 0 1 16-16h72a8 8 0 0 0 8-8V40a8 8 0 0 0-8-8zm280 0h-72a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h72a16 16 0 0 1 16 16v352a16 16 0 0 1-16 16h-72a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h72a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"/>
        </svg>
    )
}

export default Icon

import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M448 384V16a16 16 0 0 0-16-16H80A80 80 0 0 0 0 80v352a80 80 0 0 0 80 80h352a16 16 0 0 0 16-16v-16a16 16 0 0 0-12.9-15.7c-4.2-13-4.2-51.6 0-64.6A16 16 0 0 0 448 384zm-54 80H80a32 32 0 0 1 0-64h314c-2.7 17.3-2.7 46.7 0 64zm6-112H80a79.37 79.37 0 0 0-32 6.7V80a32 32 0 0 1 32-32h320zM136 224h56v56a8 8 0 0 0 8 8h48a8 8 0 0 0 8-8v-56h56a8 8 0 0 0 8-8v-48a8 8 0 0 0-8-8h-56v-56a8 8 0 0 0-8-8h-48a8 8 0 0 0-8 8v56h-56a8 8 0 0 0-8 8v48a8 8 0 0 0 8 8z"/>
        </svg>
    )
}

export default Icon

import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M432 432h-33.32l-135-389.24A16 16 0 0 0 248.55 32h-49.1a16 16 0 0 0-15.12 10.76L49.32 432H16a16 16 0 0 0-16 16v16a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-16a16 16 0 0 0-16-16h-35.44l33.31-96h164.26l33.31 96H304a16 16 0 0 0-16 16v16a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-16a16 16 0 0 0-16-16zM158.53 288L224 99.31 289.47 288z"/>
        </svg>
    )
}

export default Icon

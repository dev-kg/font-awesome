import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M432 192a16 16 0 0 0 16-16v-34.11L502 82a38.48 38.48 0 0 0-1.31-53.09L483 11.28a38.47 38.47 0 0 0-53-1.36L157.26 256H112a16 16 0 0 0-16 16v39.28l-78.55 70.84-.06.05a53 53 0 0 0-1.87 76.76l37.53 37.52a52.94 52.94 0 0 0 76.78-1.92L402.77 192zM94.2 462.36c-.82.91-4.23 3.24-7.22.17L49.45 425c-3-3-.73-6.44.16-7.27L455.48 51.61l4.91 4.88z"/>
        </svg>
    )
}

export default Icon

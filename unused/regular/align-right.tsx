import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M16 216h416a16 16 0 0 0 16-16v-16a16 16 0 0 0-16-16H16a16 16 0 0 0-16 16v16a16 16 0 0 0 16 16zm416 208H16a16 16 0 0 0-16 16v16a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-16a16 16 0 0 0-16-16zm3.17-384H172.83A12.82 12.82 0 0 0 160 52.83v22.34A12.82 12.82 0 0 0 172.83 88h262.34A12.82 12.82 0 0 0 448 75.17V52.83A12.82 12.82 0 0 0 435.17 40zm0 256H172.83A12.82 12.82 0 0 0 160 308.83v22.34A12.82 12.82 0 0 0 172.83 344h262.34A12.82 12.82 0 0 0 448 331.17v-22.34A12.82 12.82 0 0 0 435.17 296z"/>
        </svg>
    )
}

export default Icon

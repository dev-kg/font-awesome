import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M608 0H338.84C192 0 64 64 0 224h560.18l-13.06 64H392a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h148.6l-36.54 179.1a8 8 0 0 0 6.2 9.47l15.65 3.26a7.68 7.68 0 0 0 1.64.17 8 8 0 0 0 7.82-6.37L639.22 39A32 32 0 0 0 608 0zm-35.62 192H50.4C122.62 61.06 244.73 32 338.84 32H608z"/>
        </svg>
    )
}

export default Icon

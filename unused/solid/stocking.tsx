import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M368 0H80c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16h288c8.8 0 16-7.2 16-16V16c0-8.8-7.2-16-16-16zM96 251.5l-39 26C-1.8 316.7-17.7 396.2 21.5 455c24.7 37 65.2 57 106.6 57 24.4 0 49.1-7 70.9-21.5l81.7-54.5c44.6-29.7 71.2-79.5 71.2-133.1V128H96v123.5z"/>
        </svg>
    )
}

export default Icon

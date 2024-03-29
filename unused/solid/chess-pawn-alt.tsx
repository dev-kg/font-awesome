import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 256 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M64 288h14.89A535.84 535.84 0 0 1 64 384h128a535.84 535.84 0 0 1-14.89-96H192a16 16 0 0 0 16-16v-16a16 16 0 0 0-16-16h-16.44a80 80 0 1 0-95.12 0H64a16 16 0 0 0-16 16v16a16 16 0 0 0 16 16zm183.16 171.58L224 448v-16a16 16 0 0 0-16-16H48a16 16 0 0 0-16 16v16L8.85 459.58A16 16 0 0 0 0 473.89V496a16 16 0 0 0 16 16h224a16 16 0 0 0 16-16v-22.11a16 16 0 0 0-8.84-14.31z"/>
        </svg>
    )
}

export default Icon

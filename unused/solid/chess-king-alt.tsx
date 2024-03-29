import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M106 208H96a16 16 0 0 0-16 16v16a16 16 0 0 0 16 16h15.94A535.78 535.78 0 0 1 96 384h128a535.78 535.78 0 0 1-15.94-128H224a16 16 0 0 0 16-16v-16a16 16 0 0 0-16-16h-10l33.89-90.38a16 16 0 0 0-15-21.62H176V64h24a8 8 0 0 0 8-8V40a8 8 0 0 0-8-8h-24V8a8 8 0 0 0-8-8h-16a8 8 0 0 0-8 8v24h-24a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h24v32H87.09a16 16 0 0 0-15 21.62zm173.16 251.58L256 448v-16a16 16 0 0 0-16-16H80a16 16 0 0 0-16 16v16l-23.15 11.58A16 16 0 0 0 32 473.89V496a16 16 0 0 0 16 16h224a16 16 0 0 0 16-16v-22.11a16 16 0 0 0-8.84-14.31z"/>
        </svg>
    )
}

export default Icon

import React, { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm16 400c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16V80c0-8.8 7.2-16 16-16h352c8.8 0 16 7.2 16 16v352zM244.1 127.9H152c-4.4 0-8 3.6-8 8v240c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8v-72h72c51.4 0 92.7-44.3 87.6-96.8-4.4-45.7-45.5-79.2-91.5-79.2zM248 272h-72V160h72c30.9 0 56 25.1 56 56s-25.1 56-56 56z"/>
        </svg>
    )
}

export default Icon

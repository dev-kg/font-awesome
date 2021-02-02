import React, { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M412 64h24c6.6 0 12 5.4 12 12v360c0 6.6-5.4 12-12 12h-24c-6.6 0-12-5.4-12-12V76c0-6.6 5.4-12 12-12zM158.1 433.9l-144-144c-18.7-18.7-18.7-49.1 0-67.9l144-143.9C188.3 47.9 240 69.4 240 112v51.6h80c26.5 0 48 21.5 48 48v88.6c0 26.5-21.5 48-48 48h-80V400c0 42.7-51.8 64-81.9 33.9zM192 400v-99.7h128v-88.6H192V112L48 256l144 144z"/>
        </svg>
    )
}

export default Icon

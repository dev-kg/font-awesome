import React, { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M256 504c137 0 248-111 248-248S393 8 256 8 8 119 8 256s111 248 248 248zM40 256c0-118.7 96.1-216 216-216 118.7 0 216 96.1 216 216 0 118.7-96.1 216-216 216-118.7 0-216-96.1-216-216zm120 32l96-96 96 96H160m192 32c28.4 0 42.8-34.5 22.6-54.6l-96-96c-12.5-12.5-32.8-12.5-45.3 0l-96 96c-20.1 20.1-5.9 54.6 22.6 54.6H352z"/>
        </svg>
    )
}

export default Icon

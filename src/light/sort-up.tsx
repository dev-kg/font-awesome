import React, { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M32.032 224h255.93c28.425 0 42.767-34.488 22.627-54.627l-127.962-128c-12.496-12.496-32.758-12.497-45.255 0l-127.968 128C-10.695 189.472 3.55 224 32.032 224zM160 64l128 128H32L160 64z"/>
        </svg>
    )
}

export default Icon

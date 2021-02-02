import React, { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M432 0H16A16 16 0 0 0 0 16v16a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V16a16 16 0 0 0-16-16zM224 96A176 176 0 0 0 48 272v64a176 176 0 0 0 352 0v-64A176 176 0 0 0 224 96zm112 240a112 112 0 0 1-224 0v-64a112 112 0 0 1 224 0z"/>
        </svg>
    )
}

export default Icon

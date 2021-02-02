import React, { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M464 416a112 112 0 1 0-112-112 112 112 0 0 0 112 112zm-16-190.37V308a12 12 0 0 0 12 12h8a12 12 0 0 0 12-12v-82.37a80 80 0 1 1-32 0zM608 128H480V64h56a8 8 0 0 0 8-8V40a8 8 0 0 0-8-8H392a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h56v64H248a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8H104a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8H32a32 32 0 0 0-32 32v288a32 32 0 0 0 32 32h576a32 32 0 0 0 32-32V160a32 32 0 0 0-32-32zm0 320H32V160h576zm-432-32A112 112 0 1 0 64 304a112 112 0 0 0 112 112zm0-192a79.42 79.42 0 0 1 43.85 13.22l-56.52 56.53a12 12 0 0 0 0 17l5.65 5.65a12 12 0 0 0 17 0l56.6-56.6A79.93 79.93 0 1 1 176 224z"/>
        </svg>
    )
}

export default Icon

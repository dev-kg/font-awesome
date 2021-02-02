import React, { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M160 16c0-8.84-7.16-16-16-16h-32c-8.84 0-16 7.16-16 16v80H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h80v224c0 17.67 14.33 32 32 32h192v-64H160V16zm336 336h-80V128c0-17.67-14.33-32-32-32H192v64h160v336c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16v-80h80c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16z"/>
        </svg>
    )
}

export default Icon
import React, { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M496 400H48V80a16 16 0 0 0-16-16H16A16 16 0 0 0 0 80v336a32 32 0 0 0 32 32h464a16 16 0 0 0 16-16v-16a16 16 0 0 0-16-16zm-336-80a32 32 0 1 0-32-32 32 32 0 0 0 32 32zm256-160a32 32 0 1 0-32-32 32 32 0 0 0 32 32zm-224 0a32 32 0 1 0-32-32 32 32 0 0 0 32 32zm192 160a32 32 0 1 0-32-32 32 32 0 0 0 32 32zm-96-64a32 32 0 1 0-32-32 32 32 0 0 0 32 32z"/>
        </svg>
    )
}

export default Icon

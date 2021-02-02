import React, { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M128 32H32A32 32 0 0 0 0 64v384a32 32 0 0 0 32 32h96a16 16 0 0 0 16-16v-16a16 16 0 0 0-16-16H48V80h80a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zm288 0h-96a16 16 0 0 0-16 16v16a16 16 0 0 0 16 16h80v352h-80a16 16 0 0 0-16 16v16a16 16 0 0 0 16 16h96a32 32 0 0 0 32-32V64a32 32 0 0 0-32-32z"/>
        </svg>
    )
}

export default Icon

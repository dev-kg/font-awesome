import React, { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M256 304v160h-32V304h32M96 400v64H64v-64h32m176-144h-64c-17.67 0-32 14.33-32 32v192c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32V288c0-17.67-14.33-32-32-32zm-160 96H48c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32v-96c0-17.67-14.33-32-32-32z"/>
        </svg>
    )
}

export default Icon

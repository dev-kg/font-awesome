import React, { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M400 96a48 48 0 1 0-48-48 48 48 0 0 0 48 48zM128 256a128 128 0 1 0 128 128 128 128 0 0 0-128-128zm0 208a80 80 0 1 1 80-80 80.09 80.09 0 0 1-80 80zm384-208a128 128 0 1 0 128 128 128 128 0 0 0-128-128zm0 208a80 80 0 1 1 80-80 80.09 80.09 0 0 1-80 80zM401 210.73a24 24 0 0 0 15 5.27h64a24 24 0 0 0 0-48h-55.59L351 109.27a24 24 0 0 0-30.62.51l-104 89.11a32 32 0 0 0 3.06 50.94l76.53 51V416a24 24 0 0 0 48 0V288a24 24 0 0 0-10.69-20l-50.11-33.4 71.29-61.1z"/>
        </svg>
    )
}

export default Icon

import React, { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M261.573 286.544L196 352.118V56c0-13.255-10.745-24-24-24h-24c-13.255 0-24 10.745-24 24v296.118l-65.573-65.574c-9.373-9.373-24.569-9.373-33.941 0L7.515 303.515c-9.373 9.373-9.373 24.569 0 33.941L143.03 472.97c9.373 9.373 24.568 9.373 33.941 0l135.515-135.514c9.373-9.373 9.373-24.569 0-33.941l-16.971-16.971c-9.373-9.373-24.569-9.373-33.942 0z"/>
        </svg>
    )
}

export default Icon

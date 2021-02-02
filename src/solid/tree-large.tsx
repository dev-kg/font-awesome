import React, { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M439.6 455.6L349.8 352h36c25.6 0 39.5-29.2 23.2-48.5L314.1 192h44.8c21.3 0 32.9-22.5 19.3-37.3L243.3 8.2c-10-10.9-28.6-10.9-38.6 0L69.9 154.7c-13.6 14.8-2 37.3 19.3 37.3H134L39 303.5C22.7 322.8 36.6 352 62.2 352h36L8.4 455.6c-19 21.9-3.8 56.4 24.7 56.4h381.7c28.6 0 43.7-34.6 24.8-56.4z"/>
        </svg>
    )
}

export default Icon

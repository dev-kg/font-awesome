import React, { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M502.6 233.4l-64-64c-20.1-20.1-54.6-5.9-54.6 22.6v47H128v-47c0-28.4-34.5-42.8-54.6-22.6l-64 64c-12.5 12.5-12.5 32.8 0 45.3l64 64c20.1 20.1 54.6 5.9 54.6-22.6v-47h256v47c0 28.4 34.5 42.8 54.6 22.6l64-64c12.5-12.6 12.5-32.8 0-45.3zM100 320c0 3.5-4.3 5.4-6.8 2.8l-64-64c-1.6-1.6-1.6-4.1 0-5.6l64-64c2.5-2.5 6.8-.7 6.8 2.8zm382.8-61.2l-64 64c-2.5 2.5-6.8.7-6.8-2.8V192c0-3.5 4.3-5.4 6.8-2.8l64 64c1.6 1.5 1.6 4.1 0 5.6z"/>
        </svg>
    )
}

export default Icon

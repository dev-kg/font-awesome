import React, { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M112 432h32c17.7 0 32-14.4 32-32v-32c0-17.6-14.3-32-32-32h-32c-17.7 0-32 14.4-32 32v32c0 17.6 14.3 32 32 32zm0-64h32v32h-32v-32zm0-192h32c17.7 0 32-14.4 32-32v-32c0-17.6-14.3-32-32-32h-32c-17.7 0-32 14.4-32 32v32c0 17.6 14.3 32 32 32zm0-64h32v32h-32v-32zM416 0H32C14.3 0 0 14.4 0 32v448c0 17.6 14.3 32 32 32h384c17.7 0 32-14.4 32-32V32c0-17.6-14.3-32-32-32zm0 480H32V32h384v448zM216 144h128c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8H216c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8zm0 128h128c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8H216c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8zm0 128h128c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8H216c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8zm-97.4-113.6c2.1 2.1 5.5 2.1 7.6 0l64.2-63.6c2.1-2.1 2.1-5.5 0-7.6l-12.6-12.7c-2.1-2.1-5.5-2.1-7.6 0l-47.6 47.2-20.6-20.9c-2.1-2.1-5.5-2.1-7.6 0l-12.7 12.6c-2.1 2.1-2.1 5.5 0 7.6l36.9 37.4z"/>
        </svg>
    )
}

export default Icon

import React, { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 496 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M291 244l-72-21.9c-9-2.8-15.2-12.1-15.2-22.7 0-12.9 9.2-23.4 20.5-23.4h45c7 0 13.8 1.9 19.9 5.4 6.4 3.7 14.3 3.4 19.7-1.6l12-11.3c7.6-7.2 6.3-19.4-2.3-25.2-13.8-9.3-29.9-14.5-46.4-15.1V112c0-8.8-7.2-16-16-16h-16c-8.8 0-16 7.2-16 16v16c-37.6.1-68.2 32.1-68.2 71.4 0 31.5 20.2 59.7 49.2 68.6l72 21.9c9 2.8 15.2 12.1 15.2 22.7 0 12.9-9.2 23.4-20.5 23.4h-45c-7 0-13.8-1.9-19.9-5.4-6.4-3.7-14.3-3.4-19.7 1.6l-12 11.3c-7.6 7.2-6.3 19.4 2.3 25.2 13.8 9.3 29.9 14.5 46.4 15.1V400c0 8.8 7.2 16 16 16h16c8.8 0 16-7.2 16-16v-16c37.6-.1 68.2-32.1 68.2-71.4 0-31.5-20.2-59.7-49.2-68.6zM248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-110.3 0-200-89.7-200-200S137.7 56 248 56s200 89.7 200 200-89.7 200-200 200z"/>
        </svg>
    )
}

export default Icon

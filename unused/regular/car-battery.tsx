import React, { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M480 96h-48V80c0-8.84-7.16-16-16-16h-96c-8.84 0-16 7.16-16 16v15.98L208 96V80c0-8.84-7.16-16-16-16H96c-8.84 0-16 7.16-16 16v16H32c-17.67 0-32 14.33-32 32v288c0 17.67 14.33 32 32 32h448c17.67 0 32-14.33 32-32V128c0-17.67-14.33-32-32-32zm-16 304H48V144h416v256zM200 232H88c-4.42 0-8 3.58-8 8v32c0 4.42 3.58 8 8 8h112c4.42 0 8-3.58 8-8v-32c0-4.42-3.58-8-8-8zm224 0h-32v-32c0-4.42-3.58-8-8-8h-32c-4.42 0-8 3.58-8 8v32h-32c-4.42 0-8 3.58-8 8v32c0 4.42 3.58 8 8 8h32v32c0 4.42 3.58 8 8 8h32c4.42 0 8-3.58 8-8v-32h32c4.42 0 8-3.58 8-8v-32c0-4.42-3.58-8-8-8z"/>
        </svg>
    )
}

export default Icon
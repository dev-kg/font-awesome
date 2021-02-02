import React, { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M480 128h-32V80c0-8.84-7.16-16-16-16H304c-8.84 0-16 7.16-16 16v48h-64V80c0-8.84-7.16-16-16-16H80c-8.84 0-16 7.16-16 16v48H32c-17.67 0-32 14.33-32 32v256c0 17.67 14.33 32 32 32h448c17.67 0 32-14.33 32-32V160c0-17.67-14.33-32-32-32zM320 96h96v32h-96V96zM96 96h96v32H96V96zm384 320H32V160h448v256zm-56-160h-40v-40c0-4.42-3.58-8-8-8h-16c-4.42 0-8 3.58-8 8v40h-40c-4.42 0-8 3.58-8 8v16c0 4.42 3.58 8 8 8h40v40c0 4.42 3.58 8 8 8h16c4.42 0 8-3.58 8-8v-40h40c4.42 0 8-3.58 8-8v-16c0-4.42-3.58-8-8-8zm-224 0H88c-4.42 0-8 3.58-8 8v16c0 4.42 3.58 8 8 8h112c4.42 0 8-3.58 8-8v-16c0-4.42-3.58-8-8-8z"/>
        </svg>
    )
}

export default Icon
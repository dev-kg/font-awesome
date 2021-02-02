import React, { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M384 352V32c0-17.7-14.3-32-32-32H32C14.3 0 0 14.3 0 32v320c0 17.7 14.3 32 32 32h6.9L3.2 467.4C-5.9 488.5 9.6 512 32.6 512h318.9c23 0 38.5-23.5 29.4-44.6L345.1 384h6.9c17.7 0 32-14.3 32-32zm-32.6 128H32.6l68.6-160h181.7l68.5 160zm-20-128l-19.1-44.6c-5-11.8-16.6-19.4-29.4-19.4H101.1c-12.8 0-24.4 7.6-29.4 19.4L52.6 352H32V32h320v320h-20.6z"/>
        </svg>
    )
}

export default Icon

import React, { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M464 32H48C21.5 32 0 53.5 0 80v80c0 8.8 7.2 16 16 16h16v272c0 17.7 14.3 32 32 32h384c17.7 0 32-14.3 32-32V176h16c8.8 0 16-7.2 16-16V80c0-26.5-21.5-48-48-48zm-32 400H80V176h352v256zm32-304H48V80h416v48zM204 272h104c6.6 0 12-5.4 12-12v-24c0-6.6-5.4-12-12-12H204c-6.6 0-12 5.4-12 12v24c0 6.6 5.4 12 12 12z"/>
        </svg>
    )
}

export default Icon

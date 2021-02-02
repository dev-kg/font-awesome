import React, { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M416 32H32C14.3 32 0 46.3 0 64v384c0 17.7 14.3 32 32 32h384c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32zM57.8 179l64-80c3-3.8 9.5-3.8 12.5 0l64 80c4.2 5.2.4 13-6.2 13h-32v112c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16V192H64c-6.7 0-10.4-7.8-6.2-13zM384 408c0 4.4-3.6 8-8 8H72c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h304c4.4 0 8 3.6 8 8v16zm0-216h-32v112c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16V192h-32c-6.7 0-10.4-7.8-6.2-13l64-80c3-3.8 9.5-3.8 12.5 0l64 80c4.1 5.2.4 13-6.3 13z"/>
        </svg>
    )
}

export default Icon

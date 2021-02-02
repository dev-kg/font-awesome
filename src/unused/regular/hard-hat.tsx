import React, { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M480 320c0-101.46-67.5-187-160-214.6V80a16 16 0 0 0-16-16h-96a16 16 0 0 0-16 16v25.4C99.49 133 32 218.54 32 320a32 32 0 0 0-32 32v64a32 32 0 0 0 32 32h448a32 32 0 0 0 32-32v-64a32 32 0 0 0-32-32zM172.16 165.29l17.78 81.27a12 12 0 0 0 11.72 9.44H212a12 12 0 0 0 12-12V112h64v132a12 12 0 0 0 12 12h10.34a12 12 0 0 0 11.72-9.44l17.78-81.27A176.14 176.14 0 0 1 432 320H80a176.14 176.14 0 0 1 92.16-154.71zM464 400H48v-32h416z"/>
        </svg>
    )
}

export default Icon
import React, { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M166.74 33.62C69.96 46.04 0 133.11 0 230.68V464c0 8.84 7.16 16 16 16h64c8.84 0 16-7.16 16-16V224c0-59.2 53.85-106.04 115.13-94.14 45.58 8.85 76.87 51.5 76.87 97.93V464c0 8.84 7.16 16 16 16h64c8.84 0 16-7.16 16-16V224c0-114.18-100.17-205.4-217.26-190.38z"/>
        </svg>
    )
}

export default Icon

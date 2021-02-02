import React, { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M48 479h96c26.5 0 48-21.5 48-48V79c0-26.5-21.5-48-48-48H48C21.5 31 0 52.5 0 79v352c0 26.5 21.5 48 48 48zM32 79c0-8.8 7.2-16 16-16h96c8.8 0 16 7.2 16 16v352c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16V79zm272 400h96c26.5 0 48-21.5 48-48V79c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48v352c0 26.5 21.5 48 48 48zM288 79c0-8.8 7.2-16 16-16h96c8.8 0 16 7.2 16 16v352c0 8.8-7.2 16-16 16h-96c-8.8 0-16-7.2-16-16V79z"/>
        </svg>
    )
}

export default Icon

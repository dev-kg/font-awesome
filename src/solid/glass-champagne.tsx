import React, { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 256 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M216 464h-56V347.7c60.7-15.2 103.3-72 95-135.4L228 27.4C225.7 11.7 212.2 0 196.3 0H59.7C43.8 0 30.3 11.7 28 27.4L1 212.3c-8.3 63.4 34.3 120.2 95 135.4V464H40c-22.1 0-40 17.9-40 40 0 4.4 3.6 8 8 8h240c4.4 0 8-3.6 8-8 0-22.1-17.9-40-40-40zM61.8 128l11.7-80h109l11.7 80H61.8z"/>
        </svg>
    )
}

export default Icon

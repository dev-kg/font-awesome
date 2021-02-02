import React, { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M380.91 129.3C366.57 55.65 301.85 0 224 0S81.43 55.65 67.09 129.3A79.87 79.87 0 0 0 80 288h6l95 196.65a47.54 47.54 0 0 0 86.06 0L362 288h6a79.87 79.87 0 0 0 12.91-158.7zM238.22 470.73c-4.06 8.38-11.28 9.27-14.22 9.27s-10.16-.89-14.22-9.27L121.5 288h205zM368 256H80a47.86 47.86 0 0 1-7.75-95.12l22-3.59 4.25-21.88a127.86 127.86 0 0 1 251 0l4.25 21.88 22 3.59A47.86 47.86 0 0 1 368 256z"/>
        </svg>
    )
}

export default Icon
